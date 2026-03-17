import { Container } from "@/components/container";
import { DoubleBorderImage } from "@/components/deco/double-border-image";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { Typography } from "@/components/typography";

export function SectionOne() {
  return (
    <Container variant="section">
      <OrnamentLine size="half" />

      <Container variant="section">
        <Container variant="story-inner-section">
          <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <DoubleBorderImage
              img="/story/ong.png"
              alt="Ong's Old Photo"
              className="h-64 w-full sm:h-80 md:h-90"
              objectPosition="object-top"
            />

            <div className="space-y-2">
              <Typography variant="body">
                Bố was a captain of a supply boat from a small village in Hạ Long Bay.
              </Typography>
              <Typography variant="body">
                Mẹ was a young woman from Hải Phòng, working as a cook at the docks to help her
                family survive during the war.
              </Typography>
            </div>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <div className="space-y-2">
              <Typography variant="body">
                Their love story did not begin with a grand wedding. When Bố brought Mẹ home, he
                gave her a sewing machine - at the time the most valuable thing they owned.
              </Typography>
              <Typography variant="body">To Mẹ, it meant far more than its worth.</Typography>
              <Typography variant="body">
                It symbolized love, hope, and the life they dreamed of building together.
              </Typography>
            </div>

            <DoubleBorderImage
              img="/story/ba-1.png"
              alt="Ba's Old Photo"
              className="order-1 h-64 w-full sm:order-2 sm:h-72 md:h-88"
            />
          </div>
        </Container>
      </Container>
    </Container>
  );
}
