import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutContent } from "@/data/about-content";
import { homeContent } from "@/data/home-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: aboutContent.seo.rawTitle,
  path: "/about",
  description: aboutContent.seo.description,
  keywords: aboutContent.seo.keywords
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-site-black">
      <ScrollReveal />

      {/* ── HERO — full viewport height ── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-teal text-warm">
        <Image
          src={aboutContent.hero.image}
          alt={aboutContent.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:grayscale(20%)_contrast(1.04)]"
        />
        {aboutContent.hero.video &&
          <video
            className="absolute inset-0 h-full w-full object-cover [filter:grayscale(20%)_contrast(1.04)]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={aboutContent.hero.image}
            aria-hidden="true"
          >
            {aboutContent.hero.mobileVideo &&
              <source
                src={aboutContent.hero.mobileVideo}
                media="(max-width: 819px)"
              />}
            <source
              src={aboutContent.hero.video}
              media="(min-width: 820px)"
            />
          </video>}
        <div className="absolute inset-0 bg-[rgb(16_39_40/78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-site-black" />
        <div className="site-container relative z-[2] flex min-h-[100svh] flex-col justify-end pb-[clamp(52px,7vw,96px)] pt-[62px]">
          <h1 className="display max-w-[820px] text-[64px] leading-18 max-md:text-[36px] max-md:leading-10">
            {aboutContent.hero.title[0]}
            {aboutContent.hero.title.slice(1).map((line, i) =>
              <span key={i} className="block">
                {line}
              </span>
            )}
          </h1>
          <div className="mt-5 max-w-[560px]">
            {aboutContent.hero.text.map((line, i) =>
              <p
                key={i}
                className="m-0 text-[32px] leading-10 font-light text-[rgb(240_240_229/72%)] max-md:text-[20px] max-md:leading-6"
              >
                {line}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-site-black py-[clamp(80px,10vw,140px)] text-warm text-center">
        <div className="site-container">
          <div className="mx-auto max-w-[760px] reveal">
            {aboutContent.story.paragraphs.map((para, i) =>
              <p
                key={i}
                className={`m-0 text-[24px] leading-8 font-light text-[rgb(240_240_229/72%)] max-md:text-[16px] max-md:leading-6${i >
                0
                  ? " mt-7"
                  : ""}`}
              >
                {para}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container">
          {/* <p className="eyebrow text-teal reveal">
            {aboutContent.team.eyebrow}
          </p> */}
          <h2 className="display text-teal text-[48px] leading-14 max-md:text-[28px] max-md:leading-8 reveal">
            {aboutContent.team.title}
          </h2>
          <p className="mt-4 max-w-[640px] text-[24px] leading-8 font-light text-charcoal reveal max-md:text-[16px] max-md:leading-6">
            {aboutContent.team.subtitle}
          </p>
          <div className="mt-14 grid grid-cols-4 gap-9 max-lg:grid-cols-2 max-md:gap-[36px]">
            {aboutContent.team.members.map((member, i) =>
              <article key={i} className="reveal">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-teal/10">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover [filter:grayscale(8%)_contrast(1.02)]"
                  />
                </div>
                <h3 className="mb-[6px] mt-[18px] font-display text-[1.2rem] font-extrabold leading-none uppercase text-teal">
                  {member.name}
                </h3>
                <span className="block text-[0.68rem] font-extrabold tracking-[0.16em] uppercase text-teal">
                  {member.role}
                </span>
                <p className="mt-3 m-0 text-[0.9rem] font-light text-charcoal max-md:text-[1rem]">
                  {member.bio}
                </p>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container grid grid-cols-[minmax(0,0.9fr)_minmax(320px,0.95fr)] items-start gap-[clamp(48px,8vw,130px)] max-md:grid-cols-1 max-md:gap-10">
          <div className="reveal">
            {/* <p className="eyebrow text-teal">
              {aboutContent.achievements.eyebrow}
            </p> */}
            <h2 className="display text-teal text-[48px] leading-14 max-md:text-[28px] max-md:leading-8">
              {aboutContent.achievements.title}
            </h2>
          </div>
          <ul className="m-0 p-0 reveal">
            {aboutContent.achievements.items.map((item, i) =>
              <li
                key={i}
                className="m-0 list-none border-b border-teal/14 py-5 first:pt-0 last:border-0 last:pb-0 text-[24px] leading-8 font-light text-charcoal max-md:text-[16px] max-md:leading-6"
              >
                {item}
              </li>
            )}
          </ul>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative -mt-px grid min-h-190 place-items-center overflow-hidden bg-teal text-warm">
        <Image
          src={homeContent.cta.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover [filter:grayscale(35%)_contrast(1.06)]"
        />
        <div className="absolute inset-0 bg-[rgb(16_39_40/84%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent to-site-black" />
        <div className="relative z-[2] mx-auto w-[min(calc(100%-48px),1000px)] py-[clamp(108px,14vw,180px)] text-center max-md:w-[min(calc(100%-32px),520px)]">
          <h2 className="display text-[96px] leading-26 text-warm max-md:text-[36px] max-md:leading-10 reveal">
            {aboutContent.cta.title}
          </h2>
          <p className="mx-auto mt-6 text-[24px] leading-8 font-light text-[rgb(240_240_229/76%)] max-md:text-[16px] max-md:leading-6">
            {aboutContent.cta.text}
          </p>
          <a
            className="btn mt-8 bg-warm font-medium text-teal"
            href={aboutContent.cta.buttonHref}
          >
            {aboutContent.cta.buttonLabel}
          </a>
        </div>
      </section>
    </div>
  );
}
