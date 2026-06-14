import { cn } from "@/lib/utils";
import { DishBlock } from "./dish-block";
import { type NormalizedDish } from "./types";

type Props = {
  items: NormalizedDish[];
  columns?: 2 | 3;
};

export function NumberedList({ items, columns = 2 }: Props) {
  return (
    <ol
      className={cn("grid gap-x-12 gap-y-7", columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2")}
    >
      {items.map((dish, i) => (
        <li key={dish.key} className="flex gap-4">
          <span className="font-bricolage-grotesque text-gold/70 pt-1 text-xs font-semibold tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="border-gold/30 flex-1 border-l pl-4">
            <DishBlock dish={dish} compact />
          </div>
        </li>
      ))}
    </ol>
  );
}
