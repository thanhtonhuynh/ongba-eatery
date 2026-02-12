import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import Image from "next/image";

type TileImageVariant =
  | "square" // default
  | "roundTL"
  | "roundBR"
  | "roundBL"
  | "roundTR"
  | "roundR"
  | "roundT"
  | "leafL"
  | "leafR";

type TileMotionProps = {
  /** Subtle hover + optional slow float. Defaults to false for backwards compatibility. */
  animated?: boolean;
  /** Slow idle float (only if animated). */
  float?: boolean;
  /** Stagger feel for float + hover transitions. */
  delay?: number;
};

export function TileImage({
  img,
  alt,
  variant = "square",
  className,
  dim = false,
  animated = false,
  float = false,
  delay = 0,
}: {
  img: string;
  alt: string;
  variant?: TileImageVariant;
  className?: string;
  dim?: boolean;
} & TileMotionProps) {
  const floatAnim = animated && float;

  return (
    <motion.div
      className={cn(
        // Double-border frame
        "group border-gold/40 relative aspect-square rounded-4xl border bg-transparent p-[2px]",
        // Corner language (slightly tighter on small screens, larger on md+)
        variant === "roundTL" && "rounded-tl-[120px] sm:rounded-tl-[160px] md:rounded-tl-[200px]",
        variant === "roundBL" && "rounded-bl-[120px] sm:rounded-bl-[160px] md:rounded-bl-[200px]",
        variant === "roundBR" && "rounded-br-[120px] sm:rounded-br-[160px] md:rounded-br-[200px]",
        variant === "roundTR" && "rounded-tr-[120px] sm:rounded-tr-[160px] md:rounded-tr-[200px]",
        variant === "roundR" && "rounded-r-[120px] sm:rounded-r-[160px] md:rounded-r-[200px]",
        variant === "roundT" && "rounded-t-[120px] sm:rounded-t-[160px] md:rounded-t-[200px]",
        variant === "leafL" &&
          "rounded-tl-[120px] rounded-br-[120px] sm:rounded-tl-[160px] sm:rounded-br-[160px] md:rounded-tl-[200px] md:rounded-br-[200px]",
        variant === "leafR" &&
          "rounded-tr-[120px] rounded-bl-[120px] sm:rounded-tr-[160px] sm:rounded-bl-[160px] md:rounded-tr-[200px] md:rounded-bl-[200px]",
        animated &&
          "transition-shadow duration-300 will-change-transform hover:shadow-[0_0_20px_rgba(247,206,131,0.18)]",
        className,
      )}
      whileHover={animated ? { scale: 1.02 } : undefined}
      animate={floatAnim ? { y: [0, -6, 0] } : undefined}
      transition={
        floatAnim
          ? { duration: 6, repeat: Infinity, ease: "easeInOut", delay }
          : animated
            ? { type: "spring", stiffness: 240, damping: 22, delay }
            : undefined
      }
    >
      <div
        className={cn(
          "border-gold/40 relative h-full w-full overflow-hidden rounded-3xl border",
          variant === "roundTL" && "rounded-tl-[116px] sm:rounded-tl-[156px] md:rounded-tl-[196px]",
          variant === "roundBL" && "rounded-bl-[116px] sm:rounded-bl-[156px] md:rounded-bl-[196px]",
          variant === "roundBR" && "rounded-br-[116px] sm:rounded-br-[156px] md:rounded-br-[196px]",
          variant === "roundTR" && "rounded-tr-[116px] sm:rounded-tr-[156px] md:rounded-tr-[196px]",
          variant === "roundR" && "rounded-r-[116px] sm:rounded-r-[156px] md:rounded-r-[196px]",
          variant === "roundT" && "rounded-t-[116px] sm:rounded-t-[156px] md:rounded-t-[196px]",
          variant === "leafL" &&
            "rounded-tl-[116px] rounded-br-[116px] sm:rounded-tl-[156px] sm:rounded-br-[156px] md:rounded-tl-[196px] md:rounded-br-[196px]",
          variant === "leafR" &&
            "rounded-tr-[116px] rounded-bl-[116px] sm:rounded-tr-[156px] sm:rounded-bl-[156px] md:rounded-tr-[196px] md:rounded-bl-[196px]",
        )}
      >
        <Image
          src={img}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-transform duration-700 ease-out",
            animated && "group-hover:scale-[1.04]",
          )}
        />

        {/* Soft vignette so the gold frame reads */}
        {/* <div className="pointer-events-none absolute inset-0 bg-radial from-transparent to-black/20" /> */}
        {dim && <div className="bg-foreground/20 absolute inset-0" />}
      </div>
    </motion.div>
  );
}

