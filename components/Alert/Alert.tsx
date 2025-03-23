import cn from "@/utils/classNames";
import React from "react";

interface AlertProps {
  title: string;
  message: string;
  timeAgo: string;
  type?: "default" | "warning" | "urgent"; // Tipos de alerta
  actionLabel?: string;
  onAction?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  title,
  message,
  timeAgo,
  type = "default", // Valor por defecto
  actionLabel = "Ask Lina",
  onAction,
}) => {
  const alertStyles = {
    default: "bg-white text-gray-700 border border-gray-300",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-400",
    urgent: "bg-red-100 text-red-800 border border-red-500",
  };

  return (
    <div className={cn("p-4 rounded-md shadow-md", alertStyles[type])}>
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{title}</h4>
        <span className="text-sm opacity-70">{timeAgo}</span>
      </div>
      <p className="text-sm my-2">{message}</p>
      {onAction && (
        <button
          onClick={onAction}
          className="text-green-600 font-semibold flex items-center gap-1"
        >
          {actionLabel} →
        </button>
      )}
    </div>
  );
};

export default Alert;
