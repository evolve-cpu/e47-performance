import Image from "next/image";
import { E47Logo } from "@/components/e47-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { homeContent } from "@/data/home-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: homeContent.seo.rawTitle,
  path: "/",
  description: homeContent.seo.description,
  keywords: homeContent.seo.keywords,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-warm">

      {/* ── NAVBAR ── */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="absolute inset-0 border-b border-[rgb(214_179_108/18%)] bg-[rgb(25_52_53/72%)] backdrop-blur-[12px]" />
        <div className="site-container relative flex min-h-[80px] items-center justify-between text-warm max-md:min-h-[68px]">
          <a className="inline-flex text-warm" href="#top" aria-label={`${homeContent.brand.name} home`}>
            <E47Logo width={58} height={36} />
          </a>

          <nav className="hidden items-center gap-[42px] text-[0.76rem] font-bold tracking-[0.22em] uppercase md:flex" aria-label="Primary navigation">
            {homeContent.navigation.map((item) => (
              <a key={item.targetId} href={`#${item.targetId}`} className="transition-colors duration-[180ms] hover:text-gold">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="hidden min-h-[44px] items-center justify-center rounded-[2px] border border-gold px-6 text-[0.72rem] font-extrabold tracking-[0.18em] uppercase text-gold transition-opacity hover:opacity-70 md:inline-flex"
            href={`#${homeContent.appointment.targetId}`}
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
      <section className="relative min-h-[112vh] overflow-hidden bg-teal max-md:min-h-[100svh]" id="top">
        {homeContent.hero.mediaType === "video" && homeContent.hero.video ? (
          <video
            className="absolute inset-0 h-full w-full object-cover [filter:grayscale(15%)_contrast(1.04)]"
            src={homeContent.hero.video}
            autoPlay muted loop playsInline
            poster={homeContent.hero.image}
          />
        ) : (
          <Image
            className="object-cover [filter:grayscale(15%)_contrast(1.04)]"
            src={homeContent.hero.image}
            alt="" fill priority sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(25_52_53/50%)_0%,rgb(25_52_53/58%)_52%,rgb(15_15_15/92%)_100%),rgb(25_52_53/30%)]" />

        <div className="site-container relative z-[2] flex min-h-[112vh] items-center justify-between pt-[80px] text-warm max-md:min-h-[100svh] max-md:items-end max-md:pb-[120px] max-md:pt-[108px]">
          <div>
            <h1 className="display max-w-[620px] text-[clamp(4.8rem,8.4vw,7.8rem)] max-lg:text-[clamp(4.5rem,10vw,7rem)] max-md:max-w-[340px] max-md:text-[clamp(3rem,14vw,4.7rem)] max-xs:text-[2.95rem]">
              {homeContent.hero.title.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </h1>
            <p className="mt-7 max-w-[560px] text-[1.18rem] text-[rgb(240_240_229/78%)] max-md:mt-[18px] max-md:max-w-[320px] max-md:text-base">
              {homeContent.hero.text}
            </p>
            <div className="mt-7 flex flex-wrap gap-[18px] max-md:grid max-md:w-[min(100%,290px)] max-md:gap-[14px]">
              <a className="btn bg-warm text-teal" href={`#${homeContent.appointment.targetId}`}>
                {homeContent.appointment.label}
              </a>
              <a className="btn border border-gold text-gold" href={`#${homeContent.hero.secondaryAction.targetId}`}>
                {homeContent.hero.secondaryAction.label}
              </a>
            </div>
          </div>

          <div className="mb-10 hidden grid-cols-1 justify-items-center gap-[18px] self-end text-gold md:grid" aria-hidden="true">
            <span className="[writing-mode:vertical-rl] text-[0.65rem] font-extrabold tracking-[0.32em] uppercase">Scroll</span>
            <i className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]" id="philosophy">
        <div className="site-container grid grid-cols-[minmax(0,0.95fr)_minmax(320px,0.82fr)] items-center gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-7">
          <div>
            <p className="eyebrow text-teal">{homeContent.philosophy.eyebrow}</p>
            <h2 className="display text-teal text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] max-xs:text-[2.45rem]">
              {homeContent.philosophy.title}
            </h2>
          </div>
          <p className="m-0 max-w-[660px] text-[1.18rem] text-charcoal max-md:text-base">
            {homeContent.philosophy.text}
          </p>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="bg-teal py-[clamp(88px,11vw,156px)] text-warm max-md:py-[66px]" id="expertise">
        <div className="site-container">
          <p className="eyebrow text-gold">{homeContent.expertise.eyebrow}</p>
          <h2 className="display max-w-[960px] text-warm text-[clamp(3.4rem,7.8vw,6.8rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] max-xs:text-[2.45rem]">
            {homeContent.expertise.title}
          </h2>
          <div className="mt-14 grid grid-cols-4 gap-9 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[46px]">
            {homeContent.expertise.items.map((item) => (
              <article key={item.title}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-teal-deep max-md:aspect-[1.42/1]">
                  <Image
                    src={item.image} alt={item.alt} fill
                    sizes="(max-width: 820px) 100vw, 25vw"
                    className="object-cover [filter:grayscale(8%)_contrast(1.02)]"
                  />
                </div>
                <h3 className="mb-[10px] mt-[22px] font-display text-[1.42rem] font-extrabold leading-none uppercase">{item.title}</h3>
                <p className="m-0 font-light text-[rgb(240_240_229/68%)]">{item.text}</p>
                <span className="mt-6 block text-[0.72rem] font-extrabold tracking-[0.16em] uppercase text-gold">{item.tags}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container">
          <p className="eyebrow text-teal">{homeContent.difference.eyebrow}</p>
          <h2 className="display max-w-[980px] text-teal text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] max-xs:text-[2.45rem]">
            {homeContent.difference.title}
          </h2>
          <div className="mt-[clamp(80px,12vw,180px)] grid grid-cols-3 gap-x-[90px] gap-y-[80px] max-md:mt-11 max-md:grid-cols-1 max-md:gap-[30px]">
            {homeContent.difference.items.map((item) => (
              <article key={item.title}>
                <h3 className="mb-[10px] mt-0 font-display text-[1.42rem] font-extrabold leading-none uppercase text-teal max-md:mb-[6px] max-md:text-base">{item.title}</h3>
                <p className="m-0 text-[1.12rem] text-charcoal max-md:text-[0.98rem]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-teal py-[clamp(90px,10vw,140px)] text-warm max-md:py-[66px]">
        <div className="site-container">
          <p className="eyebrow text-gold">{homeContent.testimonials.eyebrow}</p>
          <h2 className="display text-warm text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] max-xs:text-[2.45rem]">
            {homeContent.testimonials.title}
          </h2>
          <div className="mt-[70px] grid grid-cols-3 gap-[80px] max-md:mt-9 max-md:grid-cols-1 max-md:gap-11">
            {homeContent.testimonials.items.map((item) => (
              <figure key={item.author} className="m-0">
                <blockquote className="m-0 min-h-[118px] text-[1.24rem] font-bold italic leading-[1.35] text-warm max-md:min-h-0 max-md:text-[1.1rem]">
                  &quot;{item.quote}&quot;
                </blockquote>
                <figcaption className="mt-7 border-t border-[rgb(214_179_108/72%)] pt-[18px] text-[0.75rem] font-extrabold tracking-[0.18em] uppercase text-warm">
                  {item.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]" id="blogs">
        <div className="site-container">
          <div className="flex items-end justify-between gap-10 max-md:block">
            <div>
              <p className="eyebrow text-teal">{homeContent.blogs.eyebrow}</p>
              <h2 className="display text-teal text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)]">
                {homeContent.blogs.title}
              </h2>
            </div>
            <a className="btn hidden border-teal text-teal md:inline-flex" href={homeContent.blogs.action.href}>
              {homeContent.blogs.action.label} →
            </a>
          </div>

          <div className="mt-[76px] grid grid-cols-3 gap-[54px] max-md:mt-[38px] max-md:grid-cols-1 max-md:gap-11">
            {homeContent.blogs.items.map((item) => (
              <a className="block" href={item.href} key={item.title} target="_blank" rel="noreferrer">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm max-md:aspect-[1.42/1]">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 820px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="mt-6 flex flex-wrap gap-[14px] text-[0.64rem] font-extrabold tracking-[0.2em] uppercase text-teal">
                  <span>{item.category}</span>
                  <span className="text-[rgb(45_47_47/58%)]">{item.readTime}</span>
                </div>
                <h3 className="mb-[10px] mt-[22px] font-display text-[1.35rem] font-extrabold leading-[1.12] uppercase text-teal">{item.title}</h3>
                <p className="m-0 text-charcoal">{item.text}</p>
              </a>
            ))}
          </div>

          <a className="btn mt-9 border-teal text-teal md:hidden" href={homeContent.blogs.action.href}>
            {homeContent.blogs.action.label} →
          </a>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative grid min-h-[92vh] place-items-center overflow-hidden bg-teal text-warm max-md:min-h-[760px]" id="contact">
        <Image
          className="object-cover [filter:grayscale(15%)_contrast(1.04)]"
          src={homeContent.cta.image} alt="" fill sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgb(16_39_40/88%)]" />
        <div className="relative z-[2] mx-auto w-[min(calc(100%-48px),1000px)] py-[clamp(96px,14vw,180px)] text-center max-md:w-[min(calc(100%-32px),520px)] max-md:py-[120px]">
          <h2 className="display text-[clamp(3.2rem,7vw,6.7rem)] max-md:text-[clamp(2.7rem,12vw,4rem)] max-xs:text-[2.45rem]">
            {homeContent.cta.title}
          </h2>
          <p className="mx-auto mt-7 text-[1.25rem] text-[rgb(240_240_229/72%)] max-md:text-base">
            {homeContent.cta.text}
          </p>
          <a className="btn bg-warm text-teal" href={`mailto:${homeContent.contact.email}`}>
            {homeContent.appointment.label}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-site-black pb-[54px] pt-[92px] text-silver max-md:pb-11 max-md:pt-[76px]">
        <div className="site-container grid grid-cols-[1.2fr_0.55fr_1fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">

          <div className="footer-brand">
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
              <a key={item.targetId} href={`#${item.targetId}`} className="mb-3 block text-[0.92rem] text-silver transition-colors duration-[180ms] hover:text-gold">
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
