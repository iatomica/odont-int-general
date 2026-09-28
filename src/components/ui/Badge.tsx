import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "neutral" | "petrol" | "accent";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "neutral",
  children,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        clsx(
          "inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md tracking-tight",
          {
            "bg-surface-subtle text-charcoal-secondary border border-surface-muted": variant === "neutral",
            "bg-petrol-50 text-petrol-800 border border-petrol-200": variant === "petrol",
            "bg-petrol-700 text-white": variant === "accent",
          },
          className
        )
      )}
      {...props}
    >
      {children}
    </span>
  );
};
