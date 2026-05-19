export const blogContent: {
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
  posts: Array<{
    slug: string;
    category: string;
    readTime: string;
    title: string;
    text: string;
    href: string;
    image: string;
    alt: string;
  }>;
};
