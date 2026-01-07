import { cn } from "@/lib/utils";
import Image from "next/image";
import { OrnamentLine } from "../deco/ornament-line";
import { Heading } from "../heading";
import { DoubleBorderButton } from "../ui/button";

export function MenuOverview() {
  return (
    <section className="space-y-6 p-6">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col items-center gap-8 border p-6">
        <Heading>Menu</Heading>
        <p>Traditional flavour with modern twist - Food nourished for the soul</p>

        <div className="grid w-full max-w-5xl grid-cols-4 grid-rows-2">
          {/* Row 1 */}
          <TileImage img="/bo-ne.jpg" alt="Spring rolls" variant="roundTL" />
          <TileShape filledStar variant="squareStar" />
          <TileImage img="/fish-dish.jpg" alt="Dish" variant="roundTR" />
          <TileShape variant="leafLeft" />

          {/* Row 2 */}
          <TileShape variant="capsuleLeftStar" />
          <TileImage img="/rib-pho.jpg" alt="Dish 2" variant="roundBR" />
          <TileShape filledStar variant="leafRight" />
          <TileImage img="/bun-bo-hue.jpg" alt="Interior" variant="roundBR" />
        </div>

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          View Menu
        </DoubleBorderButton>
      </div>
    </section>
  );
}

/* ---------------- Tiles ---------------- */

function TileImage({
  img,
  alt,
  variant,
  className,
}: {
  img: string;
  alt: string;
  variant: "square" | "roundTL" | "roundBR" | "roundTR" | "roundR";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square overflow-hidden border border-[#f7ce83]/45",
        variant === "square" && "rounded-none",
        variant === "roundTL" && "rounded-none rounded-tl-[160px]",
        variant === "roundBR" && "rounded-none rounded-br-[160px]",
        variant === "roundTR" && "rounded-tr-[160px]",
        variant === "roundR" && "rounded-r-[160px]",
        className,
      )}
    >
      <Image src={img} alt={alt} fill className="object-cover" />
    </div>
  );
}

function TileShape({
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