export function TileShape({
  variant,
  filledStar = false,
  className,
  animated = false,
  float = false,
  delay = 0,
}: {
  variant: "squareStar" | "capsuleLeftStar" | "leafLeft" | "leafRight";
  filledStar?: boolean;
  className?: string;
} & TileMotionProps) {
  const floatAnim = animated && float;

  const baseFrame =
    "group border-gold/40 relative aspect-square border bg-transparent p-[2px] transition-shadow duration-300";
  const inner =
    "border-gold/40 relative h-full w-full border bg-linear-to-br from-darkest-wine/40 to-darkest-wine/10";

  const star = (
    <Image
      src={filledStar ? "/star-filled.svg" : "/star.svg"}
      alt="Star"
      width={60}
      height={60}
      className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 opacity-95 drop-shadow-[0_0_10px_rgba(247,206,131,0.15)] sm:size-7 md:size-8 lg:size-10"
    />
  );

  return (
    <>
      {variant === "squareStar" && (
        <motion.div
          className={cn(
            baseFrame,
            "rounded-[28px]",
            animated && "hover:shadow-[0_0_20px_rgba(247,206,131,0.14)]",
            className,
          )}
          whileHover={animated ? { scale: 1.02 } : undefined}
          animate={floatAnim ? { y: [0, -5, 0] } : undefined}
          transition={
            floatAnim
              ? { duration: 7, repeat: Infinity, ease: "easeInOut", delay }
              : animated
                ? { type: "spring", stiffness: 240, damping: 22, delay }
                : undefined
          }
        >
          <div className={cn(inner, "rounded-[24px]")}>
            {star}
            <div className="pointer-events-none absolute inset-0 bg-radial from-transparent to-black/25" />
          </div>
        </motion.div>
      )}

      {variant === "capsuleLeftStar" && (
        <motion.div
          className={cn(
            baseFrame,
            "rounded-full rounded-tl-[28px] rounded-tr-none rounded-br-[28px] rounded-bl-[28px]",
            animated && "hover:shadow-[0_0_20px_rgba(247,206,131,0.14)]",
            className,
          )}
          whileHover={animated ? { scale: 1.02 } : undefined}
          animate={floatAnim ? { y: [0, -5, 0] } : undefined}
          transition={
            floatAnim
              ? { duration: 7.5, repeat: Infinity, ease: "easeInOut", delay }
              : animated
                ? { type: "spring", stiffness: 240, damping: 22, delay }
                : undefined
          }
        >
          <div
            className={cn(
              inner,
              "rounded-full rounded-tl-[24px] rounded-tr-none rounded-br-[24px] rounded-bl-[24px]",
            )}
          >
            {star}
            <div className="pointer-events-none absolute inset-0 bg-radial from-transparent to-black/25" />
          </div>
        </motion.div>
      )}

      {variant === "leafLeft" && (
        <motion.div
          className={cn(
            baseFrame,
            "rounded-tl-[120px] rounded-br-[120px] sm:rounded-tl-[160px] sm:rounded-br-[160px]",
            animated && "hover:shadow-[0_0_20px_rgba(247,206,131,0.14)]",
            className,
          )}
          whileHover={animated ? { scale: 1.02 } : undefined}
          animate={floatAnim ? { y: [0, -5, 0] } : undefined}
          transition={
            floatAnim
              ? { duration: 7, repeat: Infinity, ease: "easeInOut", delay }
              : animated
                ? { type: "spring", stiffness: 240, damping: 22, delay }
                : undefined
          }
        >
          <div
            className={cn(
              inner,
              "rounded-tl-[116px] rounded-br-[116px] sm:rounded-tl-[156px] sm:rounded-br-[156px]",
            )}
          >
            {star}
            {/* <div className="pointer-events-none absolute inset-0 bg-radial from-transparent to-black/25" /> */}
          </div>
        </motion.div>
      )}

      {variant === "leafRight" && (
        <motion.div
          className={cn(
            baseFrame,
            "rounded-tr-[120px] rounded-bl-[120px] sm:rounded-tr-[160px] sm:rounded-bl-[160px]",
            animated && "hover:shadow-[0_0_20px_rgba(247,206,131,0.14)]",
            className,
          )}
          whileHover={animated ? { scale: 1.02 } : undefined}
          animate={floatAnim ? { y: [0, -5, 0] } : undefined}
          transition={
            floatAnim
              ? { duration: 7.2, repeat: Infinity, ease: "easeInOut", delay }
              : animated
                ? { type: "spring", stiffness: 240, damping: 22, delay }
                : undefined
          }
        >
          <div
            className={cn(
              inner,
              "rounded-tr-[116px] rounded-bl-[116px] sm:rounded-tr-[156px] sm:rounded-bl-[156px]",
            )}
          >
            {star}
            {/* <div className="pointer-events-none absolute inset-0 bg-radial from-transparent to-black/25" /> */}
          </div>
        </motion.div>
      )}
    </>
  );
}
