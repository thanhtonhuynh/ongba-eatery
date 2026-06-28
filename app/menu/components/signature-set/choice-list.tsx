import { Fragment } from "react";
import { DishBlock } from "./dish-block";
import { type NormalizedDish } from "./types";

type Props = {
  items: NormalizedDish[];
};

/** "Or" divider — horizontal between stacked items on mobile, vertical between columns on desktop. */
function OrSeparator() {
  return (
    <div
      aria-hidden="true"
      className="flex w-1/2 items-center justify-center gap-3 self-center lg:w-auto lg:flex-col lg:self-stretch lg:px-2"
    >
      <span className="bg-gold/25 h-px flex-1 lg:h-auto lg:w-px" />
      <span className="font-bricolage-grotesque text-light-gold border-gold/40 bg-darkest-wine flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold tracking-[0.15em] uppercase">
        Or
      </span>
      <span className="bg-gold/25 h-px flex-1 lg:h-auto lg:w-px" />
    </div>
  );
}

export function ChoiceList({ items }: Props) {
  return (
    <div className="flex flex-col gap-7 lg:flex-row lg:items-stretch lg:gap-0">
      {items.map((dish, i) => (
        <Fragment key={dish.key}>
          {i > 0 && <OrSeparator />}
          <div className="flex flex-1 items-center justify-center lg:px-6">
            <DishBlock dish={dish} align="center" />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
