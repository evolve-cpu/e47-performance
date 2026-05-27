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
    href: string;
  }>;
  appointment: {
    label: string;
    href: string;
  };
  hero: {
    mediaType: "image" | "video";
    image: string;
    video: string;
    title: string[];
    text: string;
    secondaryAction: {
      label: string;
      href: string;
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
    bgImage?: string;
    items: Array<{
      title: string;
      text: string;
    }>;
  };
  testimonials: {
    eyebrow?: string;
    title: string[];
    subtitle?: string;
    items: Array<{
      quote: string;
      author: string;
      role: string;
      image: string;
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
