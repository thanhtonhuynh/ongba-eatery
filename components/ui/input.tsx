import { cn } from "@/lib/utils";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { ComponentProps } from "react";

function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "bg-wine/30 border-gold/25 text-gold placeholder:text-gold/50 focus-visible:border-gold focus-visible:ring-gold/25 aria-invalid:border-destructive file:text-gold w-full min-w-0 rounded-xl border px-4 py-3 text-base transition-colors outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
