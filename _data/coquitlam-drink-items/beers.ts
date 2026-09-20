import { BeerGroup } from "./types";

export const beers: BeerGroup[] = [
  {
    label: "On Tap",
    subLabel: "(16oz)",
    price: 9,
    items: [
      {
        id: "cq_beer_east_van",
        name: "East Van Jasmine Rice Lager",
        style: "Light · Crisp · Asian-Inspired · Sparkling · 4.2%",
      },
      {
        id: "cq_beer_taylight_pilsner",
        name: "Taylight Loco Poco Pilsner",
        style: "Czech-Style · Crisp · Floral · 5%",
      },
      {
        id: "cq_beer_smugglers_ipa",
        name: "Smugglers Trail Canoe Chase IPA",
        style: "Juicy · Smooth · Full-Flavoured · 6.8%",
      },
      {
        id: "cq_beer_seasonal_tap",
        name: "Seasonal Tap",
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
        id: "cq_beer_vibin",
        name: "Taylight Vibin' Peach Mango",
        style: "Low Carb · 355mL · 5%",
        price: 8,
      },
    ],
  },
];
