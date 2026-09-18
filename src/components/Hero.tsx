"use client";

import { useEffect, useRef } from "react";
import { BRAND } from "@/lib/constants";
import { MEDIA } from "@/lib/media";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      v.pause();
      return;
    }
    v.muted = true;
    const play = v.play();
    if (play && typeof play.catch === "function") play.catch(() => {});
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-black pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background VIDEO — Urus reel */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55 saturate-[0.9] contrast-110"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={MEDIA.videos.urus.poster}
          aria-hidden
        >
          <source src={MEDIA.videos.urus.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/40" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="absolute left-0 top-16 h-[calc(100%-4rem)] w-[3px] bg-gradient-to-b from-crimson via-crimson/60 to-transparent sm:w-1" />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-end px-5 pb-28 pt-24 sm:px-8 sm:pb-32 lg:justify-center lg:px-10 lg:pb-36 lg:pt-20">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson sm:text-xs">
            Multiple racing champion · All makes · {BRAND.location}
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up-delay-1 font-display mt-5 text-[clamp(2.75rem,8vw,5.75rem)] font-bold leading-[0.95] tracking-[-0.03em] text-white"
          >
            From street
            <br />
            to race weekend.
            <br />
            <span className="text-crimson">One calibration.</span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            <span className="font-medium text-white">{BRAND.founder}</span> transforms platforms
            with champion-bred calibration — Euro exotics, diesel workhorses, stock-block street
            builds, and full track prep. {BRAND.tagline}
          </p>

          <div className="animate-fade-up-delay-2 mt-8 grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-4">
              <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                +HP*
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">
                Illustrative gains
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-4">
              <p className="font-display text-2xl font-bold tracking-tight text-crimson sm:text-3xl">
                Champ
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">
                Racing titles
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-3 backdrop-blur-sm sm:px-4 sm:py-4">
              <p className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                All
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wider text-neutral-500">Makes</p>
            </div>
          </div>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-crimson px-8 text-[15px] font-semibold text-white shadow-[0_0_40px_-8px_rgba(225,6,0,0.65)] transition hover:bg-crimson-soft"
            >
              Book a tune
            </a>
            <a
              href="#gallery"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-8 text-[15px] font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]"
            >
              View gallery
            </a>
          </div>

          <p className="mt-6 text-[11px] text-neutral-500">
            *Power figures shown across the site are illustrative of typical calibration outcomes —
            not a specific client dyno claim. Hero video ©{" "}
            <a
              href={BRAND.instagram}
              className="underline decoration-white/20 hover:text-neutral-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {BRAND.instagramHandle}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
