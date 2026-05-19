export const aboutContent: {
  seo: {
    rawTitle: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
  };
  story: {
    eyebrow: string;
    title: string;
    text: string;
  };
  values: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  team: {
    eyebrow: string;
    title: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      image: string;
      alt: string;
    }>;
  };
  cta: {
    title: string;
    text: string;
    buttonLabel: string;
    buttonHref: string;
  };
};
