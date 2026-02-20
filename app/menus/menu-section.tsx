import { AddOnItem, MenuItem, Product } from "@/_types";
import { Container } from "@/components/container";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { Typography } from "@/components/typography";
import { cn } from "@/lib/utils";
import { ItemCard } from "./item-card";

type Props = {
  id: string;
  isFeatured?: boolean;
  index?: number;
  title: string;
  description?: string;
  items: MenuItem[] | Product[];
  addOns?: AddOnItem[];
};

export function MenuSection({ id, isFeatured, index, title, description, items, addOns }: Props) {
  if (items.length === 0) {
    return null;
  }

  return (
    <Container
      variant="section"
      id={id}
      className={cn(
        "scroll-mt-20",
        index !== undefined && index % 2 === 0 && "bg-dark-wine",
        isFeatured && "bg-wine",
      )}
    >
      <OrnamentLine />

      <Container variant="section-inner" maxWidth="7xl">
        {/* Title & description */}
        <div className="space-y-3 sm:space-y-6">
          <Typography variant="h2">{title}</Typography>
          {description && (
            <Typography variant="body-sm" className="text-secondary">
              {description}
            </Typography>
          )}
        </div>

        {/* Add-ons */}
        {addOns && addOns.length > 0 && (
          <div className="mb-6 space-y-1">
            {/* <h3 className="text-sm font-bold uppercase sm:text-base">Add-Ons</h3> */}
            <Typography variant="h3">Add-Ons</Typography>
            <ul className="space-y-2">
              {addOns.map((addOn, idx) => (
                <li key={idx}>
                  <Typography variant="body-sm">
                    {addOn.title} +{addOn.price}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Items */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-x-15">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Container>
  );
}
