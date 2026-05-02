import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  size?: "full" | "half";
  starSrc?: string;
  color?: "gold" | "wine";
};

/** Decorative line with a star in the center */
export function OrnamentLine({
  size = "full",
  starSrc = "/star-filled.svg",
  color = "gold",
}: Props) {
  return (
    <div className="relative flex items-center justify-center gap-2">
      <DashedLine size={size} color={color} />
      <Image
        className="pointer-events-none select-none"
        src={starSrc}
        alt="Star"
        width={20}
        height={20}
      />
      <DashedLine size={size} color={color} />
    </div>
  );
}

/** Dashed line */
function DashedLine({ size, color }: Props) {
  return (
    <div
      className={cn(
        "h-px border-t",
        size === "full" && "flex-1",
        size === "half" && "w-1/4",
        color === "gold" && "border-gold/40",
        color === "wine" && "border-wine/40",
      )}
    />
  );
}

/** Minimal ornament — minimal hairline rules + small star */
export function MinimalOrnament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="bg-gold/40 h-px w-12" />
      <svg width="14" height="14" viewBox="0 0 30 30">
        <path
          d="M15 0 L17 13 L30 15 L17 17 L15 30 L13 17 L0 15 L13 13 Z"
          className="fill-gold"
          opacity="0.7"
        />
      </svg>
      <span className="bg-gold/40 h-px w-12" />
    </div>
  );
}
