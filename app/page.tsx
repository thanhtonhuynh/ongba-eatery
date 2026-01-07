import { Hero } from "@/components/home/hero";
import { JoinOurTeam } from "@/components/home/join-our-team";
import { Locations } from "@/components/home/locations";
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
      <JoinOurTeam />
      <Locations />
      <OurProducts />
      <Reviews />
    </>
  );
}
