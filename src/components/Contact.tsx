"use client";

import { FormEvent, useState } from "react";
import { BRAND } from "@/lib/constants";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const vehicle = String(data.get("vehicle") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nVehicle: ${vehicle}\n\n${message}\n\n— Sent from Otto Tuned site`
    );

    // Open a prefilled WhatsApp conversation and confirm in-UI.
    window.location.href = `https://wa.me/254782217212?text=${text}`;
    setStatus("sent");
    form.reset();
  }

  const field =
    "mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition focus:border-crimson/60";

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
                Contact
              </p>
            </div>
            <h2
              id="contact-heading"
              className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Book a consultation
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400">
              Tell us the platform and the goal. Prefer WhatsApp or a direct call? Same number —
              we answer as Otto Tuned.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={BRAND.phoneTel}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface px-5 py-4 transition hover:border-crimson/40"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500">Phone</p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    {BRAND.phoneDisplay}
                  </p>
                </div>
                <span className="text-crimson" aria-hidden>
                  Call
                </span>
              </a>

              <a
                href={BRAND.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-crimson/30 bg-crimson/10 px-5 py-4 transition hover:bg-crimson/20"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-crimson/80">WhatsApp</p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    Message on WhatsApp
                  </p>
                </div>
                <span className="text-white" aria-hidden>
                  →
                </span>
              </a>

              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface px-5 py-4 transition hover:border-white/25"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-500">Instagram</p>
                  <p className="mt-1 font-display text-xl font-semibold text-white">
                    {BRAND.instagramHandle}
                  </p>
                </div>
                <span className="text-neutral-400" aria-hidden>
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-surface p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="contact-name" className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className={field}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                  Phone
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  className={field}
                  placeholder="+254 7…"
                />
              </div>
              <div>
                <label htmlFor="contact-vehicle" className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                  Vehicle
                </label>
                <input
                  id="contact-vehicle"
                  name="vehicle"
                  type="text"
                  required
                  className={field}
                  placeholder="Year Make Model"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-[11px] font-medium uppercase tracking-wider text-neutral-500">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className={`${field} resize-y`}
                  placeholder="Goals, mods, timeline…"
                />
              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center rounded-xl bg-crimson text-sm font-semibold text-white transition hover:bg-crimson-soft"
              >
                Send enquiry
              </button>

              {status === "sent" && (
                <p className="text-center text-sm text-neutral-400" role="status">
                  Opening WhatsApp… Prefer chat?{" "}
                  <a href={BRAND.whatsapp} className="text-crimson underline">
                    WhatsApp us
                  </a>
                  .
                </p>
              )}

              <p className="text-center text-[11px] text-neutral-600">
                Form opens WhatsApp with your enquiry. For fastest reply use WhatsApp or call.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
