import Image from "next/image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { blogContent } from "@/data/blog-content";
import { homeContent } from "@/data/home-content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  rawTitle: blogContent.seo.rawTitle,
  path: "/blog",
  description: blogContent.seo.description,
  keywords: blogContent.seo.keywords,
});

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-site-black">
      <ScrollReveal />

      {/* ── HERO — full viewport height ── */}
      <section className="relative min-h-[100svh] overflow-hidden bg-teal text-warm">
        <Image
          src={blogContent.hero.image}
          alt={blogContent.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:grayscale(20%)_contrast(1.04)]"
        />
        <div className="absolute inset-0 bg-[rgb(16_39_40/78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-site-black" />
        <div className="site-container relative z-[2] flex min-h-[100svh] flex-col justify-end pb-[clamp(52px,7vw,96px)] pt-[62px]">
          <h1 className="display max-w-[820px] text-[clamp(3rem,6.5vw,6.5rem)]">
            {blogContent.hero.title[0]}
            {blogContent.hero.title.slice(1).map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>
          <p className="mt-5 max-w-[560px] text-[1.08rem] text-[rgb(240_240_229/72%)] max-md:text-base">
            {blogContent.hero.text}
          </p>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container">
          <p className="eyebrow text-teal reveal">{blogContent.postsSection.eyebrow}</p>
          <h2 className="display text-teal text-[clamp(3.2rem,7vw,6.5rem)] max-md:text-[clamp(2.55rem,12vw,4rem)] reveal">
            {blogContent.postsSection.heading}
          </h2>
          <div className="mt-14 grid grid-cols-3 gap-[54px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-11">
            {blogContent.posts.map((post) => (
              <a className="block reveal" href={post.href} key={post.slug}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-warm max-md:aspect-[1.42/1]">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 flex flex-wrap gap-[14px] text-[0.64rem] font-extrabold tracking-[0.2em] uppercase text-teal">
                  <span>{post.category}</span>
                  <span className="text-[rgb(45_47_47/58%)]">{post.readTime}</span>
                </div>
                <h2 className="mb-[10px] mt-[22px] font-display text-[1.35rem] font-extrabold leading-[1.12] uppercase text-teal">
                  {post.title}
                </h2>
                <p className="m-0 text-charcoal">{post.text}</p>
              </a>
            ))}
          </div>
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
    </div>
  );
}
