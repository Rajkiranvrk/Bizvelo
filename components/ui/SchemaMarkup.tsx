"use client";

import { usePathname } from "next/navigation";

export default function SchemaMarkup() {
  const pathname = usePathname();
  const baseUrl = "https://bizvelo.com"; // Replace with actual production domain when live

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bizvelo Technology",
    "alternateName": "Bizvelo",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "sameAs": [
      "https://www.facebook.com/bizvelotechnology",
      "https://twitter.com/bizvelo",
      "https://www.linkedin.com/company/bizvelo"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9876543210", // Example number
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    }
  };

  // Local Business Schema (targeting Trichy, Tamil Nadu, India)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Bizvelo Technology",
    "image": `${baseUrl}/images/hero-bg.jpg`,
    "@id": `${baseUrl}/#localbusiness`,
    "url": baseUrl,
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "45, Shastri Road, Thillai Nagar",
      "addressLocality": "Tiruchirappalli",
      "addressRegion": "Tamil Nadu",
      "postalCode": "620018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.8286,
      "longitude": 78.6882
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:30"
    },
    "sameAs": [
      "https://www.facebook.com/bizvelotechnology",
      "https://www.linkedin.com/company/bizvelo"
    ]
  };

  // Dynamic Breadcrumb Schema
  const pathSegments = pathname ? pathname.split("/").filter(Boolean) : [];
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      ...pathSegments.map((segment, index) => {
        const url = `${baseUrl}/${pathSegments.slice(0, index + 1).join("/")}`;
        const name = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
        return {
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": url
        };
      })
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {pathSegments.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
      )}
    </>
  );
}
