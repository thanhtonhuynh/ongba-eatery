import LogoGold from "@/assets/logo-gold.png";
import { cn } from "@/lib/utils";
import Image from "next/image";

/** Brand-styled gift-card mock: leaf-cornered double-gold frame, pattern wash,
 *  centered logo and engraved caption. Built from the site's own deco language.
 *  Self-contained `group` so the hover lift works wherever it is dropped. */
export function GiftCardPlate({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group border-gold rounded-tl-[80px] rounded-tr-2xl rounded-br-[80px] rounded-bl-2xl border p-1.5 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(247,206,131,0.24)] sm:rounded-tl-[110px] sm:rounded-br-[110px]",
        className,
      )}
    >
      <div className="border-gold/50 bg-wine relative flex aspect-[1.6/1] flex-col items-center justify-center gap-4 overflow-hidden rounded-tl-[74px] rounded-tr-xl rounded-br-[74px] rounded-bl-xl border sm:rounded-tl-[104px] sm:rounded-br-[104px]">
        <div className="absolute inset-0 bg-[url('/pattern-lightgold.svg')] bg-size-[260px] bg-center opacity-[0.12]" />
        <div className="pointer-events-none absolute inset-0 bg-radial from-transparent to-black/30" />

        <Image
          src={LogoGold}
          alt="Ông Bà Eatery"
          className="relative h-32 w-auto transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-32"
        />
        <span className="font-kasepi-sans text-gold relative text-base tracking-[0.45em] uppercase sm:text-lg">
          Gift Card
        </span>
      </div>
    </div>
  );
}
