import { BeerGroup } from "./types";

export const beers: BeerGroup[] = [
  {
    label: "On Tap",
    subLabel: "(16oz)",
    price: 8,
    items: [
      {
        id: "cq_beer_east_van",
        name: "East Van Jasmine Rice Lager",
        style: "Light, Asian-Inspired & Sparkling Lager · 4.2%",
      },
      {
        id: "cq_beer_strange_fellows",
        name: "Strange Fellows Belgium Wit",
        style: "Bright, Refreshing & Aromatic · 4.5%",
      },
      {
        id: "cq_beer_taylight_pilsner",
        name: "Taylight Loco Poco Pilsner",
        style: "Czech Style, Crisp & Floral Hint · 5%",
      },
      {
        id: "cq_beer_smugglers_ipa",
        name: "Smugglers Trail Canoe IPA",
        style: "Juicy, Smooth & Flavorful · 6.8%",
      },
    ],
  },
  {
    label: "Can",
    items: [
      {
        id: "cq_beer_slack_tide",
        name: "Taylight Slack Tide",
        style: "Hazy Pale Ale · 473mL · 5%",
        price: 8,
      },
      {
        id: "cq_beer_blueberry_peach",
        name: "Smugglers Blueberry Peach",
        style: "Sour · 473mL · 4.5%",
        price: 8,
      },
      {
        id: "cq_beer_vibin",
        name: "Taylight Vibin' Peach Mango",
        style: "Low Carb · 355mL · 5%",
        price: 6,
      },
      {
        id: "cq_beer_seasonal_cider",
        name: "Seasonal Cider",
        price: 8,
      },
    ],
  },
];
