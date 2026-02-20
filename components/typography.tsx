import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  variant: "h1" | "h2" | "h3" | "body" | "body-sm";
};

export function Typography({
  children,
  className,
  variant = "body",
  ...props
}: React.ComponentProps<"div"> & Props) {
  switch (variant) {
    case "h1":
      return (
        <div
          className={cn(
            "font-bricolage-grotesque text-3xl font-semibold tracking-wider uppercase sm:text-4xl lg:text-5xl",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    case "h2":
      return (
        <div
          className={cn(
            "font-bricolage-grotesque text-2xl font-semibold tracking-wider uppercase sm:text-3xl lg:text-4xl",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    case "h3":
      return (
        <div
          className={cn(
            "font-bricolage-grotesque text-lg font-semibold tracking-wider uppercase sm:text-xl lg:text-2xl",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    case "body":
      return (
        <div className={cn("text-base whitespace-pre-line xl:text-lg", className)} {...props}>
          {children}
        </div>
      );
    case "body-sm":
      return (
        <div className={cn("text-sm whitespace-pre-line md:text-base", className)} {...props}>
          {children}
        </div>
      );
    default:
      return null;
  }
}
