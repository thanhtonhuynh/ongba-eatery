import { ChapterHeading, HairlineStar, Prose, Reveal, StoryFrame, Term } from "./_ui";

export function SectionThree() {
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 sm:gap-16 sm:px-6">
        <Reveal className="flex flex-col items-center gap-5">
          <ChapterHeading>Seventy-Five Days at Sea</ChapterHeading>
          <HairlineStar />
        </Reveal>

        <Reveal>
          <Prose className="px-0 sm:px-0">
            <p>
              Our escape from Vietnam lasted <Term>seventy-five days at sea</Term>.
            </p>
            <p>For many others, reaching Hong Kong took only a few days.</p>
            <p>
              The ocean was relentless. More than once, it felt like the small sailboat would not
              survive the waves.
            </p>
            <p>But somehow, we did.</p>
            <p>When we finally arrived at a refugee camp in Hong Kong, we had nothing.</p>
            <p>No country.</p>
            <p>No certainty.</p>
            <p>No guarantees.</p>
            <p>Only love, faith, and a family determined to survive together.</p>
          </Prose>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <StoryFrame
            src="/story/ongba-children-1.png"
            alt="Ông Bà children"
            className="h-64 w-full sm:h-80"
          />
          <StoryFrame
            src="/story/ongba-children-2.png"
            alt="Ông Bà children"
            className="h-64 w-full sm:h-80"
          />
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5">
          <ChapterHeading>A Life of Paying It Forward</ChapterHeading>
          <HairlineStar />
        </Reveal>

        <Reveal>
          <Prose className="px-0 sm:px-0">
            <p>Eventually, Canada gave our family the chance to begin again.</p>
            <p>
              Like many refugees, Bố and Mẹ arrived with almost nothing. They worked tirelessly,
              often multiple jobs, doing whatever they could to rebuild their lives and support their
              children.
            </p>
            <p>
              But even during those difficult years, they never forgot others who were still
              searching for hope.
            </p>
            <p>
              Bố became a minister, dedicating his life to serving the community and helping
              newcomers find their footing in a new country.
            </p>
            <p>
              Together, Bố and Mẹ helped{" "}
              <Term>sponsor hundreds of refugee families to come to Canada</Term>, giving them the
              same opportunity that had once been given to us.
            </p>
            <p>
              Their home became a place of refuge for many newly arrived families who had nowhere
              else to go.
            </p>
            <p>Even when space was tight and resources were limited, they always opened their doors.</p>
            <p>To them, helping others was never a burden.</p>
            <p>It was simply the right thing to do.</p>
          </Prose>
        </Reveal>
      </div>
    </section>
  );
}
