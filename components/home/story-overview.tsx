import Link from "next/link";
import { OngbaWithLogo } from "../ongba-with-logo";
import { Typography } from "../typography";
import { DoubleBorderButton } from "../ui/button";

export function StoryOverview() {
  return (
    <section className="bg-dark-wine grid min-h-screen grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
      <PatternPanel position="top" />

      <div className="flex flex-col items-center justify-center gap-6 px-6 py-12 text-center sm:gap-8">
        <Typography variant="h1">Our Story</Typography>

        <Typography variant="body">
          Our parents&apos; love story is one of sacrifice, strength, and unbreakable faith.
        </Typography>

        <div className="mt-2 w-full max-w-[250px] sm:max-w-[350px] md:max-w-[422px]">
          <OngbaWithLogo width={422} height={562} />
        </div>

        <DoubleBorderButton nativeButton={false} render={<Link href={"/story"}>Read More</Link>} />
      </div>

      <PatternPanel position="bottom" />
    </section>
  );
}

function PatternPanel({ position }: { position: "top" | "bottom" }) {
  return (
    <div className="bg-wine relative md:block md:min-h-screen">
      <div className="absolute inset-0 bg-[url('/pattern-lightgold.svg')] bg-size-[400px] bg-center bg-repeat opacity-40" />

      {/* On &lt; md: top panel fades at bottom; bottom panel fades at top (opposite). On md+: same gradient for both. */}
      <div
        className={
          position === "top"
            ? "to-darkest-wine/80 from-darkest-wine/5 absolute inset-0 bg-linear-to-b"
            : "max-md:from-darkest-wine/80 max-md:to-darkest-wine/5 md:from-darkest-wine/5 md:to-darkest-wine/80 absolute inset-0 bg-linear-to-b"
        }
      />
    </div>
  );
}
