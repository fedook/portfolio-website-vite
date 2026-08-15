import React from "react";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800",

    secondary:
      "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",

    tertiary:
      "bg-transparent text-blue-600 hover:underline px-0 py-0 rounded-none",

    outline:
      "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={cn(
        "cursor-pointer inline-flex items-center justify-center font-medium transition-colors focus:outline-none rounded-lg",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}