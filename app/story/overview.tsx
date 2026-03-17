import { Container } from "@/components/container";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { OngbaWithLogo } from "@/components/ongba-with-logo";
import { Typography } from "@/components/typography";

export function Overview() {
  return (
    <Container variant="section" className="bg-dark-wine">
      <OrnamentLine />

      <div className="border-gold/50 flex flex-col items-center gap-6 border p-4 sm:gap-8 sm:p-6">
        <Typography variant="h3" className="text-center normal-case">
          Ông Bà Vietnamese Eatery
        </Typography>

        <div className="w-full max-w-[240px] sm:max-w-[281px]">
          <OngbaWithLogo width={281} height={374} />
        </div>

        <Container variant="story-inner-section">
          <Typography variant="h3" className="normal-case">
            A Legacy of Love, Courage, and Freedom
          </Typography>

          <div className="space-y-2">
            <Typography variant="body">Some stories are too powerful to fade with time.</Typography>
            <Typography variant="body">
              They live on through the people who carry them, the sacrifices that shaped them, and
              the generations that continue to tell them.
            </Typography>
            <Typography variant="body">
              Ông Bà Vietnamese Eatery was born from one of those stories—a journey of love,
              resilience, and compassion that began decades ago in Vietnam.
            </Typography>
          </div>
        </Container>
      </div>
    </Container>
  );
}
