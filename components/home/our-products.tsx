import { OrnamentLine } from "../deco/ornament-line";
import { TileImage } from "../deco/tiles";
import { Heading } from "../heading";
import { DoubleBorderButton } from "../ui/button";

export function OurProducts() {
  return (
    <section className="bg-dark-wine space-y-6 p-6">
      <OrnamentLine />

      <div className="flex flex-col items-center gap-8 p-6">
        <Heading>Our Products</Heading>

        <p>
          Experience our authentic homemade sauces and exclusive merchandise, made with care to
          extend our restaurant's tradition beyond the table.
        </p>

        <div className="grid w-full max-w-3xl grid-cols-2">
          {/* Row 1 */}
          <TileImage dim img="/chili-oil.jpg" alt="Chili Oil" variant="leafL" />
          <TileImage dim img="/soy-sauce.jpg" alt="Soy Sauce" variant="leafR" />

          {/* Row 2 */}
          <TileImage dim img="/chili-vinegar.jpg" alt="Chili Vinegar" variant="leafR" />
          <TileImage dim img="/chili-garlic.jpg" alt="Chili Garlic" variant="leafL" />
        </div>

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          Explore Our Products
        </DoubleBorderButton>
      </div>
    </section>
  );
}
