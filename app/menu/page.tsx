import { Container } from "@/components/container";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { TileImage } from "@/components/deco/tiles";
import { Typography } from "@/components/typography";
import { AnimatedButton } from "@/components/ui/button";

export default function MenuPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <Container variant="page-header">
        <Typography variant="h1">Menu</Typography>
        <Typography variant="body" className="text-secondary">
          Select a location to view the menu
        </Typography>
      </Container>

      <Container
        variant="section"
        className="mx-auto mb-20 grid w-full max-w-380 grid-cols-1 gap-6 py-0 lg:grid-cols-2 lg:gap-15 lg:py-0"
      >
        <div className="relative px-3">
          <TileImage animated img={"/interior.jpg"} alt="Ông Bà Eatery Vancouver" />

          <div className="bg-darkest-wine/90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-4xl px-8 py-6 text-center sm:min-w-72 md:min-w-80 xl:min-w-96">
            <Typography variant="h3">Vancouver</Typography>
            <Typography variant="body-sm" className="space-y-1 whitespace-nowrap">
              <div>976 Denman St</div>
              <div>Vancouver, BC V6G 2M1</div>
            </Typography>

            <AnimatedButton href="/menu/vancouver" text="View Menu" />
          </div>
        </div>

        <div className="relative px-3">
          <TileImage animated img={"/hero-image.jpg"} alt="Ông Bà Eatery Coquitlam" />

          <div className="bg-darkest-wine/90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-4xl px-8 py-6 text-center sm:min-w-72 md:min-w-80 xl:min-w-96">
            <Typography variant="h3">Coquitlam</Typography>
            <Typography variant="body-sm" className="space-y-1 whitespace-nowrap">
              <div>1163 Pinetree Wy Unit 1045</div>
              <div>Coquitlam, BC V3B 7Z3</div>
            </Typography>

            <AnimatedButton href="/menu/coquitlam" text="View Menu" />
          </div>
        </div>
      </Container>

      <HorizontalPatternBand blurTop fromColor="from-darkest-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
