export const siteConfig = {
  name: "E47 Performance",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  description:
    "Performance-focused services built for measurable growth, fast delivery, and strong search visibility.",
  locale: "en_US",
  contactEmail: "hello@example.com",
  nav: [
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "Contact", href: "/contact" }
  ],
  social: {
    linkedin: "https://www.linkedin.com/"
  }
} as const;

export type SiteNavItem = (typeof siteConfig.nav)[number];
