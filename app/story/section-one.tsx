import { DoubleBorderImage } from "@/components/deco/double-border-image";
import { OrnamentLine } from "@/components/deco/ornament-line";

export function SectionOne() {
  return (
    <section className="space-y-6 p-6">
      <OrnamentLine size="half" />

      <div className="flex flex-col items-center gap-8 p-6">
        <div className="grid w-full max-w-xl grid-cols-2 gap-8">
          <DoubleBorderImage img="/story/ong.png" alt="Ong's Old Photo" className="h-90" />
          <p>
            Bố was a village fisherman from a remote island in Halong Bay. Mẹ was a city girl from
            Haiphong, working at the docks to help her family survive the war. They came from
            different worlds, but their paths crossed, and something lasting began.
          </p>
        </div>

        <div className="grid w-full max-w-xl grid-cols-2 gap-8">
          <p>
            They had no wedding, no rings — just a promise. Bố gifted Mẹ a sewing machine, a rare
            and precious item at the time. It was the most valuable thing they owned, and a symbol
            of his love. But war would test everything.
          </p>

          <DoubleBorderImage img="/story/ba-1.png" alt="Ba's Old Photo" className="h-88" />
        </div>
      </div>
    </section>
  );
}
