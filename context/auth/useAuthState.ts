import { useReducer, useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { reducer, initialState } from "./reducer";
import { MiniKit, WalletAuthInput } from "@worldcoin/minikit-js";
import { useRouter } from "next/navigation";
import { ActionTypes } from "./types";
import { HTTP_STATUS } from "@/constants";

const walletAuthInput = (nonce: string): WalletAuthInput => {
  return {
    nonce,
    requestId: "0",
    expirationTime: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    notBefore: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    statement:
      "This is my statement and here is a link https://worldcoin.com/apps",
  };
};

const useAuthState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const refreshUserData = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/me");

      if (response.ok) {
        const data = await response.json();
        router.push("/farm/create");
        if (data.user) {
          dispatch({ type: ActionTypes.LOGIN, value: data.user });
        }
      }
    } catch (error) {
      toast.error("Error fetching user data");
    }
  }, []);

  useEffect(() => {
    refreshUserData();
  }, [refreshUserData]);

  const handleLogin = async () => {
    console.log("call");
    try {
      setLoading(true);
      const res = await fetch(`/api/nonce`);
      const { nonce } = await res.json();

      alert(JSON.stringify(res));

      const { finalPayload } = await MiniKit.commandsAsync.walletAuth(
        walletAuthInput(nonce)
      );

      if (finalPayload.status === "error") {
        setLoading(false);
        return;
      } else {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payload: finalPayload,
            nonce,
          }),
        });

        if (
          response.status === HTTP_STATUS.ok ||
          response.status === HTTP_STATUS.created
        ) {
          dispatch({ type: ActionTypes.LOGIN, value: await response.json() });
        }
        setLoading(false);
      }
    } catch (error) {
      alert(JSON.stringify(error));
      console.error("Login error:", error);
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      dispatch({ type: ActionTypes.LOGOUT });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const actions = {
    loading,
    handleLogin,
    handleLogout,
  };

  return { ...state, ...actions };
};

useAuthState.defaultReturn = (): ReturnType<typeof useAuthState> => ({
  ...initialState,
  loading: false,
  handleLogin: async () => {},
  handleLogout: async () => {},
});

export default useAuthState;
