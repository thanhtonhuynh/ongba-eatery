import { Container } from "@/components/container";
import { OrnamentLine } from "@/components/deco/ornament-line";
import { Typography } from "@/components/typography";
import Image from "next/image";

export function SectionThree() {
  return (
    <Container variant="section">
      <OrnamentLine size="half" />

      <Container variant="section">
        <Container variant="story-inner-section">
          <Typography variant="h3" className="normal-case">
            Seventy-Five Days at Sea
          </Typography>

          <div className="space-y-2">
            <Typography variant="body">
              Our escape from Vietnam lasted seventy-five days at sea.
            </Typography>
            <Typography variant="body">
              For many others, reaching Hong Kong took only a few days.
            </Typography>
            <Typography variant="body">
              The ocean was relentless. More than once, it felt like the small sailboat would not
              survive the waves.
            </Typography>
            <Typography variant="body">But somehow, we did.</Typography>
            <Typography variant="body">
              When we finally arrived at a refugee camp in Hong Kong, we had nothing.
            </Typography>
            <Typography variant="body">No country.</Typography>
            <Typography variant="body">No certainty.</Typography>
            <Typography variant="body">No guarantees.</Typography>
            <Typography variant="body">
              Only love, faith, and a family determined to survive together.
            </Typography>
          </div>

          <div className="border-gold/50 space-y-3 border p-3">
            <div className="border-gold/50 relative h-56 border sm:h-72 md:h-90">
              <Image
                src={"/story/ongba-children-1.png"}
                alt={"Ongba Children 1"}
                fill
                className="object-cover"
              />
            </div>

            <div className="border-gold/50 relative h-56 border sm:h-72 md:h-90">
              <Image
                src={"/story/ongba-children-2.png"}
                alt={"Ongba Children 2"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <Typography variant="h3" className="normal-case">
            A Life of Paying It Forward
          </Typography>

          <div className="space-y-2">
            <Typography variant="body">
              Eventually, Canada gave our family the chance to begin again.
            </Typography>
            <Typography variant="body">
              Like many refugees, Bố and Mẹ arrived with almost nothing. They worked
              tirelessly—often multiple jobs—doing whatever they could to rebuild their lives and
              support their children.
            </Typography>
            <Typography variant="body">
              But even during those difficult years, they never forgot others who were still
              searching for hope.
            </Typography>
            <Typography variant="body">
              Bố became a minister, dedicating his life to serving the community and helping
              newcomers find their footing in a new country.
            </Typography>
            <Typography variant="body">
              Together, Bố and Mẹ helped sponsor hundreds of refugee families to come to Canada,
              giving them the same opportunity that had once been given to us.
            </Typography>
            <Typography variant="body">
              Their home became a place of refuge for many newly arrived families who had nowhere
              else to go.
            </Typography>
            <Typography variant="body">
              Even when space was tight and resources were limited, they always opened their doors.
            </Typography>
            <Typography variant="body">To them, helping others was never a burden.</Typography>
            <Typography variant="body">It was simply the right thing to do.</Typography>
          </div>
        </Container>
      </Container>
    </Container>
  );
}
