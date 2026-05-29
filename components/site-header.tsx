"use client";

import { usePathname } from "next/navigation";
import { E47Logo } from "@/components/e47-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { homeContent } from "@/data/home-content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="absolute inset-0 bg-[rgb(13_28_29/58%)] backdrop-blur-[10px]" />
      <div className="site-container relative flex min-h-[76px] items-center justify-between text-warm">
        <a className="inline-flex text-warm" href="/" aria-label={`${homeContent.brand.name} home`}>
          <E47Logo width={58} height={36} />
        </a>

        <nav
          className="hidden items-center gap-[34px] text-[0.875rem] font-medium uppercase tracking-[0.18em] md:flex"
          aria-label="Primary navigation"
        >
          {homeContent.navigation.map(item => (
            <a
              key={item.href}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-gold"
                  : "transition-colors duration-[180ms] hover:text-gold"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn hidden border-[0.5px] border-gold font-normal text-gold transition-opacity hover:opacity-70 md:inline-flex"
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
  );
}
