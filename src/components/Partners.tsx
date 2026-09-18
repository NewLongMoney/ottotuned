import { BRAND } from "@/lib/constants";

export function Partners() {
  return (
    <section
      id="partners"
      className="scroll-mt-24 border-t border-white/10 bg-surface py-24 sm:py-28"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-crimson" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
            Partners
          </p>
        </div>
        <h2
          id="partners-heading"
          className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          The ecosystem behind the maps
        </h2>
        <p className="mt-4 max-w-xl text-neutral-400">
          Real relationships only — Mamba Turbo and Ottomotive Sim. No invented OEM sponsorships.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {BRAND.partners.map((partner) => (
            <a
              key={partner.handle}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/40 p-7 transition hover:border-crimson/50 hover:bg-black/60"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {partner.role}
                </p>
                <p className="font-display mt-2 text-2xl font-semibold text-white group-hover:text-crimson">
                  {partner.name}
                </p>
                <p className="mt-1 text-sm text-neutral-400">{partner.handle}</p>
              </div>
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-neutral-400 transition group-hover:border-crimson/50 group-hover:text-crimson"
                aria-hidden
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
