import { beers } from "@/_data/coquitlam-drink-items";
import { MenuSectionFrame } from "../../menu-section";

/** Beers: On Tap uses a flat group price; Can prices each item individually. */
export function BeerSection({ index }: { index?: number }) {
  return (
    <MenuSectionFrame id="cq_drink_beers" index={index} title="Beers">
      <div className="space-y-10">
        {beers.map((group) => (
          <div key={group.label} className="space-y-4">
            <div className="border-gold/20 flex items-end justify-between gap-4 border-b pb-2">
              <h3 className="font-kasepi-sans text-light-gold text-lg tracking-[0.15em] uppercase sm:text-xl">
                {group.label}{" "}
                {group.subLabel && <span className="text-sm normal-case">{group.subLabel}</span>}
              </h3>
              {group.price && <span className="shrink-0 text-sm tracking-wide">{group.price}</span>}
            </div>

            <div className="space-y-6">
              {group.items.map((beer) => (
                <div key={beer.id} className="flex items-baseline justify-between gap-4">
                  <div className="space-y-0.5">
                    <p className="font-bricolage-grotesque text-base font-semibold tracking-wider uppercase sm:text-lg">
                      {beer.name}
                    </p>
                    {beer.style && <p className="text-secondary text-sm">{beer.style}</p>}
                  </div>
                  {beer.price && (
                    <span className="shrink-0 text-sm tracking-wider tabular-nums">
                      {beer.price}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MenuSectionFrame>
  );
}
