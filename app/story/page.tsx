import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Heading } from "@/components/heading";
import { Overview } from "./overview";
import { SectionFour } from "./section-four";
import { SectionOne } from "./section-one";
import { SectionThree } from "./section-three";
import { SectionTwo } from "./section-two";

export default function StoryPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <div className="flex flex-col items-center gap-8 px-6 py-16 text-center">
        <Heading>Our Story</Heading>
        <p className="text-lg italic">
          Our parents' love story is one of sacrifice, strength, and unbreakable faith.
        </p>
      </div>

      <Overview />

      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <HorizontalPatternBand />
    </>
  );
}
