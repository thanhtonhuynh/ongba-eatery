import { ArchCarousel, type ArchSlide } from "@/components/arch-carousel";
import { ChapterHeading, HairlineStar, Prose, Reveal } from "./_ui";

const slides: ArchSlide[] = [
  { src: "/story/ongba1.png", alt: "Ông Bà family photo" },
  { src: "/story/ongba2.png", alt: "Ông Bà family photo" },
  { src: "/story/ongba3.png", alt: "Ông Bà family photo" },
  { src: "/story/ongba4.png", alt: "Ông Bà family photo" },
  { src: "/story/ongba5.png", alt: "Ông Bà family photo" },
  { src: "/story/ongba6.png", alt: "Ông Bà family photo" },
];

export function SectionTwo() {
  return (
    <section className="bg-dark-wine overflow-hidden py-20 sm:py-28">
      <div className="flex flex-col gap-12 sm:gap-16">
        <Reveal className="flex flex-col items-center gap-5 px-4 sm:px-6">
          <ChapterHeading>Love Tested by War</ChapterHeading>
          <HairlineStar />
        </Reveal>

        <Reveal>
          <Prose>
            <p>
              After the war ended, many people were trying to escape communist Vietnam. Bố risked
              everything to organize a boat that would carry more than one hundred people toward
              freedom. He believed deeply that everyone deserved the chance to live freely.
            </p>
            <p>But he was discovered.</p>
            <p>
              Bố was arrested and imprisoned, leaving Mẹ alone with four young children and an
              uncertain future. In those years, prisoners were not provided food. If families did
              not bring supplies, many inmates simply did not survive.
            </p>
            <p>
              Every month, Mẹ made the long journey to the prison, sometimes traveling for days and
              walking miles, just to bring Bố food and see him for a few brief moments.
            </p>
            <p>Four years passed.</p>
            <p>Four years of uncertainty.</p>
            <p>Four years of absence.</p>
            <p>Four years of love that refused to break.</p>
          </Prose>
        </Reveal>

        <Reveal>
          <ArchCarousel slides={slides} />
        </Reveal>

        <Reveal className="flex flex-col items-center gap-5 px-4 sm:px-6">
          <ChapterHeading>The Escape</ChapterHeading>
          <HairlineStar />
        </Reveal>

        <Reveal>
          <Prose>
            <p>Hope finally came through an act of kindness.</p>
            <p>A close friend offered Mẹ a small sailboat so our family could escape Vietnam.</p>
            <p>
              In return, she gave him the sewing machine Bố had once given her, the most precious
              thing she owned.
            </p>
            <p>
              On the day of the escape, Mẹ rode her bicycle to the prison and waited near a hidden
              meeting place. By then, Bố had earned the rare privilege of working outside the prison
              walls.
            </p>
            <p>When the moment came, he ran.</p>
            <p>
              He jumped onto the back of the bicycle, and together they rode toward the shore, where
              the boat, and the rest of the family, were waiting.
            </p>
            <p>That bicycle carried them toward freedom.</p>
            <p>
              At that moment, the bicycle and the sewing machine were everything my mother had.
              Those two simple things helped carry our family into a new life.
            </p>
            <p>
              Today, they live on symbolically in our restaurant, a reminder of where we came from
              and the sacrifices that shaped our journey.
            </p>
          </Prose>
        </Reveal>
      </div>
    </section>
  );
}
