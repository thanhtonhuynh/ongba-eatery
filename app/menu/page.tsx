import { Container } from "@/components/container";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Typography } from "@/components/typography";
import { AnimatedButton } from "@/components/ui/button";
import { MenuPageTabs } from "./menu-page-tabs";

export default function CoquitlamMenuPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <Container variant="page-header">
        <Typography variant="h1">Menu</Typography>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <AnimatedButton
            size="xl"
            href="https://www.opentable.ca/r/ongba-vietnamese-eatery-reservations-vancouver?restref=1489390&lang=en-CA&ot_source=Restaurant%20website"
            text="Reserve now"
            newTab
          />
          <AnimatedButton
            size="xl"
            color="outline"
            href="https://order.toasttab.com/online/ongba-vietnamese-eatery-new-location-1045-1163-pinetree-way"
            text="Order for Pickup"
            newTab
          />
        </div>
      </Container>

      <MenuPageTabs />

      <Container variant="section" className="bg-dark-wine">
        <Container variant="section-inner" maxWidth="5xl">
          <Typography variant="body-sm" className="text-secondary text-center italic sm:text-base">
            We may occasionally adjust ingredients to ensure the highest quality and freshness.
          </Typography>
          <Typography
            variant="body-sm"
            className="text-secondary mt-2 text-center italic sm:text-base"
          >
            Please inform our staff of any allergies.
          </Typography>
        </Container>
      </Container>

      {/* Catering with Us Section */}
      <div className="flex flex-col items-center p-4 py-20 sm:p-6 sm:py-30">
        <Typography variant="h1">Catering with Us</Typography>

        <div className="mt-4 space-y-3 text-center text-sm sm:mt-6 sm:text-base">
          <p>We offer catering services for all occasions. Contact us for more details!</p>
          <p>
            Email: <a href="mailto:restaurant@ongbagroup.com">restaurant@ongbagroup.com</a>
          </p>
          <p>
            Phone: <a href="tel:+16045541166">+1 (604) 554-1166</a>
          </p>
        </div>
      </div>

      <HorizontalPatternBand blurTop fromColor="from-darkest-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
