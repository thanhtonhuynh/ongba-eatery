import { OrnamentLine } from "@/components/deco/ornament-line";
import { Prose, Reveal, StoryFrame, Term } from "./_ui";

export function SectionOne() {
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 sm:gap-16 sm:px-6">
        <Reveal>
          <OrnamentLine size="half" />
        </Reveal>

        <Reveal className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <StoryFrame
            src="/story/ong.png"
            alt="Ong's Old Photo"
            className="h-64 w-full sm:h-80 md:h-90"
            objectPosition="object-top"
          />
          <Prose className="mx-0 max-w-none px-0 sm:px-0">
            <p>
              Bố was a captain of a supply boat from a small village in <Term>Hạ Long Bay</Term>.
            </p>
            <p>
              Mẹ was a young woman from <Term>Hải Phòng</Term>, working as a cook at the docks to
              help her family survive during the war.
            </p>
          </Prose>
        </Reveal>

        <Reveal className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <Prose className="order-2 mx-0 max-w-none px-0 sm:px-0 md:order-1">
            <p>
              Their love story did not begin with a grand wedding. When Bố brought Mẹ home, he gave
              her a sewing machine, at the time the most valuable thing they owned.
            </p>
            <p>To Mẹ, it meant far more than its worth.</p>
            <p>It symbolized love, hope, and the life they dreamed of building together.</p>
          </Prose>
          <StoryFrame
            src="/story/ba-1.png"
            alt="Ba's Old Photo"
            className="order-1 h-64 w-full sm:h-72 md:order-2 md:h-88"
          />
        </Reveal>
      </div>
    </section>
  );
}
