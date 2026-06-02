export const siteConfig = {
  name: "E47 Performance",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.e47performance.com",
  description:
    "Movement-first physiotherapy, sports rehabilitation, athletic training, and recovery in Ahmedabad, Gujarat.",
  locale: "en_US",
  contactEmail: "contact@e47performance.com",
  phone: "+91 34734 73473",
  address: {
    street: "near Sun Villas bungalows, Thaltej",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380059",
    country: "IN"
  },
  geo: {
    latitude: 23.0501,
    longitude: 72.4991
  },
  serviceAreas: ["Ahmedabad", "Thaltej", "Gujarat", "India"],
  nav: [
    { label: "Expertise", href: "#expertise" },
    { label: "Blogs", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" }
  ],
  social: {
    instagram: "https://www.instagram.com/",
    medium: "https://medium.com/",
    youtube: "https://www.youtube.com/"
  }
} as const;

export type SiteNavItem = (typeof siteConfig.nav)[number];
