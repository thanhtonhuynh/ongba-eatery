import { ArchCarousel, type ArchSlide } from "@/components/arch-carousel";
import { ChapterHeading, HairlineStar, Prose, Reveal, Term } from "./_ui";

const slides: ArchSlide[] = [
  { src: "/story/ba-2.png", alt: "Ông Bà family photo" },
  { src: "/story/ba-3.png", alt: "Ông Bà family photo" },
  { src: "/story/ba-4.png", alt: "Ông Bà family photo" },
  { src: "/story/ongba7.png", alt: "Ông Bà family photo" },
  { src: "/story/ongba8.png", alt: "Ông Bà family photo" },
  { src: "/story/ba-5.png", alt: "Ông Bà family photo" },
];

export function SectionFour() {
  return (
    <section className="bg-dark-wine overflow-hidden py-20 sm:py-28">
      <div className="flex flex-col gap-12 sm:gap-16">
        <Reveal className="flex flex-col items-center gap-5 px-4 sm:px-6">
          <ChapterHeading>The Legacy of Ông Bà</ChapterHeading>
          <HairlineStar />
        </Reveal>

        <Reveal>
          <Prose>
            <p>
              Years later, their journey inspired us to open{" "}
              <Term>Ông Bà Vietnamese Eatery</Term>.
            </p>
            <p>
              The restaurant was created to honor their story and the values they lived by: family,
              generosity, resilience, and love.
            </p>
            <p>Every dish we serve carries a piece of that journey.</p>
            <p>Every meal is a reminder of where we came from.</p>
            <p>
              We named the restaurant <Term>Ông Bà</Term> because we want our children, and the
              generations that come after them, to understand the love of their grandparents, the
              values they lived by, and the sacrifices that shaped our family.
            </p>
            <p>It is our way of preserving their story and honoring the legacy they left behind.</p>
            <p>
              Our hope is that everyone who walks through our doors feels the same warmth we felt
              growing up, like gathering around the table for a comforting meal with family.
            </p>
            <p>Because to us, Ông Bà is more than a name.</p>
            <p>It is family.</p>
            <p>It is memory.</p>
            <p>It is love passed down through generations.</p>
          </Prose>
        </Reveal>

        <Reveal>
          <ArchCarousel slides={slides} />
        </Reveal>
      </div>
    </section>
  );
}
