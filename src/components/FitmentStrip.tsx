"use client";

import { FormEvent, useState } from "react";
import { MAKES, YEARS } from "@/lib/constants";

export function FitmentStrip() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const parts = [year, make, model].filter(Boolean);
    const vehicle = parts.length ? parts.join(" ") : "my vehicle";
    const message = `Hi Otto Tuned — I'd like a tune consultation for my ${vehicle}.`;

    const nameEl = document.getElementById("contact-name") as HTMLInputElement | null;
    const vehicleEl = document.getElementById("contact-vehicle") as HTMLInputElement | null;
    const messageEl = document.getElementById("contact-message") as HTMLTextAreaElement | null;

    if (vehicleEl) vehicleEl.value = vehicle;
    if (messageEl) messageEl.value = message;
    if (nameEl) nameEl.focus();

    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  const selectClass =
    "h-12 w-full appearance-none rounded-xl border border-white/10 bg-black/50 px-4 text-sm text-white outline-none transition focus:border-crimson/70";

  return (
    <section
      id="fitment"
      className="relative z-20 -mt-8 px-5 sm:-mt-10 sm:px-8 lg:px-10"
      aria-labelledby="fitment-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-white/10 bg-surface-elevated/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-7">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
                Find your platform
              </p>
              <h2
                id="fitment-heading"
                className="font-display mt-1 text-xl font-semibold tracking-tight text-white sm:text-2xl"
              >
                Year · Make · Model
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-400">
              All makes welcome. Select your platform and we&apos;ll prefill your consultation
              request.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_auto]"
          >
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Year
              </span>
              <select
                className={selectClass}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                aria-label="Vehicle year"
              >
                <option value="">Select year</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Make
              </span>
              <select
                className={selectClass}
                value={make}
                onChange={(e) => setMake(e.target.value)}
                aria-label="Vehicle make"
              >
                <option value="">Select make</option>
                {MAKES.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                Model
              </span>
              <input
                type="text"
                className={selectClass}
                placeholder="e.g. M3, Evo X, Urus"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                aria-label="Vehicle model"
              />
            </label>

            <div className="flex items-end">
              <button
                type="submit"
                className="h-12 w-full rounded-xl bg-crimson px-6 text-sm font-semibold text-white transition hover:bg-crimson-soft lg:min-w-[160px]"
              >
                Check fitment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
