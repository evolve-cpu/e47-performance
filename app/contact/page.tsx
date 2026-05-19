import { E47Logo } from "@/components/e47-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "@/components/contact-form";
import { contactContent } from "@/data/contact-content";
import { homeContent } from "@/data/home-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: contactContent.seo.rawTitle,
  path: "/contact",
  description: contactContent.seo.description,
  keywords: contactContent.seo.keywords,
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-warm">
      <ScrollReveal />

      {/* ── NAVBAR ── */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="absolute inset-0 border-b border-[rgb(214_179_108/18%)] bg-[rgb(25_52_53/72%)] backdrop-blur-[12px]" />
        <div className="site-container relative flex min-h-[80px] items-center justify-between text-warm max-md:min-h-[68px]">
          <a className="inline-flex text-warm" href="/" aria-label={`${homeContent.brand.name} home`}>
            <E47Logo width={58} height={36} />
          </a>

          <nav className="hidden items-center gap-[42px] text-[0.76rem] font-bold tracking-[0.22em] uppercase md:flex" aria-label="Primary navigation">
            {homeContent.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors duration-[180ms] hover:text-gold">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="hidden min-h-[44px] items-center justify-center rounded-[2px] border border-gold px-6 text-[0.72rem] font-extrabold tracking-[0.18em] uppercase text-gold transition-opacity hover:opacity-70 md:inline-flex"
            href={homeContent.appointment.href}
          >
            {homeContent.appointment.label}
          </a>

          <MobileMenu
            brandName={homeContent.brand.name}
            navigation={homeContent.navigation}
            appointment={homeContent.appointment}
          />
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-teal pt-[160px] pb-[clamp(80px,10vw,140px)] text-warm max-md:pt-[130px] max-md:pb-[66px]">
        <div className="site-container">
          <p className="eyebrow text-gold">{contactContent.hero.eyebrow}</p>
          <h1 className="display max-w-[860px] text-[clamp(3.8rem,8vw,7.2rem)] max-md:text-[clamp(3rem,13vw,4.5rem)]">
            {contactContent.hero.title}
          </h1>
          <p className="mt-7 max-w-[500px] text-[1.18rem] text-[rgb(240_240_229/75%)] max-md:text-base">
            {contactContent.hero.text}
          </p>
        </div>
      </section>

      {/* ── CONTACT BODY ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container grid grid-cols-[1fr_1.1fr] gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-14">

          {/* Details column */}
          <div className="reveal">
            <h2 className="display text-teal text-[clamp(2.4rem,5vw,4rem)] max-md:text-[clamp(2rem,10vw,3rem)]">
              Come find us.
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
            <h2 className="display text-teal text-[clamp(2.4rem,5vw,4rem)] max-md:text-[clamp(2rem,10vw,3rem)]">
              {contactContent.form.heading}.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-site-black pb-[54px] pt-[92px] text-silver max-md:pb-11 max-md:pt-[76px]">
        <div className="site-container grid grid-cols-[1.2fr_0.55fr_1fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">
          <div>
            <E47Logo width={72} height={44} className="text-warm" />
            <p className="mt-6 mb-3 text-[0.92rem] uppercase">{homeContent.brand.tagline}</p>
            <div className="mt-12 flex flex-wrap gap-[26px] max-md:mt-9 max-md:gap-[22px]">
              {homeContent.social.map((item) => (
                <a key={item.label} href={item.href} className="text-[0.72rem] tracking-[0.2em] uppercase text-silver transition-colors duration-[180ms] hover:text-gold">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 mt-0 text-[0.72rem] tracking-[0.2em] uppercase text-gold">Navigation</h2>
            {homeContent.navigation.map((item) => (
              <a key={item.href} href={item.href} className="mb-3 block text-[0.92rem] text-silver transition-colors duration-[180ms] hover:text-gold">
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <h2 className="mb-5 mt-0 text-[0.72rem] tracking-[0.2em] uppercase text-gold">Contact</h2>
            <a href={`mailto:${homeContent.contact.email}`} className="mb-3 block text-[0.92rem] text-silver transition-colors hover:text-gold">
              {homeContent.contact.email}
            </a>
            <a href={`tel:${homeContent.contact.phone.replaceAll(" ", "")}`} className="mb-3 block text-[0.92rem] text-silver transition-colors hover:text-gold">
              {homeContent.contact.phone}
            </a>
            <p className="m-0 text-[0.92rem]">{homeContent.contact.address}</p>
          </div>
        </div>
        <div className="site-container mt-[76px] border-t border-[rgb(192_192_192/16%)] pt-[30px]">
          <p className="m-0 text-[0.72rem] tracking-[0.18em] uppercase text-[rgb(192_192_192/78%)]">
            {homeContent.brand.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
