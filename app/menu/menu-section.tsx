import { MenuItem } from "@/_types";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { cn } from "@/lib/utils";
import { ItemCard } from "./item-card";

type Props = {
  index?: number;
  title: string;
  description?: string;
  items: MenuItem[];
};

export function MenuSection({ index, title, description, items }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      className={cn("space-y-6 p-6", index !== undefined && index % 2 === 0 && "bg-dark-wine")}
    >
      <OrnamentLine />

      <div className="space-y-12 p-6">
        <div className="space-y-6 text-center">
          <h2 className="font-titoli text-4xl font-semibold tracking-wide uppercase">{title}</h2>
          {description && <p className="text-gold/80 whitespace-pre-line">{description}</p>}
        </div>

        <div className="grid grid-cols-2 gap-12">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
