import Image from "next/image";
import type { CmsPage, CmsSection } from "@/lib/cms";

function Media({
  section,
  priority = false
}: {
  section: CmsSection;
  priority?: boolean;
}) {
  return (
    <div className="relative min-h-[360px] overflow-hidden bg-teal">
      {section.image && (
        <Image
          src={section.image}
          alt={section.alt || ""}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover [filter:grayscale(20%)_contrast(1.04)]"
        />
      )}
      {section.video && (
        <video
          className="absolute inset-0 h-full w-full object-cover [filter:grayscale(20%)_contrast(1.04)]"
          autoPlay
          muted
          loop
          playsInline
          poster={section.image}
        >
          <source src={section.video} />
        </video>
      )}
      <div className="absolute inset-0 bg-[rgb(16_39_40/72%)]" />
    </div>
  );
}

function SectionLinks({ section }: { section: CmsSection }) {
  if (!section.links?.length) {
    return null;
  }

  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {section.links.map((link) => (
        <a className="btn bg-warm text-teal" href={link.href} key={`${link.label}-${link.href}`}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

function HeroSection({ section }: { section: CmsSection }) {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-teal text-warm">
      <Media section={section} priority />
      <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-b from-transparent to-site-black" />
      <div className="site-container absolute inset-x-0 bottom-0 z-[2] pb-[clamp(52px,7vw,96px)] pt-[96px]">
        {section.eyebrow && <p className="eyebrow text-gold">{section.eyebrow}</p>}
        <h1 className="display max-w-[860px] text-[64px] leading-[0.95] max-md:text-[38px]">
          {section.title}
        </h1>
        {section.text && (
          <p className="mt-5 max-w-[640px] text-[28px] font-light leading-tight text-warm/78 max-md:text-[18px]">
            {section.text}
          </p>
        )}
        <SectionLinks section={section} />
      </div>
    </section>
  );
}

function TextSection({ section }: { section: CmsSection }) {
  return (
    <section className="bg-site-black py-[clamp(86px,9vw,132px)] text-warm">
      <div className="site-container">
        {section.eyebrow && <p className="eyebrow text-gold">{section.eyebrow}</p>}
        {section.title && (
          <h2 className="display max-w-[800px] text-[48px] max-md:text-[30px]">
            {section.title}
          </h2>
        )}
        {section.text && (
          <p className="mt-6 max-w-[760px] text-[24px] font-light leading-8 text-warm/76 max-md:text-[16px] max-md:leading-6">
            {section.text}
          </p>
        )}
        <SectionLinks section={section} />
      </div>
    </section>
  );
}

function MediaTextSection({ section }: { section: CmsSection }) {
  return (
    <section className="grid bg-warm text-teal md:grid-cols-2">
      <Media section={section} />
      <div className="flex min-h-[360px] flex-col justify-center px-[clamp(28px,7vw,112px)] py-12">
        {section.eyebrow && <p className="eyebrow text-teal">{section.eyebrow}</p>}
        {section.title && (
          <h2 className="display text-[44px] text-teal max-md:text-[30px]">
            {section.title}
          </h2>
        )}
        {section.text && <p className="mt-5 text-[20px] leading-7 text-charcoal">{section.text}</p>}
        <div className="[&_.btn]:border-teal [&_.btn]:bg-transparent [&_.btn]:text-teal">
          <SectionLinks section={section} />
        </div>
      </div>
    </section>
  );
}

function CardsSection({ section }: { section: CmsSection }) {
  return (
    <section className="bg-warm py-[clamp(88px,11vw,156px)] text-teal">
      <div className="site-container">
        {section.eyebrow && <p className="eyebrow text-teal">{section.eyebrow}</p>}
        {section.title && (
          <h2 className="display text-[48px] text-teal max-md:text-[30px]">{section.title}</h2>
        )}
        {section.text && <p className="mt-4 max-w-[700px] text-charcoal">{section.text}</p>}
        <div className="mt-12 grid grid-cols-3 gap-9 max-lg:grid-cols-2 max-md:grid-cols-1">
          {(section.items || []).map((item, index) => (
            <article key={`${item.title}-${index}`}>
              {item.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-teal/10">
                  <Image
                    src={item.image}
                    alt={item.alt || ""}
                    fill
                    sizes="(max-width: 820px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              )}
              {item.title && (
                <h3 className="mb-2 mt-5 font-display text-[1.25rem] font-black uppercase leading-tight">
                  {item.href ? <a href={item.href}>{item.title}</a> : item.title}
                </h3>
              )}
              {item.text && <p className="m-0 text-charcoal">{item.text}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ section }: { section: CmsSection }) {
  return (
    <section className="relative grid min-h-[560px] place-items-center overflow-hidden bg-teal text-center text-warm">
      <Media section={section} />
      <div className="absolute inset-x-0 bottom-0 h-[260px] bg-gradient-to-b from-transparent to-site-black" />
      <div className="site-container absolute z-[2]">
        {section.title && (
          <h2 className="display mx-auto max-w-[940px] text-[72px] max-md:text-[36px]">
            {section.title}
          </h2>
        )}
        {section.text && (
          <p className="mx-auto mt-6 max-w-[680px] text-[24px] font-light text-warm/76 max-md:text-[16px]">
            {section.text}
          </p>
        )}
        <div className="flex justify-center">
          <SectionLinks section={section} />
        </div>
      </div>
    </section>
  );
}

export function CmsPageRenderer({ page }: { page: CmsPage }) {
  return (
    <div className="min-h-screen bg-site-black">
      {page.sections.map((section) => {
        if (section.type === "hero") return <HeroSection key={section.id} section={section} />;
        if (section.type === "mediaText") return <MediaTextSection key={section.id} section={section} />;
        if (section.type === "cards") return <CardsSection key={section.id} section={section} />;
        if (section.type === "cta") return <CtaSection key={section.id} section={section} />;
        return <TextSection key={section.id} section={section} />;
      })}
    </div>
  );
}
