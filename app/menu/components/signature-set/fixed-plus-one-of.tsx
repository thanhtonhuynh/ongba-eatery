import { type SignatureSetDish } from "@/_data/coquitlam-signature-set";
import { DishBlock } from "./dish-block";
import { NumberedList } from "./numbered-list";
import { normalizeSignatureDish } from "./types";

type Props = {
  fixed: SignatureSetDish;
  options: SignatureSetDish[];
};

export function FixedPlusOneOf({ fixed, options }: Props) {
  return (
    <div className="space-y-7">
      {/* Anchor: fixed dish */}
      <div className="flex gap-4">
        <div className="pt-1">
          <span className="font-bricolage-grotesque border-gold/40 bg-darkest-wine text-light-gold inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] font-semibold tracking-[0.22em] uppercase">
            Included
          </span>
        </div>
        <div className="border-gold/30 flex-1 border-l pl-4">
          <DishBlock dish={normalizeSignatureDish(fixed)} compact />
        </div>
      </div>

      {/* Connector */}
      <div className="flex items-center gap-3 px-1">
        <span className="bg-gold/25 h-px flex-1" />
        <span className="font-bricolage-grotesque border-gold/40 bg-darkest-wine text-light-gold rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase">
          + Choose 1
        </span>
        <span className="bg-gold/25 h-px flex-1" />
      </div>

      <NumberedList items={options.map(normalizeSignatureDish)} columns={3} />
    </div>
  );
}
