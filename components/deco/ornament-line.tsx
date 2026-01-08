import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  size?: "full" | "half";
};

export function OrnamentLine({ size = "full" }: Props) {
  return (
    <div className="relative flex items-center justify-center gap-2">
      <DashedLine size={size} />
      <Image src="/star-filled.svg" alt="Star" width={30} height={30} />
      <DashedLine size={size} />
    </div>
  );
}

function DashedLine({ size }: Props) {
  return (
    <div
      className={cn(
        "border-gold/50 h-px border-t border-dashed",
        size === "full" && "flex-1",
        size === "half" && "w-1/4",
      )}
    />
  );
}
