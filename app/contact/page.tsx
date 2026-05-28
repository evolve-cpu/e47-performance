import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { contactContent } from "@/data/contact-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: contactContent.seo.rawTitle,
  path: "/contact",
  description: contactContent.seo.description,
  keywords: contactContent.seo.keywords,
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
          <h1 className="display max-w-[820px] text-[clamp(3rem,6.5vw,6.5rem)]">
            {contactContent.hero.title}
          </h1>
          <p className="mt-5 max-w-[560px] text-[1.08rem] text-[rgb(240_240_229/72%)] max-md:text-base">
            {contactContent.hero.text}
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container grid grid-cols-[1fr_1.1fr] gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-14">

          {/* Details column */}
          <div className="reveal">
            <p className="eyebrow text-teal">{contactContent.form.eyebrow}</p>
            <h2 className="display text-teal text-[clamp(2.4rem,5vw,4rem)] max-md:text-[clamp(2rem,10vw,3rem)]">
              {contactContent.form.heading}
            </h2>

            <div className="mt-10 space-y-8">
              <div>
                <p className="mb-1 text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-gold">Email</p>
                <a href={`mailto:${contactContent.details.email}`} className="text-[1.08rem] text-charcoal transition-colors hover:text-teal">
                  {contactContent.details.email}
                </a>
              </div>

              <div>
                <p className="mb-1 text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-gold">Phone</p>
                <a href={`tel:${contactContent.details.phone.replaceAll(" ", "")}`} className="text-[1.08rem] text-charcoal transition-colors hover:text-teal">
                  {contactContent.details.phone}
                </a>
              </div>

              <div>
                <p className="mb-1 text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-gold">Address</p>
                <p className="m-0 text-[1.08rem] text-charcoal">{contactContent.details.address}</p>
              </div>

              <div>
                <p className="mb-3 text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-gold">Hours</p>
                <div className="space-y-2">
                  {contactContent.details.hours.map((h) => (
                    <div key={h.days} className="flex gap-6 text-[0.98rem] text-charcoal">
                      <span className="w-[140px] font-bold">{h.days}</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-[0.72rem] font-extrabold tracking-[0.2em] uppercase text-gold">Follow</p>
                <div className="flex flex-wrap gap-5">
                  {contactContent.social.map((item) => (
                    <a key={item.label} href={item.href} className="text-[0.85rem] font-bold tracking-[0.14em] uppercase text-charcoal transition-colors hover:text-teal">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
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
