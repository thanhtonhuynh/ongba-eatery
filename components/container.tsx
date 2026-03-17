import { cn } from "@/lib/utils";

type Props = {
  variant: "page-header" | "section" | "section-inner" | "card" | "story-inner-section";
  maxWidth?: "5xl" | "6xl" | "7xl";
};

export function Container({
  variant,
  maxWidth,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & Props) {
  switch (variant) {
    case "page-header":
      return (
        <div
          className={cn(
            "flex flex-col items-center gap-6 px-3 py-8 text-center sm:gap-8 sm:px-6 sm:py-16 md:gap-10 md:py-24",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    case "section":
      return (
        <div className={cn("space-y-3 p-3 lg:space-y-6 lg:p-6", className)} {...props}>
          {children}
        </div>
      );
    case "section-inner":
      return (
        <div
          className={cn(
            "space-y-3 lg:space-y-6",
            maxWidth && `mx-auto max-w-${maxWidth}`,
            className,
          )}
          {...props}
        >
          {children}
        </div>
      );
    case "story-inner-section":
      return (
        <div className={cn("mx-auto flex w-full max-w-2xl flex-col gap-6", className)} {...props}>
          {children}
        </div>
      );
    case "card":
      return (
        <div
          className={cn("relative flex flex-col items-start gap-3 p-3 lg:gap-6 lg:p-6", className)}
          {...props}
        >
          {children}
        </div>
      );
    default:
      return null;
  }
}
