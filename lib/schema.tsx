import { siteConfig } from "@/data/site";
import { primarySearchPhrases } from "@/data/seo-keywords";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    telephone: siteConfig.phone,
    sameAs: Object.values(siteConfig.social)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    about: primarySearchPhrases,
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    }
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
    telephone: siteConfig.phone,
    email: siteConfig.contactEmail,
    image: `${siteConfig.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
      "@type": "Place",
      name: area
    })),
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
    knowsAbout: primarySearchPhrases,
    availableService: [
      { "@type": "MedicalTherapy", name: "Sports Physiotherapy" },
      { "@type": "MedicalTherapy", name: "MSK Injury Rehabilitation" },
      { "@type": "MedicalTherapy", name: "Sports Injury Rehabilitation" },
      { "@type": "Service", name: "Athletic Training" },
      { "@type": "Service", name: "Strength and Conditioning" },
      { "@type": "MedicalTherapy", name: "Return-to-Sport Rehabilitation" },
      { "@type": "MedicalTherapy", name: "Aquatic Therapy and Hydrotherapy" },
      { "@type": "Service", name: "Recovery and Wellness" },
      { "@type": "Service", name: "Youth Athletic Development" },
      { "@type": "MedicalTherapy", name: "Para-athlete Rehabilitation" }
    ]
  };
}

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteConfig.url}/#services`,
    name: "E47 Performance services",
    itemListElement: [
      "Sports physiotherapy in Ahmedabad",
      "MSK injury rehabilitation in Gujarat",
      "Sports injury rehabilitation",
      "Athletic training in Ahmedabad",
      "Strength and conditioning for athletes",
      "Return-to-sport rehabilitation",
      "Aquatic therapy and hydrotherapy",
      "Recovery and wellness",
      "Youth athletic development",
      "Para-athlete rehabilitation"
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name,
        provider: {
          "@id": `${siteConfig.url}/#localbusiness`
        },
        areaServed: siteConfig.serviceAreas.join(", "),
        url: `${siteConfig.url}/expertise`
      }
    }))
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Does E47 provide physiotherapy in Ahmedabad and Gujarat?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes. E47 Performance provides sports physiotherapy, MSK rehabilitation, aquatic therapy, recovery, and performance training from Thaltej, Ahmedabad, with care available for clients across Gujarat and India."
        }
      },
      {
        "@type": "Question",
        name: "What makes E47 different for athletic training?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "E47 integrates physiotherapy, strength and conditioning, recovery, physical literacy, and return-to-sport planning so athletes can rebuild capacity instead of only treating symptoms."
        }
      },
      {
        "@type": "Question",
        name: "Who should book a session at E47 Performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "E47 works with athletes, recreational athletes, para-athletes, youth athletes, active adults, and MSK patients who need structured rehabilitation, performance training, recovery, or long-term wellness support."
        }
      }
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
