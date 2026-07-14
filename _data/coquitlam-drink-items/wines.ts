import { WineGroup } from "./types";

export const wines: WineGroup[] = [
  {
    label: "Sparkling",
    items: [
      {
        id: "cq_wine_villa_sandi",
        name: 'Villa Sandi "Il Fresco"',
        region: "Treviso, Italy",
        varietal: "Prosecco",
        glass: 13,
        bottle: 42,
      },
    ],
  },
  {
    label: "White & Rosé",
    items: [
      {
        id: "cq_wine_adega",
        name: "Adega On 45th",
        region: "Osoyoos, BC",
        varietal: "Pinot Gris",
        glass: 14,
        bottle: 48,
      },
      {
        id: "cq_wine_quails_gate",
        name: "Quails Gate",
        region: "Okanagan Valley, BC",
        varietal: "Riesling",
        glass: 15,
        bottle: 54,
      },
      {
        id: "cq_wine_sage_hayward",
        name: "Sage Hayward Rosé",
        region: "Gulf Islands, BC VQA",
        varietal: "Pinot Noir - Pinot Meunier",
        glass: 14,
        bottle: 48,
      },
    ],
  },
  {
    label: "Red",
    items: [
      {
        id: "cq_wine_stoneboat",
        name: "Stoneboat Vineyards",
        region: "Oliver, BC",
        varietal: "Pinot Noir",
        glass: 15,
        bottle: 54,
      },
      {
        id: "cq_wine_finca_decero",
        name: "Finca Decero",
        region: "Mendoza, Argentina",
        varietal: "Malbec",
        glass: 14,
        bottle: 48,
      },
      {
        id: "cq_wine_cavallo_peppino",
        name: "Cavallo Peppino",
        region: "Napa Valley, USA",
        varietal: "Sangiovese - Cabernet Sauvignon - Petit Verdot",
        glass: 18,
        bottle: 70,
      },
      {
        id: "cq_wine_cavallo_reserva",
        name: "Cavallo Reserva",
        region: "Napa Valley, USA",
        varietal: "Cabernet Sauvignon Clone 2",
        bottle: 90,
      },
    ],
  },
];
