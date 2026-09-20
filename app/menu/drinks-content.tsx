import {
  mocktailsAndCoffee,
  signatureCocktailNote,
  signatureCocktails,
} from "@/_data/coquitlam-drink-items";
import { BeerSection } from "./components/drinks/beer-section";
import { DrinkSection } from "./components/drinks/drink-section";
import { WineSection } from "./components/drinks/wine-section";
import { MenuNav } from "./menu-nav";

const drinksNavCategories = [
  { key: "cq_drink_cocktail", title: "Signature Cocktail" },
  { key: "cq_drink_wines", title: "Wines" },
  { key: "cq_drink_beers", title: "Beers" },
  { key: "cq_drink_mocktails_coffee", title: "Mocktails & Coffee" },
];

export function DrinksContent() {
  return (
    <>
      <div className="border-gold/40 border p-3 sm:p-6">
        <MenuNav categories={drinksNavCategories} />
      </div>

      <DrinkSection
        id="cq_drink_cocktail"
        index={0}
        title="Signature Cocktail"
        description={signatureCocktailNote}
        items={signatureCocktails}
      />

      <WineSection index={1} />

      <BeerSection index={2} />

      <DrinkSection
        id="cq_drink_mocktails_coffee"
        index={3}
        title="Mocktails & Coffee"
        items={mocktailsAndCoffee}
      />
    </>
  );
}
