export const expertiseContent: {
  seo: {
    rawTitle: string;
    description: string;
    keywords: string[];
  };
  hero: {
    image: string;
    alt: string;
    title: string[];
    text: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  disciplines: Array<{
    title: string;
    text: string;
    image: string;
    alt: string;
    /** true = image on the left on desktop; false = image on the right */
    imageFirst: boolean;
    services: Array<{
      title: string;
      text: string;
    }>;
  }>;
};
