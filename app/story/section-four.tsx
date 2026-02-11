import { OrnamentLine } from "@/components/deco/ornament-line";
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
    <section className="bg-dark-wine space-y-4 p-4 sm:space-y-6 sm:p-6">
      <OrnamentLine size="half" />

      <div className="p-4 sm:p-6">
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 sm:gap-8">
          <p className="text-center text-lg font-light italic sm:text-xl md:text-2xl">
            Our parents' love story is one of sacrifice, strength, and unbreakable faith.
          </p>

          <div className="w-full px-2 sm:px-4">
            <DoubleImageCarousel slides={slides} />
          </div>
        </div>
      </div>

      {/* <OrnamentLine size="half" /> */}
    </section>
  );
}
