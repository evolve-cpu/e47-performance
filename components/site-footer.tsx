import { E47Logo } from "@/components/e47-logo";
import { homeContent } from "@/data/home-content";

export function SiteFooter() {
  return (
    <footer className="-mt-px bg-site-black pb-[54px] pt-[74px] text-silver max-md:pb-11">
      <div className="site-container grid grid-cols-[1.2fr_0.55fr_1fr] gap-[80px] max-md:grid-cols-1 max-md:gap-10">
        <div>
          <E47Logo width={60} height={38} className="text-warm" />
          <p className="mb-3 mt-5 text-[0.78rem] uppercase tracking-[0.1em]">
            {homeContent.brand.tagline}
          </p>
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
          <a
            href={`mailto:${homeContent.contact.email}`}
            className="mb-3 block text-[0.82rem] text-silver transition-colors hover:text-gold"
          >
            {homeContent.contact.email}
          </a>
          <a
            href={`tel:${homeContent.contact.phone.replaceAll(" ", "")}`}
            className="mb-3 block text-[0.82rem] text-silver transition-colors hover:text-gold"
          >
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
  );
}
