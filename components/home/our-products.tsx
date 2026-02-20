import { OrnamentLine } from "../deco/ornament-line";
import { TileImage } from "../deco/tiles";
import { Typography } from "../typography";
import { AnimatedButton } from "../ui/button";

export function OurProducts() {
  return (
    <section className="bg-dark-wine space-y-6 p-3 sm:p-6">
      <OrnamentLine />

      <div className="flex flex-col items-center gap-6 pb-3 sm:gap-8 sm:p-6">
        <Typography variant="h1">Our Products</Typography>

        <Typography variant="body">
          Experience our authentic homemade sauces and exclusive merchandise, made with care to
          extend our restaurant&apos;s tradition beyond the table.
        </Typography>

        <div className="my-6 grid w-full max-w-3xl grid-cols-2 gap-3">
          {/* Row 1 */}
          <TileImage dim img="/chili-oil.jpg" alt="Chili Oil" variant="leafL" />
          <TileImage dim img="/soy-sauce.jpg" alt="Soy Sauce" variant="leafR" />

          {/* Row 2 */}
          <TileImage dim img="/chili-vinegar.jpg" alt="Chili Vinegar" variant="leafR" />
          <TileImage dim img="/chili-garlic.jpg" alt="Chili Garlic" variant="leafL" />
        </div>

        <AnimatedButton size="xl" href="/merchandise" text="Explore Our Products" />
      </div>
    </section>
  );
}
