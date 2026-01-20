import { AddOnItem, MenuItem } from "@/_types";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { cn } from "@/lib/utils";
import { ItemCard } from "./item-card";

type Props = {
  id: string;
  isFeatured?: boolean;
  index?: number;
  title: string;
  description?: string;
  items: MenuItem[];
  addOns?: AddOnItem[];
};

export function MenuSection({ id, isFeatured, index, title, description, items, addOns }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section
      id={id}
      className={cn(
        "space-y-6 p-6",
        index !== undefined && index % 2 === 0 && "bg-dark-wine",
        isFeatured && "bg-wine",
      )}
    >
      <OrnamentLine />

      <div className="space-y-6 px-6">
        {/* Title & description */}
        <div className="space-y-3">
          <h2 className="font-titoli text-4xl font-semibold tracking-widest uppercase">{title}</h2>
          {description && <p className="text-gold/80 whitespace-pre-line">{description}</p>}
        </div>

        {/* Items */}
        <div className="grid auto-rows-fr grid-cols-2 gap-6 gap-x-15">
          {items.map((item) => (
            <div key={item.id} className="">
              <ItemCard item={item} />
            </div>
          ))}
        </div>

        {/* Add-ons */}
        {addOns && addOns.length > 0 && (
          <div className="space-y-1 text-sm">
            <h3 className="text-base font-bold uppercase">Add-Ons</h3>
            <ul className="space-y-2">
              {addOns.map((addOn, idx) => (
                <li key={idx} className="uppercase">
                  {addOn.title} (+{addOn.price})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
