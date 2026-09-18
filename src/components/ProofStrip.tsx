import { BRAND } from "@/lib/constants";

const ITEMS = [
  { label: "Kenya tarmac champ", detail: "4WD titles · Excellence awards" },
  { label: "All makes", detail: "Euro · Diesel · JDM" },
  { label: "Mamba Turbo", detail: "Official partner" },
  { label: "Ottomotive Sim", detail: "Simulator program" },
] as const;

export function ProofStrip() {
  return (
    <section
      className="border-y border-white/10 bg-surface"
      aria-label="Credentials and partners"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-9"
          >
            <p className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
              {item.label}
            </p>
            <p className="mt-1 text-sm text-neutral-500">{item.detail}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center sm:px-8">
        <p className="text-xs text-neutral-500">
          Champion-bred calibration in Kenya by{" "}
          <span className="text-neutral-300">{BRAND.founder}</span>
          {" · "}
          Partnered with Mamba Turbo — no invented OEM sponsorships
        </p>
      </div>
    </section>
  );
}
