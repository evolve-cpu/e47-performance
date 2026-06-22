import { allSeoKeywords, primarySearchPhrases } from "./seo-keywords";

export const homeContent = {
  seo: {
    rawTitle:
      "Best Physiotherapy & Athletic Training in Ahmedabad | E47 Performance",
    description:
      "E47 Performance provides sports physiotherapy, MSK rehabilitation, athletic training, aquatic therapy, and recovery care in Ahmedabad, Gujarat.",
    keywords: allSeoKeywords
  },
  brand: {
    name: "E47 Performance",
    tagline: "Reset. Rebuild. Rise.",
    copyright: "(c) 2026 E47 Performance"
  },
  navigation: [
    { label: "Expertise", href: "/expertise" },
    { label: "Blogs", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" }
  ],
  appointment: {
    label: "Book Your Appointment",
    href: "https://calendly.com/contact-e47performance/30min"
  },
  hero: {
    mediaType: "video",
    // image: "/images/hero-reference.jpg",
    image:
      "https://res.cloudinary.com/diuswhkzn/image/upload/v1780316563/What-is-functional-training.jpg_2_psvrbl.png",
    video:
      "https://res.cloudinary.com/diuswhkzn/video/upload/f_auto,q_auto:eco,w_1920/v1780315829/Landing_page_hero_video_fq9iok.mp4",
    mobileVideo:
      "https://res.cloudinary.com/diuswhkzn/video/upload/f_auto,q_auto:eco,w_900/v1780318079/landing_page_hero_portrait_kzl2yg.mp4",
    title: ["Reset.", "Rebuild.", "Rise."],
    text: "Movement-first rehabilitation, performance, and recovery - built for a lifetime, not a season.",
    secondaryAction: {
      label: "See How We Work",
      href: "#philosophy"
    }
  },
  philosophy: {
    eyebrow: "Our Philosophy",
    title: "One Philosophy. Complete Performance Care.",
    text: "E47 is a complete system for people who want to move freely, heal fully, and perform longer. We bring rehabilitation, performance training, and recovery together under one philosophy - physical literacy. Because strength and healing were never meant to work in isolation."
  },
  expertise: {
    eyebrow: "Our Expertise",
    title: "Three Disciplines.",
    items: [
      {
        title: "Recovery",
        text: "Aquatic therapy, mobility, and restorative protocols that help the body rebuild between training days.",
        tags: "Hydro - Contrast - Regeneration",
        image:
          "https://res.cloudinary.com/diuswhkzn/image/upload/v1780337102/Hands-on_physiotherapy_b24nbd.png",
        alt: "Aquatic therapy session in pool"
      },
      {
        title: "Rehabilitation",
        text: "Hands-on assessment, progressive loading, and sport-specific return-to-play work for injury and surgery recovery.",
        tags: "ACL - Sports Rehab - Aqua Rehab",
        image:
          "https://res.cloudinary.com/diuswhkzn/image/upload/v1780337103/Hands-on_physiotherapy_2_hphgv1.png",
        alt: "Physiotherapist working with a patient"
      },
      {
        title: "Performance",
        text: "Strength, conditioning, and movement skill for athletes who need output that lasts beyond one season.",
        tags: "Conditioning - Sport Specific - Durability",
        image:
          "https://res.cloudinary.com/diuswhkzn/image/upload/v1780337102/Hands-on_physiotherapy_1_vhvrrm.png",
        alt: "Athlete training with kettlebells"
      }
    ]
  },
  difference: {
    eyebrow: "What Sets Us Apart",
    title: "A complete movement ecosystem.",
    bgImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85",
    items: [
      {
        title: "Physical Literacy First",
        text: "Builds long-term independence by teaching you to understand your body."
      },
      {
        title: "One Integrated System",
        text: "Continuous system for rehabilitation, training, and recovery."
      },
      {
        title: "Process Over Shortcuts",
        text: "Evidence-based, need-first programming, not trend-driven."
      },
      {
        title: "Expert-Led, Always",
        text: "Every session is designed and delivered by qualified practitioners."
      },
      {
        title: "Inclusive by Design",
        text: "Open to all clients - athletes, kids, patients, with sponsorships available for access."
      }
    ]
  },
  searchIntent: {
    eyebrow: "Search intent",
    title: "Physiotherapy, rehabilitation, and athletic training in Ahmedabad.",
    text: "E47 Performance is built for people searching for the best physiotherapy in Ahmedabad, Gujarat, or India, and for athletes who need structured strength and conditioning, sport-specific rehab, recovery, and long-term physical literacy.",
    regions: ["Ahmedabad", "Thaltej", "Gujarat", "India"],
    services: [
      "Sports physiotherapy",
      "MSK injury rehabilitation",
      "Athletic training",
      "Strength and conditioning",
      "Return-to-sport rehabilitation",
      "Aquatic therapy and hydrotherapy",
      "Recovery and wellness",
      "Youth athletic development",
      "Para-athlete rehabilitation",
      "Physical literacy coaching"
    ],
    phrases: primarySearchPhrases
  },
  testimonials: {
    title: ["Real People.", "Real Progress."],
    subtitle: "Hear from our clients!",
    items: [
      {
        quote: "E47 helped me trust my body again.",
        author: "Rakesh",
        role: "Para Athlete",
        video:
          "https://res.cloudinary.com/diuswhkzn/video/upload/v1779966012/WhatsApp_Video_2026-05-24_at_2.32.03_PM_bcynh3.mp4",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
      },
      {
        quote:
          "Every session had a reason, and every reason changed how I trained.",
        author: "Mana Patel",
        role: "Indian Olympic Swimmer",
        video:
          "https://res.cloudinary.com/diuswhkzn/video/upload/v1779965942/WhatsApp_Video_2026-05-24_at_2.26.14_PM_jjuug1.mp4",
        image:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
      },
      {
        quote:
          "Every session had a reason, and every reason changed how I trained.",
        author: "Chetan Sakaria",
        role: "Indian International Cricketer",
        video:
          "https://res.cloudinary.com/diuswhkzn/video/upload/v1780319062/testimonial_-_Chetan_Sakariya_indian_cricketer_suonmw.mp4",
        image:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80"
      },
      {
        quote: "They treated the person, not just the injury.",
        author: "Himanshu Mittal",
        role: "International Badminton Player",
        video:
          "https://res.cloudinary.com/diuswhkzn/video/upload/v1779965940/WhatsApp_Video_2026-05-25_at_11.32.33_AM_tchdvh.mp4",
        image:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  blogs: {
    eyebrow: "Blogs",
    title: "Notes From the Floor.",
    action: {
      label: "See All",
      href: "/blog"
    },
    items: [
      {
        category: "Rehabilitation",
        readTime: "6 min read",
        title: "Why your hamstring keeps tearing and what we missed.",
        text: "A practical breakdown of recurring soft-tissue injury for recreational runners and field athletes.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=85",
        alt: "Leg recovery work with a massage roller"
      },
      {
        category: "Physical Literacy",
        readTime: "8 min read",
        title: "Movement is a language. Teach it before puberty.",
        text: "A guide for parents on building durability, coordination, and confidence in kids 8-14.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1542652694-40abf526446e?auto=format&fit=crop&w=900&q=85",
        alt: "Adult and child practicing mobility at home"
      },
      {
        category: "Recovery",
        readTime: "5 min read",
        title: "Rest is not recovery. Here is what actually rebuilds the body.",
        text: "Aquatic therapy, mobility, and the protocols that turn downtime into adaptation.",
        href: "/blog",
        image:
          "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=900&q=85",
        alt: "Athlete resting after a training session"
      }
    ]
  },
  cta: {
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=2400&q=85",
    title: "Your journey starts with one honest session.",
    text: "No diagnosis on a phone call. We listen, assess, then build."
  },
  contact: {
    email: "contact@e47performance.com",
    phone: "+91 7041997347",
    address:
      "E47 Performance, near Sun Villas bungalows, Thaltej, Ahmedabad, Gujarat 380059"
  },
  social: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Medium", href: "https://medium.com/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "Facebook", href: "https://www.youtube.com/" }
  ]
};
