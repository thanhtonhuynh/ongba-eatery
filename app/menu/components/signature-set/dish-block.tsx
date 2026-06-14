import { cn } from "@/lib/utils";
import { DietaryIcons } from "./dietary-icons";
import { type NormalizedDish } from "./types";

type Props = {
  dish: NormalizedDish;
  compact?: boolean;
};

export function DishBlock({ dish, compact = false }: Props) {
  return (
    <div className={cn(compact ? "space-y-1" : "space-y-1.5")}>
      <p className="font-bricolage-grotesque text-base font-bold tracking-tight uppercase sm:text-lg">
        {dish.titleVi}
      </p>
      {dish.titleEn && (
        <p className="font-bricolage-grotesque text-secondary text-sm font-semibold italic">
          {dish.titleEn}
        </p>
      )}
      {dish.description && (
        <p className="text-secondary text-sm leading-relaxed">{dish.description}</p>
      )}
      {dish.dietary && dish.dietary.length > 0 && <DietaryIcons tags={dish.dietary} />}
    </div>
  );
}
