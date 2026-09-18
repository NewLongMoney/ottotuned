"use client";

import { useEffect, useState } from "react";
import { OttoLogo } from "./OttoLogo";
import { BRAND } from "@/lib/constants";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#builds", label: "Builds" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8 lg:px-10">
        <a href="#top" className="text-white" aria-label="Otto Tuned home">
          <OttoLogo className="h-7 sm:h-8" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium tracking-wide text-neutral-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BRAND.phoneTel}
            className="hidden rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[13px] font-semibold tracking-wide text-white transition hover:border-crimson/60 hover:bg-crimson/10 sm:inline-flex"
          >
            Call {BRAND.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-crimson px-4 py-2 text-[13px] font-semibold tracking-wide text-white transition hover:bg-crimson-soft"
          >
            Book a tune
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.75" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-black/95 px-5 py-4 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-neutral-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={BRAND.phoneTel}
              className="mt-2 rounded-lg border border-white/10 px-3 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Call {BRAND.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
