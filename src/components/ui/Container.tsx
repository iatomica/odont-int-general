import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  className,
  size = "default",
  children,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          {
            "max-w-7xl": size === "default",
            "max-w-4xl": size === "narrow",
            "max-w-[1400px]": size === "wide",
          },
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
};
