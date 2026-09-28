import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={twMerge(
          clsx(
            "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-petrol-700 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100",
            {
              // Sizes
              "text-xs px-3.5 py-1.5 gap-1.5": size === "sm",
              "text-sm px-5 py-2.5 gap-2": size === "md",
              "text-base px-6 py-3.5 gap-2.5": size === "lg",
              // Variants
              "bg-petrol-700 text-white hover:bg-petrol-800 shadow-sm hover:shadow": variant === "primary",
              "bg-surface text-charcoal border border-surface-muted hover:border-petrol-600 hover:text-petrol-700 shadow-sm":
                variant === "secondary",
              "text-charcoal-secondary hover:text-charcoal hover:bg-surface-subtle": variant === "ghost",
              "bg-white text-petrol-900 hover:bg-slate-50 shadow-sm": variant === "white",
              // Width
              "w-full": fullWidth,
            },
            className
          )
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
