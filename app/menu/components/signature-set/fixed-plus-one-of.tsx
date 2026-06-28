import { type SignatureSetDish } from "@/_data/coquitlam-signature-set";
import { ChoiceList } from "./choice-list";
import { DishBlock } from "./dish-block";
import { normalizeSignatureDish } from "./types";

type Props = {
  fixed: SignatureSetDish;
  options: SignatureSetDish[];
};

export function FixedPlusOneOf({ fixed, options }: Props) {
  return (
    <div className="space-y-7">
      {/* Anchor: fixed dish */}
      <div className="border-gold/30 border-l pl-4">
        <DishBlock dish={normalizeSignatureDish(fixed)} compact />
      </div>

      <span aria-hidden="true" className="bg-gold/25 block h-px w-full" />

      <ChoiceList items={options.map(normalizeSignatureDish)} />
    </div>
  );
}
