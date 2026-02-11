import { DoubleBorderImage } from "@/components/deco/double-border-image";
import { OrnamentLine } from "@/components/deco/ornament-line";

export function SectionOne() {
  return (
    <section className="space-y-4 p-4 sm:space-y-6 sm:p-6">
      <OrnamentLine size="half" />

      <div className="flex flex-col items-center gap-6 p-4 sm:gap-8 sm:p-6">
        <div className="grid w-full max-w-xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <DoubleBorderImage
            img="/story/ong.png"
            alt="Ong's Old Photo"
            className="h-64 w-full sm:h-80 md:h-90"
            objectPosition="object-top"
          />
          <p className="text-sm sm:text-base">
            Bố was a village fisherman from a remote island in Halong Bay. Mẹ was a city girl from
            Haiphong, working at the docks to help her family survive the war. They came from
            different worlds, but their paths crossed, and something lasting began.
          </p>
        </div>

        <div className="grid w-full max-w-xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <p className="order-2 text-sm sm:order-1 sm:text-base">
            They had no wedding, no rings — just a promise. Bố gifted Mẹ a sewing machine, a rare
            and precious item at the time. It was the most valuable thing they owned, and a symbol
            of his love. But war would test everything.
          </p>

          <DoubleBorderImage
            img="/story/ba-1.png"
            alt="Ba's Old Photo"
            className="order-1 h-64 w-full sm:order-2 sm:h-72 md:h-88"
          />
        </div>
      </div>
    </section>
  );
}
