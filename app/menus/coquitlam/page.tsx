import { coquitlamCategories } from "@/_data/coquitlam-categories";
import { coquitlamItemsByCategory } from "@/_data_access/coquitlam";
import { Container } from "@/components/container";
import { HorizontalPatternBand } from "@/components/deco/horizontal-pattern-band";
import { Typography } from "@/components/typography";
import { AnimatedButton } from "@/components/ui/button";
import { MenuNav } from "../menu-nav";
import { MenuSection } from "../menu-section";

export default function CoquitlamMenuPage() {
  return (
    <>
      <HorizontalPatternBand blurBottom />

      <Container variant="page-header">
        <Typography variant="h1">Coquitlam Menu</Typography>
        <AnimatedButton size="xl" href="#" text="Reserve a table" />
      </Container>

      {/* Menu Nav */}
      <div className="border-gold/50 border p-3 sm:p-6">
        <MenuNav categories={coquitlamCategories} />
      </div>

      {/* Menu Sections */}
      {coquitlamCategories.map((category, index) => (
        <MenuSection
          key={category.key}
          id={category.key}
          index={index}
          title={category.title}
          description={category.description}
          items={coquitlamItemsByCategory[category.key] ?? []}
          addOns={category.addOns}
        />
      ))}

      {/* Catering with Us Section */}
      <div className="bg-dark-wine flex flex-col items-center p-4 py-10 sm:p-6 sm:py-12">
        <Typography variant="h1">Catering with Us</Typography>

        <div className="mt-4 space-y-3 text-center text-sm sm:mt-6 sm:text-base">
          <p>We offer catering services for all occasions. Contact us for more details!</p>
          <p>
            Email: <a href="mailto:ongbavietnamese@gmail.com">ongbavietnamese@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+16046205595">+1 (604) 620-5595</a>
          </p>
        </div>
      </div>

      <HorizontalPatternBand blurTop fromColor="from-dark-wine" toColor="to-darkest-wine/10" />
    </>
  );
}
