export function Star({ size = 14, opacity = 0.85 }: { size?: number; opacity?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true" className="shrink-0">
      <path
        d="M15 0 L17 13 L30 15 L17 17 L15 30 L13 17 L0 15 L13 13 Z"
        className="fill-gold"
        opacity={opacity}
      />
    </svg>
  );
}
