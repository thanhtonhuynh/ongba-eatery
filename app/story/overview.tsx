import { OngbaWithLogo } from "@/components/ongba-with-logo";
import { ChapterHeading, HairlineStar, Prose, Reveal } from "./_ui";

export function Overview() {
  return (
    <section className="bg-dark-wine overflow-hidden py-20 sm:py-28">
      <div className="flex flex-col gap-10 sm:gap-14">
        <Reveal className="flex flex-col items-center gap-6 px-4 sm:px-6">
          <span className="font-bricolage-grotesque text-secondary text-[11px] font-semibold tracking-[0.4em] uppercase">
            Ông Bà Vietnamese Eatery
          </span>
          <div className="w-full max-w-[240px] sm:max-w-[281px]">
            <OngbaWithLogo width={281} height={374} />
          </div>
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5 px-4 sm:px-6">
          <ChapterHeading>A Legacy of Love, Courage, and Freedom</ChapterHeading>
          <HairlineStar />
        </Reveal>

        <Reveal>
          <Prose>
            <p>Some stories are too powerful to fade with time.</p>
            <p>
              They live on through the people who carry them, the sacrifices that shaped them, and
              the generations that continue to tell them.
            </p>
            <p>
              Ông Bà Vietnamese Eatery was born from one of those stories, a journey of love,
              resilience, and compassion that began decades ago in Vietnam.
            </p>
          </Prose>
        </Reveal>
      </div>
    </section>
  );
}
