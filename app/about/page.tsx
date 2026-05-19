import Image from "next/image";
import { E47Logo } from "@/components/e47-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutContent } from "@/data/about-content";
import { homeContent } from "@/data/home-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: aboutContent.seo.rawTitle,
  path: "/about",
  description: aboutContent.seo.description,
  keywords: aboutContent.seo.keywords,
});

export default function AboutPage() {
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
          <p className="eyebrow text-gold">{aboutContent.hero.eyebrow}</p>
          <h1 className="display max-w-[900px] text-[clamp(3.8rem,8vw,7.2rem)] max-md:text-[clamp(3rem,13vw,4.5rem)]">
            {aboutContent.hero.title}
          </h1>
          <p className="mt-7 max-w-[560px] text-[1.18rem] text-[rgb(240_240_229/75%)] max-md:text-base">
            {aboutContent.hero.text}
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container grid grid-cols-[minmax(0,0.95fr)_minmax(320px,0.82fr)] items-start gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-7">
          <div className="reveal">
            <p className="eyebrow text-teal">{aboutContent.story.eyebrow}</p>
            <h2 className="display text-teal text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] max-xs:text-[2.45rem]">
              {aboutContent.story.title}
            </h2>
          </div>
          <div className="reveal">
            {aboutContent.story.text.split("\n\n").map((para, i) => (
              <p key={i} className="m-0 mb-5 text-[1.18rem] text-charcoal last:mb-0 max-md:text-base">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-teal py-[clamp(88px,11vw,156px)] text-warm max-md:py-[66px]">
        <div className="site-container">
          <p className="eyebrow text-gold reveal">{aboutContent.values.eyebrow}</p>
          <h2 className="display max-w-[980px] text-warm text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] max-xs:text-[2.45rem] reveal">
            {aboutContent.values.title}
          </h2>
          <div className="mt-[clamp(80px,12vw,180px)] grid grid-cols-3 gap-x-[90px] gap-y-[80px] max-md:mt-11 max-md:grid-cols-1 max-md:gap-[30px]">
            {aboutContent.values.items.map((item) => (
              <article key={item.title} className="reveal">
                <h3 className="mb-[10px] mt-0 font-display text-[1.42rem] font-extrabold leading-none uppercase text-gold max-md:mb-[6px] max-md:text-base">
                  {item.title}
                </h3>
                <p className="m-0 text-[1.12rem] text-[rgb(240_240_229/72%)] max-md:text-[0.98rem]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container">
          <p className="eyebrow text-teal reveal">{aboutContent.team.eyebrow}</p>
          <h2 className="display text-teal text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] max-xs:text-[2.45rem] reveal">
            {aboutContent.team.title}
          </h2>
          <div className="mt-14 grid grid-cols-4 gap-9 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[46px]">
            {aboutContent.team.members.map((member) => (
              <article key={member.name} className="reveal">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-teal/10">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 25vw"
                    className="object-cover [filter:grayscale(8%)_contrast(1.02)]"
                  />
                </div>
                <h3 className="mb-[6px] mt-[22px] font-display text-[1.35rem] font-extrabold leading-none uppercase">
                  {member.name}
                </h3>
                <span className="block text-[0.72rem] font-extrabold tracking-[0.16em] uppercase text-gold">
                  {member.role}
                </span>
                <p className="mt-3 m-0 font-light text-charcoal">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative grid min-h-[72vh] place-items-center overflow-hidden bg-teal text-warm max-md:min-h-[560px]">
        <div className="absolute inset-0 bg-[rgb(16_39_40/92%)]" />
        <div className="relative z-[2] mx-auto w-[min(calc(100%-48px),900px)] py-[clamp(80px,12vw,160px)] text-center max-md:w-[min(calc(100%-32px),520px)] max-md:py-[100px]">
          <h2 className="display text-[clamp(3.2rem,7vw,6.7rem)] max-md:text-[clamp(2.7rem,12vw,4rem)] max-xs:text-[2.45rem] reveal">
            {aboutContent.cta.title}
          </h2>
          <p className="mx-auto mt-7 text-[1.25rem] text-[rgb(240_240_229/72%)] max-md:text-base reveal">
            {aboutContent.cta.text}
          </p>
          <a className="btn mt-10 bg-warm text-teal reveal" href={aboutContent.cta.buttonHref}>
            {aboutContent.cta.buttonLabel}
          </a>
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
