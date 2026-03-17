import { BADGE_META, DIETARY_META, MenuItem, Product } from "@/_types";
import { Container } from "@/components/container";
import { Typography } from "@/components/typography";
import Image from "next/image";

type Props = {
  item: MenuItem | Product;
};

export function ItemCard({ item }: Props) {
  return (
    <Container variant="card" className="flex-row lg:py-3">
      {/* Badge */}
      {"badge" in item && item.badge && (
        <div className="absolute top-1 left-1">
          {BADGE_META[item.badge].iconSrc ? (
            <>
              <Image
                src={BADGE_META[item.badge].iconSrc!}
                alt={BADGE_META[item.badge].sr}
                width={16}
                height={16}
                className="inline-flex"
              />
              <span className="sr-only">{BADGE_META[item.badge].sr}</span>
            </>
          ) : (
            <span className="font-titoli font-bold uppercase">{BADGE_META[item.badge].label}</span>
          )}
        </div>
      )}

      {item.imgSrc && (
        <div className="border-gold relative aspect-square w-24 shrink-0 rounded-full border sm:w-32 md:w-36 xl:w-44">
          <Image src={item.imgSrc} alt={item.title} fill className="rounded-full object-cover" />
        </div>
      )}

      <div className="flex-1 space-y-2 xl:space-y-3">
        <Typography
          variant="body-sm"
          className="font-bricolage-grotesque flex items-start justify-between gap-1 font-bold tracking-tight uppercase"
        >
          <div className="flex flex-col gap-0.5 tracking-tight uppercase sm:gap-1">
            <span>{item.title}</span>
            {"subtitle" in item && item.subtitle && <span>{item.subtitle}</span>}
          </div>
          <span>{item.price}</span>
        </Typography>

        {/* Dish description */}
        {item.description && (
          <Typography variant="body-sm" className="text-secondary">
            {item.description}
          </Typography>
        )}

        {/* Dietary tags */}
        {"dietary" in item && item.dietary && item.dietary.length > 0 && (
          <div className="flex gap-2">
            {item.dietary.map((tag) => {
              const meta = DIETARY_META[tag];

              return (
                <div key={tag} className="flex items-center gap-1">
                  <Image src={meta.iconSrc} alt={meta.label} width={16} height={16} />
                  <span className="sr-only">{meta.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
}
