import { DishBlock } from "./dish-block";
import { type NormalizedDish } from "./types";

type Props = {
  items: NormalizedDish[];
};

export function DishList({ items }: Props) {
  return (
    <ol className="grid gap-x-12 gap-y-7 lg:grid-cols-2">
      {items.map((dish) => (
        <li key={dish.key} className="border-gold/30 border-l pl-4">
          <DishBlock dish={dish} compact />
        </li>
      ))}
    </ol>
  );
}
