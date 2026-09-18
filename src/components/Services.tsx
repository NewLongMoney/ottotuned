import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-crimson" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
              Services
            </p>
          </div>
          <h2
            id="services-heading"
            className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Engineering-led tuning.
            <br />
            <span className="text-neutral-500">Every platform.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Clear scopes. Credible process. Modular cards for the work that matters — inspired by
            how elite Euro tuners present capability without the noise.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-7 transition hover:border-crimson/40 hover:bg-surface-elevated sm:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-[2px] bg-crimson opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <p className="font-display text-sm font-medium text-neutral-600">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                  Otto Tuned
                </span>
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{service.blurb}</p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm text-neutral-300">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-crimson" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
