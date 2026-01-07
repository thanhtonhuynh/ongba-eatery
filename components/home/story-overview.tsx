import LogoGold from "@/assets/logo-gold.png";
import Image from "next/image";
import { Heading } from "../heading";
import { DoubleBorderButton } from "../ui/button";

export function StoryOverview() {
  return (
    <section className="bg-dark-wine grid min-h-screen grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
      <PatternPanel />

      <div className="flex flex-col items-center justify-center gap-8 px-4 text-center">
        <Heading>Our Story</Heading>
        <p className="text-lg">
          Our parents&apos; love story is one of sacrifice, strength, and unbreakable faith.
        </p>

        <div className="relative">
          <Image
            src={LogoGold}
            alt="Ongba's Logo"
            className="absolute top-1/4 left-1/2 h-1/3 w-auto -translate-x-1/2 -translate-y-1/2"
          />

          <Image
            src={"/story-overview.png"}
            alt="Our Story"
            width={422}
            height={562}
            className="border-gold rounded-tl-[100px] rounded-br-[100px] border object-cover"
          />
        </div>

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          Read More
        </DoubleBorderButton>
      </div>

      <PatternPanel />
    </section>
  );
}

function PatternPanel() {
  return (
    <div className="relative hidden min-h-screen md:block">
      <div className="bg-wine absolute inset-0" />

      <div className="absolute inset-0 bg-[url('/pattern-lightgold.svg')] bg-size-[400px] bg-center bg-repeat opacity-50" />

      <div className="absolute inset-0 bg-linear-to-b from-black/5 to-black/20" />
    </div>
  );
}
