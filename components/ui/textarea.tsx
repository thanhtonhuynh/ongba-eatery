import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "bg-wine/30 border-gold/25 text-gold placeholder:text-gold/50 focus-visible:border-gold focus-visible:ring-gold/25 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full resize-none rounded-xl border px-4 py-3 text-base transition-colors outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
