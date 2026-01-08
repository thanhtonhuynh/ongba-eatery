import { cn } from "@/lib/utils";
import Image from "next/image";

type TileImageVariant =
  | "square"
  | "roundTL"
  | "roundBR"
  | "roundBL"
  | "roundTR"
  | "roundR"
  | "roundT"
  | "leafL"
  | "leafR";

export function TileImage({
  img,
  alt,
  variant,
  className,
  dim = false,
}: {
  img: string;
  alt: string;
  variant: TileImageVariant;
  className?: string;
  dim?: boolean;
}) {
  return (
    <div
      className={cn(
        "border-gold/50 relative aspect-square overflow-hidden border",
        variant === "square" && "rounded-none",
        variant === "roundTL" && "rounded-tl-[200px]",
        variant === "roundBL" && "rounded-bl-[200px]",
        variant === "roundBR" && "rounded-br-[200px]",
        variant === "roundTR" && "rounded-tr-[200px]",
        variant === "roundR" && "rounded-r-[200px]",
        variant === "roundT" && "rounded-t-[200px]",
        variant === "leafL" && "rounded-tl-[200px] rounded-br-[200px]",
        variant === "leafR" && "rounded-tr-[200px] rounded-bl-[200px]",
        className,
      )}
    >
      <Image src={img} alt={alt} fill className="object-cover" />
      {dim && <div className="bg-foreground/20 absolute inset-0" />}
    </div>
  );
}

export function TileShape({
  variant,
  filledStar = false,
  className,
}: {
  variant: "squareStar" | "capsuleLeftStar" | "leafLeft" | "leafRight";
  filledStar?: boolean;
  className?: string;
}) {
  return (
    <>
      {variant === "squareStar" && (
        <div className={cn("border-gold/50 relative border-t", className)}>
          <Image
            src={filledStar ? "/star-filled.svg" : "/star.svg"}
            alt="Star"
            width={100}
            height={100}
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}

      {variant === "capsuleLeftStar" && (
        <div
          className={cn(
            "border-gold/50 relative rounded-full rounded-br-none border-b border-l",
            className,
          )}
        >
          <Image
            src={filledStar ? "/star-filled.svg" : "/star.svg"}
            alt="Star"
            width={30}
            height={30}
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}

      {variant === "leafLeft" && (
        <div className="border-gold/50 relative rounded-tl-[160px] rounded-br-[160px] border">
          <Image
            src={filledStar ? "/star-filled.svg" : "/star.svg"}
            alt="Star"
            width={30}
            height={30}
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}

      {variant === "leafRight" && (
        <div className="border-gold/50 relative rounded-tr-[160px] rounded-bl-[160px] border">
          <Image
            src={filledStar ? "/star-filled.svg" : "/star.svg"}
            alt="Star"
            width={30}
            height={30}
            className="absolute top-1/2 left-1/2 size-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}
    </>
  );
}
