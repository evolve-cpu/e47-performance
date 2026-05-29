export const siteConfig = {
  name: "E47 Performance",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.e47performance.com",
  description:
    "Movement-first physiotherapy, performance training, and recovery in Ahmedabad, Gujarat.",
  locale: "en_US",
  contactEmail: "contact@e47performance.com",
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
