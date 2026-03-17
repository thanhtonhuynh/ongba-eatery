import { Container } from "@/components/container";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { Typography } from "@/components/typography";
import { DoubleImageCarousel, DoubleSlide } from "./double-image-carousel";

const slides: DoubleSlide[] = [
  {
    leftSrc: "/story/ongba1.png",
    leftAlt: "Ongba Photo 1",
    rightSrc: "/story/ongba2.png",
    rightAlt: "Ongba Photo 2",
  },
  {
    leftSrc: "/story/ongba3.png",
    leftAlt: "Ongba Photo 3",
    rightSrc: "/story/ongba4.png",
    rightAlt: "Ongba Photo 4",
  },
  {
    leftSrc: "/story/ongba5.png",
    leftAlt: "Ongba Photo 5",
    rightSrc: "/story/ongba6.png",
    rightAlt: "Ongba Photo 6",
  },
];

export function SectionTwo() {
  return (
    <Container variant="section" className="bg-dark-wine">
      <OrnamentLine size="half" />

      <Container variant="section">
        <Container variant="story-inner-section">
          <Typography variant="h3" className="normal-case">
            Love Tested by War
          </Typography>

          <div className="space-y-2">
            <Typography variant="body">
              After the war ended, many people were trying to escape communist Vietnam. Bố risked
              everything to organize a boat that would carry more than one hundred people toward
              freedom. He believed deeply that everyone deserved the chance to live freely.
            </Typography>
            <Typography variant="body">But he was discovered.</Typography>
            <Typography variant="body">
              Bố was arrested and imprisoned, leaving Mẹ alone with four young children and an
              uncertain future. In those years, prisoners were not provided food. If families did
              not bring supplies, many inmates simply did not survive.
            </Typography>
            <Typography variant="body">
              Every month, Mẹ made the long journey to the prison - sometimes traveling for days and
              walking miles - just to bring Bố food and see him for a few brief moments.
            </Typography>
            <Typography variant="body">Four years passed.</Typography>
            <Typography variant="body">Four years of uncertainty.</Typography>
            <Typography variant="body">Four years of absence.</Typography>
            <Typography variant="body">Four years of love that refused to break.</Typography>
          </div>

          <div className="w-full px-2 sm:px-4">
            <DoubleImageCarousel slides={slides} />
          </div>

          <Typography variant="h3" className="normal-case">
            The Escape
          </Typography>

          <div className="space-y-2">
            <Typography variant="body">Hope finally came through an act of kindness.</Typography>
            <Typography variant="body">
              A close friend offered Mẹ a small sailboat so our family could escape Vietnam.
            </Typography>
            <Typography variant="body">
              In return, she gave him the sewing machine Bố had once given her - the most precious
              thing she owned.
            </Typography>
            <Typography variant="body">
              On the day of the escape, Mẹ rode her bicycle to the prison and waited near a hidden
              meeting place. By then, Bố had earned the rare privilege of working outside the prison
              walls.
            </Typography>
            <Typography variant="body">When the moment came, he ran.</Typography>
            <Typography variant="body">
              He jumped onto the back of the bicycle, and together they rode toward the shore, where
              the boat - and the rest of the family - were waiting.
            </Typography>
            <Typography variant="body">That bicycle carried them toward freedom.</Typography>
            <Typography variant="body">
              At that moment, the bicycle and the sewing machine were everything my mother had.
              Those two simple things helped carry our family into a new life.
            </Typography>
            <Typography variant="body">
              Today, they live on symbolically in our restaurant - a reminder of where we came from
              and the sacrifices that shaped our journey.
            </Typography>
          </div>
        </Container>
      </Container>
    </Container>
  );
}
