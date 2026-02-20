import { Container } from "@/components/container";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Typography } from "@/components/typography";
import { AnimatedButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <Container variant="page-header">
        <Typography variant="h1">Page not found</Typography>
      </Container>

      <Container variant="section" className="flex h-[300px] flex-col items-center justify-start">
        <Typography variant="body">The page you are looking for does not exist.</Typography>
        <AnimatedButton href="/" text="Go to home" />
      </Container>

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
