import Link from "next/link";
import { Heading } from "../heading";
import { OngbaWithLogo } from "../ongba-with-logo";
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

        <OngbaWithLogo width={422} height={562} />

        <DoubleBorderButton
          size={"lg"}
          className={"font-titoli h-14 px-8 py-6 text-xl tracking-wide uppercase"}
        >
          <Link href={"/story"}>Read More</Link>
        </DoubleBorderButton>
      </div>

      <PatternPanel />
    </section>
  );
}

function PatternPanel() {
  return (
    <div className="bg-wine relative hidden min-h-screen md:block">
      <div className="absolute inset-0 bg-[url('/pattern-lightgold.svg')] bg-size-[400px] bg-center bg-repeat opacity-40" />

      <div className="to-darkest-wine/80 from-darkest-wine/5 absolute inset-0 bg-linear-to-b" />
    </div>
  );
}
