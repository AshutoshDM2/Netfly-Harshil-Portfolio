"use client";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

interface CustomButtonProps {
  label: string;
  hoverLabel?: string;
  variant?: "solid" | "outline";
  size?: "sm" | "lg" | "icon" | "default";
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function CustomButton({
  label,
  hoverLabel,
  variant = "solid",
  size = "lg",
  icon,
  className,
  onClick,
  disabled,
}: CustomButtonProps) {
  const baseStyles =
    "cursor-pointer group relative font-semibold text-base rounded-md transition-all duration-200 ease-in-out flex items-center justify-center gap-3";

  const sizes = {
    sm: "px-4 py-2 text-sm h-10",
    md: "px-8 py-3 text-base h-11",
    lg: "w-60 py-4 text-lg h-12",
  };

  const variants = {
    solid:
      "bg-gradient-to-r from-[#6200FF] to-[#D900FF] text-white shadow hover:shadow-lg dark:bg-white dark:text-white dark:hover:bg-zinc-300",
    outline:
      "border border-zinc-400/60 text-black dark:bg-transparent bg-white dark:text-white dark:border-zinc-400/60 hover:shadow-md",
  };

  return (
    <Button
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseStyles,
        sizes[
          size === "icon" || size === "default"
            ? "md"
            : (size as keyof typeof sizes)
        ],
        variants[variant],
        className
      )}
    >
      <span className="relative inline-block overflow-hidden">
        <span
          className={clsx(
            "block transition-transform duration-300",
            hoverLabel && "group-hover:-translate-y-full"
          )}
        >
          {label}
        </span>
        {hoverLabel && (
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            {hoverLabel}
          </span>
        )}
      </span>
      {icon && (
        <div className="w-6 h-6 flex items-center justify-center rounded-full">
          {icon}
        </div>
      )}
    </Button>
  );
}