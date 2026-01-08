import { OrnamentLine } from "@/components/deco/ornament-line";
import Image from "next/image";

export function SectionThree() {
  return (
    <section className="space-y-6 p-6">
      <OrnamentLine size="half" />

      <div className="p-6">
        <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
          <div className="space-y-4">
            <p>It took 75 days at sea.</p>
            <p>We arrived with nothing but love, faith, and each other.</p>
            <p>No country. No guarantees. Just a family, determined to live free.</p>
          </div>

          <div className="border-gold/50 space-y-4 border p-2">
            <div className={"border-gold/50 relative h-90 border"}>
              <Image
                src={"/story/ongba-children-1.png"}
                alt={"Ongba Children 1"}
                fill
                className="object-cover"
              />
            </div>

            <div className={"border-gold/50 relative h-90 border"}>
              <Image
                src={"/story/ongba-children-2.png"}
                alt={"Ongba Children 2"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p>
              Today, we honour Bố and Mẹ by sharing their story and their spirit through our food.
              Every dish we serve is rooted in their journey. Every meal is a reminder that love,
              family, and resilience can carry us through anything.
            </p>

            <p>
              We named our restaurant Ông Bà not just to remember them, but to pass on their love
              and sacrifice to the next generation.
            </p>
          </div>

          <div className="space-y-4">
            <p>
              We hope that everyone who walks through our doors feels the same warmth we did growing
              up—like sitting down for a comforting meal at Grandma's house.
            </p>

            <p>Because to us, Ông Bà is more than a name. It's family. It's home.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
