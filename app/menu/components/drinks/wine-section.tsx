import { wines } from "@/_data/coquitlam-drink-items";
import { MenuSectionFrame } from "../../menu-section";

/** Wines: grouped by style (Sparkling / White & Rosé / Red) with 6oz + bottle pricing. */
export function WineSection({ index }: { index?: number }) {
  return (
    <MenuSectionFrame id="cq_drink_wines" index={index} title="Wines">
      <div className="space-y-10">
        {wines.map((group) => (
          <div key={group.label} className="space-y-4">
            <div className="border-gold/20 flex items-end justify-between gap-4 border-b pb-2">
              <h3 className="font-kasepi-sans text-light-gold text-lg tracking-[0.15em] uppercase sm:text-xl">
                {group.label}
              </h3>
              <div className="text-secondary flex shrink-0 gap-4 text-[11px] font-semibold tracking-[0.18em] uppercase">
                <span className="w-6 text-right">6oz</span>
                <span className="w-6 text-right">Btl</span>
              </div>
            </div>

            <ul className="space-y-6">
              {group.items.map((wine) => (
                <li key={wine.id} className="flex items-baseline justify-between gap-4">
                  <div className="min-w-0 space-y-0.5">
                    <p className="font-bricolage-grotesque text-base font-semibold tracking-wider uppercase sm:text-lg">
                      {wine.name}
                    </p>
                    <p className="text-secondary font-medium normal-case italic">{wine.region}</p>
                    <p className="text-secondary mt-1 text-sm">{wine.varietal}</p>
                  </div>
                  <div className="flex shrink-0 gap-4 tracking-wider tabular-nums">
                    <span className="w-6 text-right">{wine.glass ?? "-"}</span>
                    <span className="w-6 text-right">{wine.bottle}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MenuSectionFrame>
  );
}
