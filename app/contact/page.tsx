import { Container } from "@/components/container";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { TileImage } from "@/components/deco/tiles";
import { Typography } from "@/components/typography";
import { AnimatedButton } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <Container variant="page-header">
        <Typography variant="h1">Contact Us</Typography>
      </Container>

      <Container variant="section" className="mx-auto mb-20 w-full max-w-380 py-0 lg:py-0">
        <div className="relative h-[500px] px-3 md:h-[600px] lg:h-[700px]">
          <TileImage animated img={"/hero.jpg"} alt="Ông Bà Eatery" className="h-full w-full" />

          <div className="bg-darkest-wine/90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 rounded-4xl px-8 py-6 text-center sm:min-w-72 md:min-w-80 lg:min-w-96">
            <Typography variant="h3">Coquitlam</Typography>
            <Typography variant="body" className="space-y-1 whitespace-nowrap">
              <div>1045 - 1163 Pinetree Way</div>
              <div>Coquitlam, BC V3B 7Z3</div>
              <div>(+1) 604 554 1166</div>
            </Typography>

            <AnimatedButton href="/menus/coquitlam" text="View Menu" />
          </div>
        </div>
      </Container>

      <HorizontalPatternBand blurTop fromColor="from-darkest-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
