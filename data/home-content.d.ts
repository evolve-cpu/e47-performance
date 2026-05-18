export const homeContent: {
  seo: {
    rawTitle: string;
    description: string;
    keywords: string[];
  };
  brand: {
    name: string;
    tagline: string;
    copyright: string;
  };
  navigation: Array<{
    label: string;
    targetId: string;
  }>;
  appointment: {
    label: string;
    targetId: string;
  };
  hero: {
    mediaType: "image" | "video";
    image: string;
    video: string;
    title: string[];
    text: string;
    secondaryAction: {
      label: string;
      targetId: string;
    };
  };
  philosophy: {
    eyebrow: string;
    title: string;
    text: string;
  };
  expertise: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
      tags: string;
      image: string;
      alt: string;
    }>;
  };
  difference: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: Array<{
      quote: string;
      author: string;
    }>;
  };
  blogs: {
    eyebrow: string;
    title: string;
    action: {
      label: string;
      href: string;
    };
    items: Array<{
      category: string;
      readTime: string;
      title: string;
      text: string;
      href: string;
      image: string;
      alt: string;
    }>;
  };
  cta: {
    image: string;
    title: string;
    text: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: Array<{
    label: string;
    href: string;
  }>;
};
