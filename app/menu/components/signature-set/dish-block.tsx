import { cn } from "@/lib/utils";
import { DietaryIcons } from "./dietary-icons";
import { type NormalizedDish } from "./types";

type Props = {
  dish: NormalizedDish;
  compact?: boolean;
  align?: "start" | "center";
};

export function DishBlock({ dish, compact = false, align = "start" }: Props) {
  return (
    <div
      className={cn(
        compact ? "space-y-1" : "space-y-1.5",
        align === "center" && "w-full max-w-sm text-center",
      )}
    >
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
      {dish.note && (
        <p className="font-bricolage-grotesque text-gold/80 text-xs font-medium tracking-wide italic">
          {dish.note}
        </p>
      )}
      {dish.dietary && dish.dietary.length > 0 && (
        <DietaryIcons tags={dish.dietary} align={align} />
      )}
    </div>
  );
}
