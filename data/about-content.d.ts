export const aboutContent: {
  seo: {
    rawTitle: string;
    description: string;
    keywords: string[];
  };
  hero: {
    image: string;
    video?: string;
    alt: string;
    title: string[];
    text: string[];
  };
  story: {
    paragraphs: string[];
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      image: string;
      alt: string;
    }>;
  };
  achievements: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
    buttonHref: string;
  };
};
