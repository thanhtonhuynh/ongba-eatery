import { AddOnItem, MenuItem, Product } from "@/_types";
import { Container } from "@/components/container";
import { MinimalOrnament } from "@/components/deco/ornament-line";
import { Typography } from "@/components/typography";
import { cn } from "@/lib/utils";
import { ItemCard } from "./item-card";

type MenuSectionFrameProps = {
  id: string;
  index?: number;
  isFeatured?: boolean;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export function MenuSectionFrame({
  id,
  index,
  isFeatured,
  title,
  description,
  children,
}: MenuSectionFrameProps) {
  return (
    <Container
      variant="section"
      id={id}
      className={cn(
        "scroll-mt-20 py-4",
        index !== undefined && index % 2 === 0 && "bg-dark-wine",
        isFeatured && "bg-wine",
      )}
    >
      <MinimalOrnament />

      <Container variant="section-inner" maxWidth="7xl" className="mt-6 px-3 sm:px-6">
        {(title || description) && (
          <div className="space-y-3 sm:space-y-6">
            {title && (
              <Typography
                variant="h2"
                className="font-bricolage-grotesque text-light-gold text-xl font-bold tracking-[0.18em] uppercase sm:text-2xl"
              >
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="body-sm" className="text-secondary whitespace-pre-line">
                {description}
              </Typography>
            )}
          </div>
        )}

        <div className={cn((title || description) && "mt-4", "space-y-6")}>{children}</div>
      </Container>
    </Container>
  );
}

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
    <MenuSectionFrame
      id={id}
      index={index}
      isFeatured={isFeatured}
      title={title}
      description={description}
    >
      {/* Add-ons */}
      {addOns && addOns.length > 0 && (
        <div className="mb-6 space-y-1">
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
    </MenuSectionFrame>
  );
}
