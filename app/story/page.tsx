import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Typography } from "@/components/typography";
import { Overview } from "./overview";
import { SectionFour } from "./section-four";
import { SectionOne } from "./section-one";
import { SectionThree } from "./section-three";
import { SectionTwo } from "./section-two";

export default function StoryPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <div className="flex flex-col items-center gap-6 px-4 py-10 text-center sm:gap-8 sm:px-6 sm:py-16">
        <Typography variant="h1">Our Story</Typography>
        <Typography variant="body" className="italic">
          Ông Bà was inspired by our parents&apos; extraordinary journey - a story of love, courage,
          and sacrifice that continues through every meal we share.
        </Typography>
      </div>

      <Overview />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
