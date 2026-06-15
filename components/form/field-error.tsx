/** Inline validation message shown below a field. */
export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return <p className="text-destructive text-sm">{children}</p>;
}
