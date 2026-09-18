import { BUILDS } from "@/lib/constants";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

const THEME_MAP = {
  "euro-suv": "euro",
  "evo-race": "evo",
  "bmw-classic": "classic",
} as const;

export function Builds() {
  return (
    <section
      id="builds"
      className="scroll-mt-24 border-t border-white/10 bg-surface py-24 sm:py-32"
      aria-labelledby="builds-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
                Builds
              </p>
            </div>
            <h2
              id="builds-heading"
              className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Featured build types
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Inspired by Otto Tuned Instagram highlights — Euro, race Evo, and classic BMW
              platforms. Labels describe build types, not invented client names. Drag each
              progression slider to compare stages.
            </p>
          </div>
          <p className="text-xs text-neutral-600 lg:max-w-[220px] lg:text-right">
            *Metric deltas are illustrative of calibration outcomes, not published dyno sheets for
            a named vehicle.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {BUILDS.map((build, index) => (
            <article
              key={build.id}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <BeforeAfterSlider
                title={build.label}
                beforeLabel={build.beforeLabel}
                afterLabel={build.afterLabel}
                theme={THEME_MAP[build.id as keyof typeof THEME_MAP]}
              />

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {build.category} · {build.subtitle}
                </p>
                <h3 className="font-display mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {build.label}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">{build.description}</p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {build.metrics.map((m) => (
                    <div
                      key={m.unit}
                      className="rounded-xl border border-white/10 bg-black/40 px-4 py-4"
                    >
                      <p className="font-display text-3xl font-bold tracking-tight text-white">
                        {m.value}
                        <span className="ml-1 text-base font-medium text-crimson">{m.unit}</span>
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-wider text-neutral-500">
                        {m.note}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-crimson"
                >
                  Discuss this platform
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
