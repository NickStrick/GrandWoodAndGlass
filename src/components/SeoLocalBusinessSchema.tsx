export default function SeoLocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "",
    "name": "",
    "url": "https://www.grandwoodandglass.com",
    "telephone": "",
    "image": "https://www.grandwoodandglass.com/og.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "",
      "addressRegion": "",
      "postalCode": "",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "", "name": "" }
    ],
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "09:00", "closes": "17:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "17:00" }
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
