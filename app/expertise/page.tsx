import Image from "next/image";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/scroll-reveal";
import { expertiseContent as fallbackExpertiseContent } from "@/data/expertise-content";
import { homeContent as fallbackHomeContent } from "@/data/home-content";
import { getCmsContent, isCmsPageVisible } from "@/lib/cms";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const expertiseContent = await getCmsContent("expertise", fallbackExpertiseContent);

  return createMetadata({
    rawTitle: expertiseContent.seo.rawTitle,
    path: "/expertise",
    description: expertiseContent.seo.description,
    keywords: expertiseContent.seo.keywords
  });
}

function DisciplineVisual({
  title,
  text,
  image,
  alt,
  className
}: {
  title: string;
  text: string;
  image: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-[300px] overflow-hidden bg-teal md:min-h-[520px]${className
        ? ` ${className}`
        : ""}`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 820px) 100vw, 50vw"
        className="object-cover [filter:grayscale(12%)_contrast(1.05)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(16_39_40/54%),rgb(16_39_40/88%))]" />
      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-b from-transparent to-site-black/82" />
      <div className="relative z-[2] flex h-full min-h-[300px] flex-col justify-end px-[clamp(28px,7vw,116px)] pb-8 pt-16 text-warm md:min-h-[520px] md:justify-center md:py-16">
        <h2 className="display text-[48px] leading-14 max-md:text-[28px] max-md:leading-8">
          {title}
        </h2>
        <p className="mt-5 max-w-[460px] text-[24px] leading-8 font-light text-warm/82 max-md:text-[16px] max-md:leading-6">
          {text}
        </p>
      </div>
    </div>
  );
}

function ServicesList({
  services,
  className
}: {
  services: Array<{ title: string; text: string }>;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-center bg-warm px-[clamp(28px,7vw,112px)] py-10 text-teal md:min-h-130 md:py-16${className
        ? ` ${className}`
        : ""}`}
    >
      {services.map(service =>
        <article
          key={service.title}
          className="border-b border-teal/14 py-5 first:pt-0 last:border-0 last:pb-0"
        >
          <h3 className="m-0 text-[0.98rem] font-black leading-tight text-teal">
            {service.title}
          </h3>
          <p className="m-0 mt-1 max-w-[520px] text-[0.92rem] leading-snug text-charcoal max-md:text-[1rem]">
            {service.text}
          </p>
        </article>
      )}
    </div>
  );
}

async function CtaAndFooter() {
  const homeContent = await getCmsContent("home", fallbackHomeContent);

  return (
    <section className="relative -mt-px grid min-h-190 place-items-center overflow-hidden bg-teal text-warm">
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
        <h2 className="display text-[96px] leading-26 text-warm max-md:text-[36px] max-md:leading-10 reveal">
          {homeContent.cta.title}
        </h2>
        <p className="mx-auto mt-6 text-[24px] leading-8 font-light text-[rgb(240_240_229/76%)] max-md:text-[16px] max-md:leading-6">
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
  );
}

export default async function ExpertisePage() {
  if (!(await isCmsPageVisible("expertise"))) {
    notFound();
  }

  const expertiseContent = await getCmsContent("expertise", fallbackExpertiseContent);

  return (
    <div className="min-h-screen bg-site-black">
      <ScrollReveal />

      <section className="relative min-h-[100svh] overflow-hidden bg-teal text-warm">
        <Image
          className="object-cover [filter:grayscale(35%)_contrast(1.05)]"
          src={expertiseContent.hero.image}
          alt={expertiseContent.hero.alt}
          fill
          priority
          sizes="100vw"
        />
        {expertiseContent.hero.video &&
          <video
            className="absolute inset-0 h-full w-full object-cover [filter:grayscale(35%)_contrast(1.05)]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={expertiseContent.hero.image}
            aria-hidden="true"
          >
            {expertiseContent.hero.mobileVideo &&
              <source
                src={expertiseContent.hero.mobileVideo}
                media="(max-width: 819px)"
              />}
            <source
              src={expertiseContent.hero.video}
              media="(min-width: 820px)"
            />
          </video>}
        <div className="absolute inset-0 bg-[rgb(16_39_40/78%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-b from-transparent to-site-black" />
        <div className="site-container relative z-[2] flex min-h-[100svh] flex-col justify-end pb-[clamp(52px,7vw,96px)] max-md:pb-[120px] pt-[62px]">
          <h1 className="display max-w-[820px] text-[64px] leading-18 max-md:text-[28px] max-md:leading-8">
            {expertiseContent.hero.title[0]}
            {expertiseContent.hero.title.slice(1).map((line, i) =>
              <span key={i} className="block">
                {line}
              </span>
            )}
          </h1>
          <p className="mt-7 max-w-[720px] text-[32px] leading-10 font-light text-warm/78 max-md:text-[20px] max-md:leading-6">
            {expertiseContent.hero.text}
          </p>
        </div>
      </section>

      <section className="bg-site-black py-[clamp(86px,9vw,132px)] text-warm">
        <div className="site-container grid grid-cols-[minmax(0,0.9fr)_minmax(320px,0.95fr)] items-start gap-[clamp(54px,11vw,170px)] max-md:grid-cols-1">
          <h2 className="display max-w-[560px] text-[48px] leading-14 max-md:text-[28px] max-md:leading-8 reveal">
            {expertiseContent.intro.heading}
          </h2>
          <div className="max-w-[560px] text-[24px] leading-8 font-light text-warm/76 max-md:text-[16px] max-md:leading-6 reveal">
            {expertiseContent.intro.paragraphs.map((para, i) =>
              <p key={i} className={i === 0 ? "m-0" : "mb-0 mt-7"}>
                {para}
              </p>
            )}
          </div>
        </div>
      </section>

      <div>
        {expertiseContent.disciplines.map(discipline =>
          <div
            key={discipline.title}
            className="flex flex-col md:grid md:grid-cols-2"
          >
            <DisciplineVisual
              title={discipline.title}
              text={discipline.text}
              image={discipline.image}
              alt={discipline.alt}
              className={!discipline.imageFirst ? "md:order-last" : ""}
            />
            <ServicesList
              services={discipline.services}
              className={!discipline.imageFirst ? "md:order-first" : ""}
            />
          </div>
        )}
      </div>

      <CtaAndFooter />
    </div>
  );
}
