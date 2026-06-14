import { OrnamentLine } from "../deco/ornament-line";
import { GiftCardPlate } from "../gift-card-plate";
import { Typography } from "../typography";
import { AnimatedButton } from "../ui/button";

const BUY_GIFT_CARD =
  "https://order.toasttab.com/egiftcards/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way";

export function GiftCardCallout() {
  return (
    <section className="bg-dark-wine space-y-6 p-3 sm:p-6">
      <OrnamentLine />

      <div className="flex flex-col items-center gap-6 pb-3 sm:gap-8 sm:p-6">
        <Typography variant="h1">Gift Cards</Typography>

        <Typography variant="body">
          Share the warmth of Ông Bà. Give a gift card and bring our kitchen, our family, and our
          flavours to the people you love.
        </Typography>

        <div className="my-6 w-full max-w-md">
          <GiftCardPlate />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <AnimatedButton size="xl" href={BUY_GIFT_CARD} text="Buy Now" newTab />
          <AnimatedButton size="xl" color="outline" href="/gift-card" text="Learn More" />
        </div>
      </div>
    </section>
  );
}
