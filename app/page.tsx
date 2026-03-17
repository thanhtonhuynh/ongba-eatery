import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Hero } from "@/components/home/hero";
import { JoinOurTeam } from "@/components/home/join-our-team";
import { MenuOverview } from "@/components/home/menu-overview";
import { OurProducts } from "@/components/home/our-products";
import { Reviews } from "@/components/home/reviews";
import { StoryOverview } from "@/components/home/story-overview";

export default function Page() {
  return (
    <>
      <Hero />
      <StoryOverview />
      <MenuOverview />
      <OurProducts />
      <JoinOurTeam />
      {/* <Locations /> */}
      <Reviews />

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
