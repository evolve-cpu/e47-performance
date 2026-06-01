import Image from "next/image";
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

      <section
        className="relative min-h-[100svh] overflow-hidden bg-teal"
        id="top"
      >
        <Image
          className="object-cover [filter:grayscale(25%)_contrast(1.05)]"
          src={homeContent.hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        {homeContent.hero.mediaType === "video" &&
          homeContent.hero.video &&
          <video
            className="absolute inset-0 h-full w-full object-cover [filter:grayscale(25%)_contrast(1.05)]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={homeContent.hero.image}
            aria-hidden="true"
          >
            {homeContent.hero.mobileVideo &&
              <source
                src={homeContent.hero.mobileVideo}
                media="(max-width: 819px)"
              />}
            <source src={homeContent.hero.video} media="(min-width: 820px)" />
          </video>}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(16_39_40/68%)_0%,rgb(16_39_40/58%)_44%,rgb(15_15_15/96%)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-b from-transparent to-site-black" />

        <div className="site-container relative z-[2] flex min-h-[100svh] items-center pt-[62px] text-warm max-md:items-end max-md:pb-[90px]">
          <div>
            <h1 className="display max-w-[520px] text-[clamp(5rem,9.375vw,7.5rem)] max-md:max-w-[330px] max-md:text-[clamp(3rem,17.1vw,4rem)]">
              {homeContent.hero.title.map(line =>
                <span key={line} className="block">
                  {line}
                </span>
              )}
            </h1>
            <p className="mt-5 max-w-[560px] text-[1.5rem] font-light leading-relaxed text-[rgb(240_240_229/82%)] max-md:max-w-[320px] max-md:text-[1.25rem]">
              {homeContent.hero.text}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 max-md:grid max-md:w-[min(100%,290px)]">
              <a
                className="btn bg-warm text-teal font-medium"
                href={homeContent.appointment.href}
              >
                {homeContent.appointment.label}
              </a>
              <a
                className="btn font-medium border-1 border-gold text-gold"
                href={homeContent.hero.secondaryAction.href}
              >
                {homeContent.hero.secondaryAction.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative -mt-px bg-site-black py-[clamp(86px,9vw,128px)] text-warm"
        id="philosophy"
      >
        <div className="site-container grid grid-cols-[minmax(0,0.95fr)_minmax(320px,0.82fr)] items-start gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-7">
          <div className="reveal">
            <h2 className="display max-w-[520px] text-[3rem] text-warm max-md:text-[2.25rem]">
              {homeContent.philosophy.title}
            </h2>
          </div>
          <p className="reveal m-0 max-w-[600px] text-[1.5rem] font-light leading-relaxed text-[rgb(240_240_229/72%)] max-md:text-[1rem]">
            {homeContent.philosophy.text}
          </p>
        </div>
      </section>

      <section
        className="bg-teal py-[clamp(78px,9vw,128px)] text-warm"
        id="expertise"
      >
        {/* <div className="site-container">
          <h2 className="display max-w-[820px] text-[3rem] text-warm max-md:text-[2.25rem] reveal">
            <span className="block">
              {homeContent.expertise.eyebrow}.
            </span>
            <span className="block">
              {homeContent.expertise.title}
            </span>
          </h2>
        </div> */}
        <div className="site-container md:flex md:justify-center">
          <h2 className="display text-[3rem] text-warm max-md:text-[2.05rem] reveal">
            <span className="block md:inline max-md:mb-2">
              {homeContent.expertise.eyebrow}.
            </span>

            <span className="block md:inline md:ml-3">
              {homeContent.expertise.title}
            </span>
          </h2>
        </div>
        <div className="mt-14 mx-auto grid grid-cols-3 justify-items-center gap-10 max-w-[95%] max-md:max-w-[90%] max-md:grid-cols-1 max-md:gap-10">
          {homeContent.expertise.items.map(item =>
            <article key={item.title} className="reveal w-full max-w-[450px]">
              <div className="relative aspect-[0.8/1] w-full overflow-hidden bg-teal-deep">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 33vw"
                  className="object-cover [filter:contrast(1.03)]"
                />
              </div>

              <div className="px-5 pt-5">
                <h3 className="mb-[6px] mt-0 font-display text-[1.05rem] font-black uppercase leading-none">
                  {item.title}
                </h3>

                <span className="block text-[0.58rem] font-black uppercase tracking-[0.12em] text-gold">
                  {item.tags}
                </span>
              </div>
            </article>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-site-black py-[clamp(92px,11vw,154px)] text-warm">
        {homeContent.difference.bgImage &&
          <Image
            className="object-cover opacity-45 [filter:grayscale(45%)_contrast(1.08)]"
            src={homeContent.difference.bgImage}
            alt=""
            fill
            sizes="100vw"
          />}
        <div className="absolute inset-0 bg-[rgb(12_31_32/76%)]" />

        <div className="site-container relative z-[2]">
          <h2 className="display max-w-[900px] text-[3rem] text-warm max-md:text-[2.25rem] reveal">
            {homeContent.difference.title}
          </h2>
          <div className="mt-[clamp(74px,10vw,136px)] grid grid-cols-3 gap-x-[70px] gap-y-[52px] max-md:mt-11 max-md:grid-cols-1 max-md:gap-[30px]">
            {homeContent.difference.items.map(item =>
              <article key={item.title} className="reveal">
                <h3 className="mb-[8px] mt-0 font-display text-[1.5rem] font-black uppercase leading-none text-warm max-md:text-[1rem]">
                  {item.title}
                </h3>
                <p className="m-0 text-[1.25rem] font-light leading-snug text-[rgb(240_240_229/72%)] max-md:text-[1rem]">
                  {item.text}
                </p>
              </article>
            )}
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

      <section
        className="bg-warm pb-[clamp(88px,10vw,132px)] pt-[clamp(44px,6vw,84px)] text-teal"
        id="blogs"
      >
        <div className="site-container">
          <div className="flex items-start justify-between gap-10 max-md:block reveal">
            <h2 className="display max-w-[560px] text-[3rem] text-teal max-md:text-[2.25rem]">
              {homeContent.blogs.title}
            </h2>
            <a
              className="btn hidden border-teal font-medium text-teal md:inline-flex"
              href={homeContent.blogs.action.href}
            >
              {homeContent.blogs.action.label}
            </a>
          </div>

          <div className="mt-[64px] grid grid-cols-3 gap-[44px] max-md:mt-[38px] max-md:grid-cols-1 max-md:gap-11">
            {homeContent.blogs.items.map(item =>
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
                  <span>
                    {item.category}
                  </span>
                  <span>
                    {item.readTime}
                  </span>
                </div>
                <h3 className="mb-[8px] mt-[14px] font-display text-[1rem] font-black uppercase leading-[1.12] text-teal">
                  {item.title}
                </h3>
                <p className="m-0 text-[0.88rem] leading-snug text-charcoal max-md:text-[1rem]">
                  {item.text}
                </p>
              </a>
            )}
          </div>

          <a
            className="btn mt-9 border-teal  text-teal md:hidden"
            href={homeContent.blogs.action.href}
          >
            {homeContent.blogs.action.label} -&gt;
          </a>
        </div>
      </section>

      <section
        className="relative -mt-px grid min-h-[760px] place-items-center overflow-hidden bg-teal text-warm"
        id="contact"
      >
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
          <h2 className="display text-[6rem] text-warm max-md:text-[3rem] reveal">
            {homeContent.cta.title}
          </h2>
          <p className="mx-auto mt-6 text-[1.5rem] font-light text-[rgb(240_240_229/76%)] max-md:text-[1rem]">
            {homeContent.cta.text}
          </p>
          <a
            className="btn mt-8 bg-warm font-medium text-teal"
            href={homeContent.appointment.href}
          >
            {homeContent.appointment.label}
          </a>
        </div>
      </section>
    </div>
  );
}
