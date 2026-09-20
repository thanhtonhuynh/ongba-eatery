import { DrinkItem } from "@/_data/coquitlam-drink-items";
import { Container } from "@/components/container";
import { Typography } from "@/components/typography";

/** Like ItemCard, but for drinks: no image or dietary tags, plus tasting notes. */
export function DrinkItemCard({ item }: { item: DrinkItem }) {
  return (
    <Container variant="card" className="flex-row p-0 lg:p-0">
      <div className="flex-1 space-y-2 xl:space-y-3">
        <Typography
          variant="body-sm"
          className="font-bricolage-grotesque flex items-start justify-between gap-1 font-semibold tracking-wider uppercase"
        >
          <div className="flex flex-col gap-0.5 tracking-wider uppercase">
            <span className="text-base sm:text-lg">{item.title}</span>
            {item.subtitle && (
              <span className="text-secondary font-medium normal-case italic sm:text-base">
                {item.subtitle}
              </span>
            )}
          </div>
          <span className="text-sm font-normal tabular-nums">{item.price}</span>
        </Typography>

        {item.description && (
          <Typography variant="body-sm" className="text-secondary md:text-sm">
            {item.description}
          </Typography>
        )}

        {item.notes && (
          <Typography variant="body-sm" className="text-secondary/75 md:text-sm lg:max-w-md">
            {item.notes}
          </Typography>
        )}

        {item.addOn && (
          <Typography variant="body-sm" className="text-secondary/75 italic md:text-sm lg:max-w-md">
            {item.addOn}
          </Typography>
        )}
      </div>
    </Container>
  );
}
