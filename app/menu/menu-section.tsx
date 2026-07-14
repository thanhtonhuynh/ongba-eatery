import { AddOnItem, MenuItem, Product } from "@/_types";
import { Container } from "@/components/container";
import { MinimalOrnament } from "@/components/deco/ornament-line";
import { Reveal } from "@/components/reveal";
import { Typography } from "@/components/typography";
import { cn } from "@/lib/utils";
import { ItemCard } from "./item-card";

type MenuSectionFrameProps = {
  id: string;
  index?: number;
  isFeatured?: boolean;
  title?: string;
  description?: string;
  /** Short availability chip shown next to the title (e.g. "Dine-in only"). */
  note?: string;
  children: React.ReactNode;
};

/** Small uppercase pill rendered next to a section title (e.g. dine-in / lunch only). */
export function SectionNoteChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-bricolage-grotesque border-gold/40 bg-wine/40 text-light-gold inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase">
      {children}
    </span>
  );
}

export function MenuSectionFrame({
  id,
  index,
  isFeatured,
  title,
  description,
  note,
  children,
}: MenuSectionFrameProps) {
  return (
    <Container
      variant="section"
      id={id}
      className={cn(
        "scroll-mt-20 py-4",
        index !== undefined && index % 2 === 0 && "bg-dark-wine py-12 lg:py-12",
        isFeatured && "bg-wine",
      )}
    >
      <Reveal>
        <MinimalOrnament />

        <Container variant="section-inner" maxWidth="7xl" className="mt-6 px-3 sm:px-6">
          {(title || description) && (
            <div className="space-y-3 sm:space-y-6">
              {title && (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Typography
                    variant="h2"
                    className="font-kasepi-sans text-light-gold text-xl font-bold tracking-[0.18em] uppercase sm:text-2xl"
                  >
                    {title}
                  </Typography>
                  {note && <SectionNoteChip>{note}</SectionNoteChip>}
                </div>
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
      </Reveal>
    </Container>
  );
}

type Props = {
  id: string;
  isFeatured?: boolean;
  index?: number;
  title: string;
  description?: string;
  note?: string;
  items: MenuItem[] | Product[];
  addOns?: AddOnItem[];
};

export function MenuSection({
  id,
  isFeatured,
  index,
  title,
  description,
  note,
  items,
  addOns,
}: Props) {
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
      note={note}
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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-15">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </MenuSectionFrame>
  );
}
