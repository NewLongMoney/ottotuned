"use client";

import { useRef, useState } from "react";
import { MEDIA } from "@/lib/media";

type Reel = (typeof MEDIA.videos)[keyof typeof MEDIA.videos];

function ReelCard({ reel, title }: { reel: Reel; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = true;
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-surface">
      <div className="relative aspect-[9/16] max-h-[560px] w-full bg-black sm:aspect-[3/4] lg:max-h-[640px]">
        <video
          ref={ref}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
          poster={reel.poster}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={reel.src} type="video/mp4" />
        </video>
        <button
          type="button"
          onClick={toggle}
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/35"
          aria-label={playing ? `Pause ${title}` : `Play ${title}`}
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white backdrop-blur-sm transition ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            {playing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </span>
        </button>
      </div>
      <div className="border-t border-white/10 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-crimson">
          Featured reel
        </p>
        <h3 className="font-display mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">{reel.caption}</p>
        <p className="mt-3 text-[11px] text-neutral-600">
          Post {reel.post} · {MEDIA.handle}
        </p>
      </div>
    </article>
  );
}

export function FeaturedReels() {
  return (
    <section
      id="reels"
      className="scroll-mt-24 border-t border-white/10 bg-surface py-24 sm:py-32"
      aria-labelledby="reels-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-crimson" aria-hidden />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
              On camera
            </p>
          </div>
          <h2
            id="reels-heading"
            className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Featured reels
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            Two public reels from {MEDIA.handle} — tap to play (muted). Full sound lives on
            Instagram.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ReelCard reel={MEDIA.videos.e30} title="E30 barn-find project" />
          <ReelCard reel={MEDIA.videos.urus} title="Urus · AURA" />
        </div>

        <p className="mt-6 text-center text-[11px] text-neutral-600">{MEDIA.attribution}</p>
      </div>
    </section>
  );
}
