import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { HairlineStar, Reveal } from "./_ui";
import { Overview } from "./overview";
import { SectionFour } from "./section-four";
import { SectionOne } from "./section-one";
import { SectionThree } from "./section-three";
import { SectionTwo } from "./section-two";

export default function StoryPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <section className="bg-darkest-wine relative overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-28">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h1 className="font-kasepi-sans text-gold text-[clamp(2.75rem,8vw,6rem)] leading-[1.02] font-medium tracking-tight text-balance">
            Our Story
          </h1>
          <HairlineStar />
          <p className="text-gold/90 max-w-3xl text-lg leading-relaxed italic lg:text-xl">
            Ông Bà was inspired by our parents&apos; extraordinary journey, a story of love,
            courage, and sacrifice that continues through every meal we share.
          </p>
        </Reveal>
      </section>

      <Overview />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
