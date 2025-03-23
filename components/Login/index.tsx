"use client";
import { MiniKit, WalletAuthInput } from "@worldcoin/minikit-js";
import { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const walletAuthInput = (nonce: string): WalletAuthInput => {
  return {
    nonce,
    requestId: uuidv4(), // 🔥 Genera un ID único en cada intento
    expirationTime: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    notBefore: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    statement:
      "This is my statement and here is a link https://worldcoin.com/apps",
  };
};

type User = {
  walletAddress: string;
  username: string | null;
  profilePictureUrl: string | null;
};

export const Login = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setLoading(true);

      // 🔍 Obtiene nonce desde el backend
      const res = await fetch(`/api/nonce`);
      console.log("error", res);
      if (!res.ok) {
        throw new Error("Error obteniendo el nonce");
      }
      const { nonce } = await res.json();

      // 🔍 Ejecuta la autenticación de Worldcoin
      const { finalPayload } = await MiniKit.commandsAsync.walletAuth(
        walletAuthInput(nonce)
      );

      if (finalPayload.status === "error") {
        console.error("Worldcoin authentication error:", finalPayload);
        setLoading(false);
        return;
      }

      // 🔍 Envia la respuesta al backend
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payload: finalPayload, nonce }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuario autenticado:", data.user);
        setUser(data.user); // ✅ Usa el usuario devuelto por el backend
        router.push("/farm/create");
      } else {
        console.error("Error en la autenticación:", await response.text());
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? "Connecting..." : "Sign in"}
      </Button>
      {user && (
        <div className="mt-4 text-center">
          <p>Welcome, {user.username || "User"}!</p>
          <button onClick={handleLogout} className="mt-2 text-red-500">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};
