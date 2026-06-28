import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { GiftCardCallout } from "@/components/home/gift-card-callout";
import { Hero } from "@/components/home/hero";
import { JoinOurTeam } from "@/components/home/join-our-team";
import { MenuOverview } from "@/components/home/menu-overview";
import { Reviews } from "@/components/home/reviews";
import { StoryOverview } from "@/components/home/story-overview";
import { WelcomePopup } from "@/components/home/welcome-popup";

export default function Page() {
  return (
    <>
      <WelcomePopup />
      <Hero />
      <StoryOverview />
      <MenuOverview />
      <GiftCardCallout />
      <JoinOurTeam />
      {/* <Locations /> */}
      <Reviews />

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
