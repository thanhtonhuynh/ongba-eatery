import { cn } from "@/lib/utils";

/** @deprecated Use Typography instead */
export function Heading({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "font-titoli text-3xl font-bold tracking-wider uppercase sm:text-4xl md:text-5xl",
        className,
      )}
      {...props}
    />
  );
}
