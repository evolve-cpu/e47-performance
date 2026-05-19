import Image from "next/image";
import { E47Logo } from "@/components/e47-logo";
import { MobileMenu } from "@/components/mobile-menu";
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
          <p className="eyebrow text-gold">{blogContent.hero.eyebrow}</p>
          <h1 className="display max-w-[860px] text-[clamp(3.8rem,8vw,7.2rem)] max-md:text-[clamp(3rem,13vw,4.5rem)]">
            {blogContent.hero.title}
          </h1>
          <p className="mt-7 max-w-[560px] text-[1.18rem] text-[rgb(240_240_229/75%)] max-md:text-base">
            {blogContent.hero.text}
          </p>
        </div>
      </section>

      {/* ── POSTS ── */}
      <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal max-md:py-[66px]">
        <div className="site-container">
          <div className="grid grid-cols-3 gap-[54px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-11">
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
