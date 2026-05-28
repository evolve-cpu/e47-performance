export const contactContent: {
  seo: {
    rawTitle: string;
    description: string;
    keywords: string[];
  };
  hero: {
    image: string;
    alt: string;
    title: string;
    text: string;
  };
  details: {
    email: string;
    phone: string;
    address: string;
    hours: Array<{
      days: string;
      time: string;
    }>;
  };
  form: {
    eyebrow: string;
    heading: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      service: string;
      message: string;
    };
    services: string[];
    submitLabel: string;
  };
  social: Array<{
    label: string;
    href: string;
  }>;
};
