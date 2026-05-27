import Image from "next/image";
import { E47Logo } from "@/components/e47-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ScrollReveal } from "@/components/scroll-reveal";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { homeContent } from "@/data/home-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: homeContent.seo.rawTitle,
  path: "/",
  description: homeContent.seo.description,
  keywords: homeContent.seo.keywords
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-site-black">
      <ScrollReveal />

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="absolute inset-0 bg-[rgb(13_28_29/48%)] backdrop-blur-[10px]" />
        <div className="site-container relative flex min-h-[62px] items-center justify-between text-warm">
          <a
            className="inline-flex text-warm"
            href="#top"
            aria-label={`${homeContent.brand.name} home`}
          >
            <E47Logo width={44} height={28} />
          </a>

          <nav
            className="hidden items-center gap-[34px] text-[0.58rem] font-black uppercase tracking-[0.18em] md:flex"
            aria-label="Primary navigation"
          >
            {homeContent.navigation.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-[180ms] hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="hidden min-h-[30px] items-center justify-center border border-gold px-4 text-[0.56rem] font-black uppercase tracking-[0.14em] text-gold transition-opacity hover:opacity-70 md:inline-flex"
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

      <section
        className="relative min-h-[720px] overflow-hidden bg-teal max-md:min-h-[100svh]"
        id="top"
      >
        {homeContent.hero.mediaType === "video" && homeContent.hero.video ? (
          <video
            className="absolute inset-0 h-full w-full object-cover [filter:grayscale(25%)_contrast(1.05)]"
            src={homeContent.hero.video}
            autoPlay
            muted
            loop
            playsInline
            poster={homeContent.hero.image}
          />
        ) : (
          <Image
            className="object-cover [filter:grayscale(25%)_contrast(1.05)]"
            src={homeContent.hero.image}
            alt=""
            fill
            priority
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(16_39_40/68%)_0%,rgb(16_39_40/58%)_44%,rgb(15_15_15/96%)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-b from-transparent to-site-black" />

        <div className="site-container relative z-[2] flex min-h-[720px] items-center pt-[62px] text-warm max-md:min-h-[100svh] max-md:items-end max-md:pb-[90px]">
          <div>
            <h1 className="display max-w-[520px] text-[clamp(4.2rem,7vw,6.4rem)] max-md:max-w-[330px] max-md:text-[clamp(3.05rem,14vw,4.65rem)]">
              {homeContent.hero.title.map(line => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-[520px] text-[1rem] font-bold leading-snug text-[rgb(240_240_229/82%)] max-md:max-w-[320px]">
              {homeContent.hero.text}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 max-md:grid max-md:w-[min(100%,290px)]">
              <a className="btn bg-warm text-teal" href={homeContent.appointment.href}>
                {homeContent.appointment.label}
              </a>
              <a className="btn border border-gold text-gold" href={homeContent.hero.secondaryAction.href}>
                {homeContent.hero.secondaryAction.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-px bg-site-black py-[clamp(86px,9vw,128px)] text-warm" id="philosophy">
        <div className="site-container grid grid-cols-[minmax(0,0.95fr)_minmax(320px,0.82fr)] items-start gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-7">
          <div className="reveal">
            <h2 className="display max-w-[520px] text-[clamp(2.25rem,4vw,4.2rem)] text-warm">
              {homeContent.philosophy.title}
            </h2>
          </div>
          <p className="reveal m-0 max-w-[600px] text-[1rem] leading-relaxed text-[rgb(240_240_229/72%)]">
            {homeContent.philosophy.text}
          </p>
        </div>
      </section>

      <section className="bg-teal py-[clamp(78px,9vw,128px)] text-warm" id="expertise">
        <div className="site-container">
          <h2 className="display max-w-[620px] text-[clamp(2.25rem,4vw,4.2rem)] text-warm reveal">
            {homeContent.expertise.title}
          </h2>

          <div className="mt-14 grid grid-cols-3 gap-9 max-md:grid-cols-1 max-md:gap-[46px]">
            {homeContent.expertise.items.map(item => (
              <article key={item.title} className="reveal">
                <div className="relative aspect-[0.8/1] w-full overflow-hidden bg-teal-deep">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                    className="object-cover [filter:contrast(1.03)]"
                  />
                </div>
                <h3 className="mb-[9px] mt-[22px] font-display text-[1.05rem] font-black uppercase leading-none">
                  {item.title}
                </h3>
                <span className="block text-[0.58rem] font-black uppercase tracking-[0.12em] text-gold">
                  {item.tags}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-site-black py-[clamp(92px,11vw,154px)] text-warm">
        {homeContent.difference.bgImage && (
          <Image
            className="object-cover opacity-45 [filter:grayscale(45%)_contrast(1.08)]"
            src={homeContent.difference.bgImage}
            alt=""
            fill
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-[rgb(12_31_32/76%)]" />
        <div className="absolute inset-y-0 left-0 right-0 bg-[linear-gradient(180deg,#193435_0%,rgb(15_15_15/18%)_22%,rgb(15_15_15/38%)_70%,#0f0f0f_100%)]" />

        <div className="site-container relative z-[2]">
          <h2 className="display max-w-[900px] text-center text-[clamp(2.25rem,4vw,4.4rem)] text-warm reveal md:mx-auto">
            {homeContent.difference.title}
          </h2>
          <div className="mt-[clamp(74px,10vw,136px)] grid grid-cols-3 gap-x-[70px] gap-y-[52px] max-md:mt-11 max-md:grid-cols-1 max-md:gap-[30px]">
            {homeContent.difference.items.map(item => (
              <article key={item.title} className="reveal">
                <h3 className="mb-[8px] mt-0 font-display text-[1rem] font-black uppercase leading-none text-warm">
                  {item.title}
                </h3>
                <p className="m-0 text-[0.88rem] leading-snug text-[rgb(240_240_229/72%)]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="-mt-px bg-warm">
        <TestimonialsCarousel
          eyebrow={homeContent.testimonials.eyebrow}
          title={homeContent.testimonials.title}
          subtitle={homeContent.testimonials.subtitle}
          items={homeContent.testimonials.items}
        />
      </div>

      <section className="bg-warm pb-[clamp(88px,10vw,132px)] pt-[clamp(44px,6vw,84px)] text-teal" id="blogs">
        <div className="site-container">
          <div className="flex items-start justify-between gap-10 max-md:block reveal">
            <h2 className="display max-w-[560px] text-[clamp(2.25rem,3.7vw,4rem)] text-teal">
              {homeContent.blogs.title}
            </h2>
            <a className="btn hidden border-teal text-teal md:inline-flex" href={homeContent.blogs.action.href}>
              {homeContent.blogs.action.label} -&gt;
            </a>
          </div>

          <div className="mt-[64px] grid grid-cols-3 gap-[44px] max-md:mt-[38px] max-md:grid-cols-1 max-md:gap-11">
            {homeContent.blogs.items.map(item => (
              <a className="block reveal" href={item.href} key={item.title}>
                <div className="relative aspect-[0.88/1] w-full overflow-hidden bg-warm max-md:aspect-[1.1/1]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-[12px] text-[0.54rem] font-black uppercase tracking-[0.14em] text-teal/70">
                  <span>{item.category}</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="mb-[8px] mt-[14px] font-display text-[1rem] font-black uppercase leading-[1.12] text-teal">
                  {item.title}
                </h3>
                <p className="m-0 text-[0.88rem] leading-snug text-charcoal">{item.text}</p>
              </a>
            ))}
          </div>

          <a className="btn mt-9 border-teal text-teal md:hidden" href={homeContent.blogs.action.href}>
            {homeContent.blogs.action.label} -&gt;
          </a>
        </div>
      </section>

      <section className="relative -mt-px grid min-h-[760px] place-items-center overflow-hidden bg-teal text-warm" id="contact">
        <Image
          className="object-cover [filter:grayscale(35%)_contrast(1.06)]"
          src={homeContent.cta.image}
          alt=""
          fill
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[rgb(16_39_40/84%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent to-site-black" />

        <div className="relative z-[2] mx-auto w-[min(calc(100%-48px),1000px)] py-[clamp(108px,14vw,180px)] text-center max-md:w-[min(calc(100%-32px),520px)]">
          <h2 className="display text-[clamp(3rem,6vw,6rem)] text-warm reveal">
            {homeContent.cta.title}
          </h2>
          <p className="mx-auto mt-6 text-[1rem] font-bold text-[rgb(240_240_229/76%)]">
            {homeContent.cta.text}
          </p>
          <a className="btn mt-8 bg-warm text-teal" href={homeContent.appointment.href}>
            {homeContent.appointment.label}
          </a>
        </div>
      </section>

      <footer className="-mt-px bg-site-black pb-[54px] pt-[74px] text-silver max-md:pb-11">
        <div className="site-container grid grid-cols-[1.2fr_0.55fr_1fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">
          <div className="footer-brand">
            <E47Logo width={60} height={38} className="text-warm" />
            <p className="mb-3 mt-5 text-[0.78rem] uppercase tracking-[0.1em]">{homeContent.brand.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-[24px] max-md:mt-9">
              {homeContent.social.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[0.62rem] uppercase tracking-[0.16em] text-silver transition-colors duration-[180ms] hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-5 mt-0 text-[0.62rem] uppercase tracking-[0.16em] text-gold">
              Navigation
            </h2>
            {homeContent.navigation.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="mb-3 block text-[0.82rem] text-silver transition-colors duration-[180ms] hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div>
            <h2 className="mb-5 mt-0 text-[0.62rem] uppercase tracking-[0.16em] text-gold">
              Contact
            </h2>
            <a href={`mailto:${homeContent.contact.email}`} className="mb-3 block text-[0.82rem] text-silver transition-colors hover:text-gold">
              {homeContent.contact.email}
            </a>
            <a href={`tel:${homeContent.contact.phone.replaceAll(" ", "")}`} className="mb-3 block text-[0.82rem] text-silver transition-colors hover:text-gold">
              {homeContent.contact.phone}
            </a>
            <p className="m-0 text-[0.82rem]">{homeContent.contact.address}</p>
          </div>
        </div>

        <div className="site-container mt-[66px] border-t border-[rgb(192_192_192/12%)] pt-[28px]">
          <p className="m-0 text-[0.62rem] uppercase tracking-[0.16em] text-[rgb(192_192_192/74%)]">
            {homeContent.brand.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
