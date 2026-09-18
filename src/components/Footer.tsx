import { OttoLogo } from "./OttoLogo";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-10">
        <div>
          <OttoLogo className="h-8 text-white" />
          <p className="mt-4 max-w-xs text-sm text-neutral-500">{BRAND.tagline}</p>
          <p className="mt-2 text-sm text-neutral-600">
            {BRAND.founder} · Vehicle Pro-Tuner (All Makes)
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Navigate
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#builds" className="hover:text-white">
                  Builds
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>
                <a href={BRAND.phoneTel} className="hover:text-white">
                  {BRAND.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={BRAND.whatsapp} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={BRAND.instagram} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                  {BRAND.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Partners
            </p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              {BRAND.partners.map((p) => (
                <li key={p.handle}>
                  <a href={p.href} className="hover:text-white" target="_blank" rel="noopener noreferrer">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-[11px] text-neutral-600 sm:px-8">
        © {new Date().getFullYear()} Otto Tuned. Brand imagery attributed to Instagram{" "}
        {BRAND.instagramHandle}. Not affiliated with vehicle manufacturers beyond disclosed
        partners.
      </div>
    </footer>
  );
}
