import { BRAND } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
                About
              </p>
            </div>
            <h2
              id="about-heading"
              className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {BRAND.founder}
            </h2>
            <p className="mt-2 text-lg text-neutral-500">
              Vehicle Pro-Tuner · Kenya tarmac champion · {BRAND.location}
            </p>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-neutral-300">
              <p>
                Otto Tuned is built around one conviction: the map should feel like the car always
                wanted to drive that way. Based in {BRAND.location}, {BRAND.founder} brings
                championship tarmac craft — including 4WD tarmac titles and Kenya Motorsport Excellence
                recognition — into every calibration. Euro SUV that still behaves on the highway,
                diesel that hauls clean on Kenyan roads, or an Evo that has to win on Sunday.
              </p>
              <p>
                All makes. No theatre. Partnered with{" "}
                <a
                  href={BRAND.partners[0].href}
                  className="text-white underline decoration-crimson/50 underline-offset-4 hover:decoration-crimson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mamba Turbo
                </a>{" "}
                and backed by simulator craft at{" "}
                <a
                  href={BRAND.partners[1].href}
                  className="text-white underline decoration-crimson/50 underline-offset-4 hover:decoration-crimson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ottomotive Sim
                </a>
                .
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-crimson pl-6">
              <p className="font-display text-2xl font-medium tracking-tight text-white sm:text-3xl">
                &ldquo;{BRAND.tagline}&rdquo;
              </p>
            </blockquote>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                title: "Championship DNA",
                body: "Kenya tarmac championships sharpen judgment. That same discipline lands in street and track calibrations.",
              },
              {
                title: "All-makes remit",
                body: "From classic BMW to modern Euro performance — platform-agnostic craft, not a single-OEM shop.",
              },
              {
                title: "Partner ecosystem",
                body: "Mamba Turbo hardware partnership and Ottomotive Sim for development depth — disclosed, not invented.",
              },
              {
                title: "Direct access",
                body: `${BRAND.phoneDisplay} · WhatsApp · Instagram ${BRAND.instagramHandle}`,
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-white/20"
              >
                <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
