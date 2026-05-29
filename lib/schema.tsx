import { siteConfig } from "@/data/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: "+91 34734 73473",
    email: siteConfig.contactEmail,
    image: `${siteConfig.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "near Sun Villas bungalows, Thaltej",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380059",
      addressCountry: "IN"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    medicalSpecialty: "Physiotherapy",
    availableService: [
      { "@type": "MedicalTherapy", name: "Physiotherapy & Rehabilitation" },
      { "@type": "MedicalTherapy", name: "Performance Training" },
      { "@type": "MedicalTherapy", name: "Recovery & Wellness" },
      { "@type": "MedicalTherapy", name: "Aquatic Therapy" }
    ]
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}
