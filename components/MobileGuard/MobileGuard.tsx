// components/MobileGuard.tsx
"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import Img from "../Img";
import logoLina from "@/public/assets/logo-lina.svg";
import Card from "../Card";

export function MobileGuard({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div className="h-screen w-screen flex   items-center justify-center flex-col">
        <Card
          className="!w-[30rem]  text-center  flex flex-col gap-4 items-center justify-center"
          shadow="e4"
        >
          <Img src={logoLina} alt="logo lina" className="w-24 h-24" />
          <h4>Este contenido solo está disponible en móvil</h4>
          <p className="text-n3">
            Accede desde un dispositivo con menor ancho de pantalla.
          </p>
        </Card>
      </div>
    );
  }

  return <>{children}</>;
}
