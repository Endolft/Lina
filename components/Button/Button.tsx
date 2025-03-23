import { ButtonHTMLAttributes, FormEvent, useEffect, useState } from "react";
import { ImageProps } from "next/image";
import LoadingSpinner from "@/components/LoadingSpinner";
import styles from "./Button.module.css";
import Img from "../Img";
import cn from "@/utils/classNames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: (_e: FormEvent<HTMLButtonElement>) => any;
  className?: string;
  label?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "simple";
  size?: "small" | "default";
  width?: "auto" | "full" | string;
  iconStart?: ImageProps["src"] | null;
  iconEnd?: ImageProps["src"] | null;
  isLoading?: boolean;
  disabledLoading?: boolean;
}

const VARIANTS_STYLE = {
  primary: "!bg-p1 text-n0",
  secondary: "bg-transparent text-p1 border border-p1",
  simple: "bg-transparent text-p1",
};

const SIZES_STYLE = {
  small: "py-xs px-m",
  default: "py-sm px-md",
};

const WIDTH_STYLE: Record<string, string> = {
  auto: "w-max",
  full: "w-full",
};

const STATUS_STYLE = {
  base: "gap-s rounded-rs font-normal",
  hover: "",
  focus: styles.focusButton,
  disabled: "disabled:cursor-default disabled:bg-n2 disabled:text-n3",
};

const LOADING_STYLE = {
  primary: "!border-n0",
  secondary: "border-p1",
  simple: "border-p1",
};

const ICON_STYLE = `w-5 h-5 object-contain shrink-0`;

const Button = ({
  handleClick = () => {},
  className = "",
  label,
  children,
  disabled,
  size = "default",
  variant = "primary",
  width = "auto",
  iconStart,
  iconEnd,
  isLoading: externalIsLoading,
  disabledLoading = false,
  ...props
}: Props) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (typeof externalIsLoading === "boolean") {
      setShowLoading(externalIsLoading);
    }
  }, [externalIsLoading]);

  const handleAsyncClick = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (showLoading) return;

    if (!disabledLoading) setShowLoading(true);
    await handleClick(e);
    setShowLoading(false);
  };

  const LoadingIndicator = () => {
    return (
      <LoadingSpinner
        size="1.25rem"
        lineWidth="2px"
        className={cn(
          styles.loading,
          LOADING_STYLE[variant],
          "absolute z-[1] mx-auto"
        )}
      ></LoadingSpinner>
    );
  };

  return (
    <button
      className={cn(
        "relative flex items-center justify-center w-full", // Base
        STATUS_STYLE.base, // Base
        STATUS_STYLE.disabled, // Disabled
        STATUS_STYLE.focus, // Focus
        STATUS_STYLE.hover, // Hover
        VARIANTS_STYLE[variant], // Variant
        SIZES_STYLE[size], // Size
        WIDTH_STYLE[width] || width, // Width
        className // Custom
      )}
      onClick={handleAsyncClick}
      disabled={disabled}
      {...props}
    >
      {showLoading && <LoadingIndicator />}

      {/* All the following elements are automatically hidden using CSS when LoadingIndicator is visible: */}
      {iconStart && (
        <Img
          src={iconStart}
          className={ICON_STYLE}
          width={32}
          height={32}
          alt="Icon"
        />
      )}
      {!!label && <span>{label}</span>}
      {children}
      {iconEnd && (
        <Img
          src={iconEnd}
          className={ICON_STYLE}
          width={32}
          height={32}
          alt="Icon"
        />
      )}
    </button>
  );
};

export default Button;
