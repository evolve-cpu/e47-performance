export const expertiseContent = {
  seo: {
    rawTitle: "Expertise - E47 Performance",
    description:
      "Recovery, rehabilitation, and performance services integrated into one continuous movement system.",
    keywords: [
      "E47 expertise",
      "recovery Ahmedabad",
      "rehabilitation Ahmedabad",
      "performance training Ahmedabad",
      "sports physiotherapy Gujarat"
    ]
  },

  hero: {
    image:
      "https://res.cloudinary.com/diuswhkzn/image/upload/v1780318583/Kettlebell-Gruppe-s_1_fsdf6l.png",
    // image:
    //   "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=2400&q=85",
    video:
      "https://res.cloudinary.com/diuswhkzn/video/upload/f_auto,q_auto:eco,w_1920/v1780318079/expertise_hero_landscape_thfzhs.mp4",
    mobileVideo:
      "https://res.cloudinary.com/diuswhkzn/video/upload/f_auto,q_auto:eco,w_900/v1780318078/expertise_hero_portrait_nlfq2q.mp4",
    alt: "",
    // First item becomes the main heading line; each subsequent item wraps in its own block
    title: ["Three Disciplines.", "One Integrated System."],
    text: "A complete system for healing, training, and long-term performance."
  },

  intro: {
    heading: "Because the body never agreed to be split into specialities.",
    paragraphs: [
      "When rehabilitation and performance live separately, athletes inherit the disconnect. Rehab means little if training recreates the same fault. Performance means little if recovery can't support it.",
      "At E47, those decisions happen together with physiotherapy, conditioning, and recovery built as one continuous system."
    ]
  },

  // Each discipline is rendered as an image panel + services list side by side.
  // imageFirst: true  → image on the LEFT on desktop
  // imageFirst: false → image on the RIGHT on desktop
  // On mobile the image always appears above the services list regardless of imageFirst.
  disciplines: [
    {
      title: "Recovery.",
      text: "Recovery isn't time off. It's the programming that lets training compound. Used with intent. Dosed against load.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=85",
      alt: "Aquatic recovery session",
      imageFirst: true,
      services: [
        {
          title: "Aqua Hydrotherapy.",
          text: "Counter-current pool with variable resistance. Real-time gait and stroke analysis. Cardiovascular work at near-zero joint stress."
        },
        {
          title: "Contrast & Cold-Water.",
          text: "Precision thermal range, 10 C to 30 C. Cold for inflammation control. Warm for active rehab. Contrast for vascular response."
        },
        {
          title: "Compression & Vibration.",
          text: "Pneumatic compression for venous return. Percussive vibration for tissue release."
        },
        {
          title: "Red-Light Therapy.",
          text: "Photobiomodulation for tendon, joint, and soft-tissue recovery. Programmed alongside high-load training blocks."
        }
      ]
    },
    {
      title: "Rehabilitation.",
      text: "Healing built to last. We treat upper limb, lower limb, and spine injuries by retraining the system behind the pain.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
      alt: "Rehabilitation session",
      imageFirst: false,
      services: [
        {
          title: "Musculoskeletal Rehabilitation.",
          text: "Shoulder, elbow, wrist, hand, hip, knee, ankle, foot, neck, mid-back, lower back."
        },
        {
          title: "Sports Injury Management.",
          text: "Acute injuries, overuse syndromes, concussion, graded return-to-play."
        },
        {
          title: "Youth Rehabilitation.",
          text: "Growth-plate-safe care for ages 8 to 16. Osgood-Schlatter, Sever's, and developmental conditions."
        },
        {
          title: "Aquatic Rehabilitation.",
          text: "Buoyancy-assisted recovery, hydrostatic compression for swelling, counter-current resistance for early conditioning."
        }
      ]
    },
    {
      title: "Performance.",
      text: "Capacity built methodically. Individual programming for athletes, and structured group training grounded in the same rigour.",
      image:
        "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=85",
      alt: "Performance training session",
      imageFirst: true,
      services: [
        {
          title: "Performance S&C.",
          text: "Individualised strength, power, speed, conditioning, and return-to-performance work. Includes objective testing where data changes the answer."
        },
        {
          title: "Hybrid S&C.",
          text: "Coached group training - strength, strongman-inspired work, functional conditioning, and Hyrox-style formats."
        },
        {
          title: "Youth Athletic Development.",
          text: "Long-term development for ages 8 to 18. Physical literacy first. Sport-specific work built on top."
        },
        {
          title: "Return-to-Sport",
          text: "The bridge between cleared to play and ready to perform. Phased progression, measured by capacity, never by the calendar alone."
        }
      ]
    }
  ]
};
