import { Input } from "@/components/ui/input";
import type { UseFormRegisterReturn } from "react-hook-form";
import { FieldError } from "./field-error";
import { RequiredMark } from "./required-mark";

export function TextField({
  label,
  type = "text",
  required = false,
  autoComplete,
  className,
  registration,
  error,
}: {
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
  registration: UseFormRegisterReturn;
  error?: string;
}) {
  const id = registration.name;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-gold/80 text-sm tracking-wide">
        {label}
        {required && <RequiredMark />}
      </label>
      <Input
        id={id}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        className={className}
        {...registration}
      />
      <FieldError>{error}</FieldError>
    </div>
  );
}
