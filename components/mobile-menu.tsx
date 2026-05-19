"use client";

import { useEffect, useState } from "react";
import { E47Logo } from "@/components/e47-logo";

type MobileMenuProps = {
  brandName: string;
  navigation: Array<{ label: string; href: string }>;
  appointment: { label: string; href: string };
};

export function MobileMenu({ brandName, navigation, appointment }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        className="inline-flex cursor-pointer border-0 bg-transparent text-[0.76rem] font-extrabold tracking-[0.2em] uppercase text-warm md:hidden"
        type="button"
        onClick={() => setOpen(true)}
      >
        Menu
      </button>

      <div className={`mobile-overlay${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="flex min-h-[82px] items-center justify-between border-b border-[rgb(214_179_108/22%)] px-[30px]">
          <a href="/" className="inline-flex text-warm" aria-label={`${brandName} home`} onClick={closeMenu}>
            <E47Logo width={78} height={48} />
          </a>
          <button
            type="button"
            onClick={closeMenu}
            className="cursor-pointer border-0 bg-transparent text-[0.78rem] font-extrabold tracking-[0.2em] uppercase text-warm"
          >
            Close
          </button>
        </div>

        <nav
          className="grid gap-[22px] px-[30px] pt-[clamp(80px,16vh,120px)]"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="text-[clamp(3.15rem,14vw,4.75rem)] font-light leading-none tracking-[0.04em] uppercase text-warm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="mx-[30px] mb-24 mt-auto flex min-h-[58px] items-center justify-center border border-gold text-[0.78rem] font-extrabold tracking-[0.18em] uppercase text-gold"
          href={appointment.href}
          onClick={closeMenu}
        >
          {appointment.label}
        </a>
      </div>
    </>
  );
}
