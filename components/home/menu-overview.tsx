import { OrnamentLine } from "../deco/ornament-line";
import { TileImage, TileShape } from "../deco/tiles";
import { Heading } from "../heading";
import { DoubleBorderButton } from "../ui/button";

export function MenuOverview() {
  return (
    <section className="space-y-6 p-6">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col items-center gap-8 border p-6">
        <Heading>Menu</Heading>
        <p>Traditional flavour with modern twist - Food nourished for the soul</p>

        <div className="grid w-full max-w-5xl grid-cols-4">
          {/* Row 1 */}
          <TileImage img="/bo-ne.jpg" alt="Spring rolls" variant="roundTL" />
          <TileShape filledStar variant="squareStar" />
          <TileImage img="/fish-dish.jpg" alt="Dish" variant="roundTR" />
          <TileShape variant="leafLeft" />

          {/* Row 2 */}
          <TileShape variant="capsuleLeftStar" />
          <TileImage img="/rib-pho.jpg" alt="Dish 2" variant="roundBR" />
          <TileShape filledStar variant="leafRight" />
          <TileImage img="/bun-bo-hue.jpg" alt="Interior" variant="roundBR" />
        </div>

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          View Menu
        </DoubleBorderButton>
      </div>
    </section>
  );
}
