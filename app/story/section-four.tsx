import { Container } from "@/components/container";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { Typography } from "@/components/typography";
import { DoubleImageCarousel, DoubleSlide } from "./double-image-carousel";

const slides: DoubleSlide[] = [
  {
    leftSrc: "/story/ba-2.png",
    leftAlt: "Ba's Photo 2",
    rightSrc: "/story/ba-3.png",
    rightAlt: "Ba's Photo 3",
  },
  {
    leftSrc: "/story/ba-4.png",
    leftAlt: "Ba's Photo 4",
    rightSrc: "/story/ongba7.png",
    rightAlt: "Ongba Photo 7",
  },
  {
    leftSrc: "/story/ongba8.png",
    leftAlt: "Ongba Photo 8",
    rightSrc: "/story/ba-5.png",
    rightAlt: "Ba's Photo 5",
  },
];

export function SectionFour() {
  return (
    <Container variant="section" className="bg-dark-wine">
      <OrnamentLine size="half" />

      <Container variant="section">
        <Container variant="story-inner-section">
          <Typography variant="h3" className="normal-case">
            The Legacy of Ông Bà
          </Typography>

          <div className="space-y-2">
            <Typography variant="body">
              Years later, their journey inspired us to open Ông Bà Vietnamese Eatery.
            </Typography>
            <Typography variant="body">
              The restaurant was created to honor their story and the values they lived by - family,
              generosity, resilience, and love.
            </Typography>
            <Typography variant="body">
              Every dish we serve carries a piece of that journey.
            </Typography>
            <Typography variant="body">Every meal is a reminder of where we came from.</Typography>
            <Typography variant="body">
              We named the restaurant Ông Bà because we want our children - and the generations that
              come after them - to understand the love of their grandparents, the values they lived
              by, and the sacrifices that shaped our family.
            </Typography>
            <Typography variant="body">
              It is our way of preserving their story and honoring the legacy they left behind.
            </Typography>
            <Typography variant="body">
              Our hope is that everyone who walks through our doors feels the same warmth we felt
              growing up - like gathering around the table for a comforting meal with family.
            </Typography>
            <Typography variant="body">Because to us, Ông Bà is more than a name.</Typography>
            <Typography variant="body">It is family.</Typography>
            <Typography variant="body">It is memory.</Typography>
            <Typography variant="body">It is love passed down through generations.</Typography>
          </div>

          <div className="w-full px-2 sm:px-4">
            <DoubleImageCarousel slides={slides} />
          </div>
        </Container>
      </Container>
    </Container>
  );
}
