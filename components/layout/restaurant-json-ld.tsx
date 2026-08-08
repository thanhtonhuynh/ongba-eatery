import { WEEKDAYS, restaurant } from "@/_data/restaurant";

// schema.org Restaurant markup. Invisible to visitors — it tells search
// engines and other crawlers the hours, address and contact details plainly
// instead of making them infer it from the rendered page.
export function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${restaurant.url}/#restaurant`,
    name: restaurant.name,
    url: restaurant.url,
    servesCuisine: restaurant.cuisine,
    telephone: restaurant.phone.display,
    email: restaurant.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.locality,
      addressRegion: restaurant.address.region,
      postalCode: restaurant.address.postalCode,
      addressCountry: restaurant.address.country,
    },
    openingHoursSpecification: restaurant.hours.services.map(({ opens, closes }) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...WEEKDAYS],
      opens,
      closes,
    })),
    acceptsReservations: restaurant.reserveUrl,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
