import { Textarea } from "@/components/ui/textarea";
import type { UseFormRegisterReturn } from "react-hook-form";
import { FieldError } from "./field-error";
import { RequiredMark } from "./required-mark";

export function TextAreaField({
  label,
  required = false,
  optional = false,
  placeholder,
  registration,
  error,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
  registration: UseFormRegisterReturn;
  error?: string;
}) {
  const id = registration.name;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-gold/80 text-sm tracking-wide">
        {label}
        {required && <RequiredMark />}
        {optional && <span className="text-gold/45"> (optional)</span>}
      </label>
      <Textarea
        id={id}
        placeholder={placeholder}
        rows={4}
        aria-invalid={!!error}
        {...registration}
      />
      <FieldError>{error}</FieldError>
    </div>
  );
}
