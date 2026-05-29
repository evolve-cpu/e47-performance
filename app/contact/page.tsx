import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { contactContent } from "@/data/contact-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: contactContent.seo.rawTitle,
  path: "/contact",
  description: contactContent.seo.description,
  keywords: contactContent.seo.keywords
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-site-black">
      <ScrollReveal />

      {/* ── HERO — full viewport height ── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-teal text-warm">
        <Image
          src={contactContent.hero.image}
          alt={contactContent.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:grayscale(20%)_contrast(1.04)]"
        />
        <div className="absolute inset-0 bg-[rgb(16_39_40/78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-site-black" />
        <div className="site-container relative z-[2] flex min-h-[100svh] flex-col justify-end pb-[clamp(52px,7vw,96px)] pt-[62px]">
          <h1 className="display max-w-[820px] text-[64px] leading-18 max-md:text-[36px] max-md:leading-10">
            {contactContent.hero.title}
          </h1>
          <p className="mt-5 max-w-[560px] text-[32px] leading-10 font-light text-[rgb(240_240_229/72%)] max-md:text-[20px] max-md:leading-6">
            {contactContent.hero.text}
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container grid grid-cols-[1fr_1.1fr] gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-14">
          {/* Details column */}
          <div className="reveal">
            <p className="eyebrow text-[18px] text-teal">
              {contactContent.form.eyebrow}
            </p>
            <h2 className="display text-teal text-[76px] leading-[84px] max-md:text-[28px] max-md:leading-8">
              {contactContent.form.heading}
            </h2>
          </div>

          {/* Form column */}
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
