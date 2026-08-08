// Single source of truth for the business details shown in the footer, on the
// contact page, and emitted as Restaurant JSON-LD for search engines.

export const restaurant = {
  name: "Ông Bà Eatery",
  cuisine: "Vietnamese",
  url: "https://ongba.ca",
  address: {
    street: "1045 - 1163 Pinetree Way",
    locality: "Coquitlam",
    region: "BC",
    postalCode: "V3B 7Z3",
    country: "CA",
  },
  phone: {
    display: "+1 (604) 554-1166",
    href: "tel:+16045541166",
  },
  email: "restaurant@ongbagroup.com",
  reserveUrl:
    "https://www.opentable.ca/r/ongba-vietnamese-eatery-reservations-vancouver?restref=1489390&lang=en-CA&ot_source=Restaurant%20website",
  hours: {
    note: "Open 7 days a week",
    // 24-hour times so they can be handed to schema.org as-is. Two services
    // because the kitchen closes between lunch and dinner.
    services: [
      { opens: "11:00", closes: "15:00" },
      { opens: "17:00", closes: "22:00" },
    ],
  },
} as const;

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function to12Hour(time: string) {
  const [hour, minute] = time.split(":").map(Number);
  return `${hour % 12 || 12}:${String(minute).padStart(2, "0")} ${hour < 12 ? "AM" : "PM"}`;
}

// Derived from the 24-hour times above so the two can never drift apart.
export const serviceHours = restaurant.hours.services.map(
  ({ opens, closes }) => `${to12Hour(opens)} to ${to12Hour(closes)}`,
);

export const addressLines = [
  restaurant.address.street,
  `${restaurant.address.locality}, ${restaurant.address.region} ${restaurant.address.postalCode}`,
];
