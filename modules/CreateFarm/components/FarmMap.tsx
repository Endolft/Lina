"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import farmImage from "@/public/assets/farm.svg"; // Imagen de fondo

const MAX_POINTS = 4;

const FarmSelection = ({
  onSelection,
}: {
  onSelection: (selected: { x: number; y: number }[]) => void;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [selectedPointIndex, setSelectedPointIndex] = useState<number>(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const setContainerRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      containerRef.current = node;
    }
  }, []);

  const getInitialPoints = () => {
    if (!containerRef.current) return [];

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const size = Math.min(rect.width, rect.height) * 0.2;

    return [
      { x: centerX - size, y: centerY - size },
      { x: centerX + size, y: centerY - size },
      { x: centerX + size, y: centerY + size },
      { x: centerX - size, y: centerY + size },
    ];
  };

  useEffect(() => {
    if (containerRef.current) {
      const initialPoints = getInitialPoints();
      setPoints(initialPoints);
      onSelection(initialPoints);
    }
  }, []);

  const handleMapClick = (event: React.MouseEvent) => {
    if (!containerRef.current || selectedPointIndex === null) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      console.warn("❌ Click fuera de los límites:", { x, y });
      return;
    }

    setPoints((prevPoints) => {
      const newPoints = [...prevPoints];
      newPoints[selectedPointIndex] = { x, y };
      onSelection(newPoints);
      return newPoints;
    });
  };

  const handlePointSelection = (index: number) => {
    if (selectedPointIndex !== index) {
      setSelectedPointIndex(index);
    }
  };

  return (
    <div
      ref={setContainerRef}
      className="relative w-full h-full flex justify-center items-center overflow-hidden"
      onClick={handleMapClick}
      style={{
        backgroundImage: `url(${farmImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {points.length === MAX_POINTS && (
          <polygon
            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="rgba(0, 255, 0, 0.2)"
            stroke="green"
            strokeWidth="2"
          />
        )}

        {/* Puntos de control */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="8"
            fill={selectedPointIndex === index ? "red" : "green"} // 🔹 Cambia a rojo si está seleccionado
            stroke="white"
            strokeWidth="2"
            className="cursor-pointer pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation(); // Evita que el clic en el punto también registre un nuevo clic en la imagen
              handlePointSelection(index);
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FarmSelection;
