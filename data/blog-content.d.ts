export const blogContent: {
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
  postsSection: {
    eyebrow: string;
    heading: string;
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
