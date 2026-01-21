import { cn } from "@/lib/utils";

export function Heading({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("font-titoli text-5xl font-bold tracking-wider uppercase", className)}
      {...props}
    />
  );
}
