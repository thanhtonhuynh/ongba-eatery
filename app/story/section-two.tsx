import { OrnamentLine } from "@/components/deco/ornament-line";
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
    <section className="bg-dark-wine space-y-6 p-6">
      <OrnamentLine size="half" />

      <div className="p-6">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-8">
          <p>
            When Bố was imprisoned for trying to help over 100 people escape by boat, Mẹ was left
            alone with four young children. Every month, she traveled for days—sometimes without
            food, sometimes walking for miles—to bring him supplies so he could survive. Prisons
            didn't feed inmates, Bố survival depended on the devotion of family.
          </p>

          <div className="w-full px-4">
            <DoubleImageCarousel slides={slides} />
          </div>

          <p>
            Years later, when hope seemed out of reach, a kind friend offered Mẹ a small sailboat to
            help our family escape. In return, Mẹ gave him the sewing machine Bố had given her on
            their wedding day—not out of obligation, but as a gesture of deep appreciation.
          </p>
          <p>
            On the day of the escape, she rode her bicycle to the prison and waited near a hidden
            spot. Bố, having earned the right to work outside the prison walls, made his move. He
            ran, jumped on the bike, and they rode with everything they had—straight to the shore,
            where we were waiting in the boat.
          </p>
        </div>
      </div>
    </section>
  );
}
