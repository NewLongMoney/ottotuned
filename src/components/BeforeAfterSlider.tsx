"use client";

import { useCallback, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

type BeforeAfterSliderProps = {
  beforeLabel: string;
  afterLabel: string;
  title: string;
  /** Abstract visual — no fake stock cars claiming to be Otto builds */
  theme: "euro" | "evo" | "classic";
};

const THEMES = {
  euro: {
    before: "from-neutral-800 via-neutral-900 to-black",
    after: "from-[#3a0a0a] via-[#1a0505] to-black",
    beforeAccent: "bg-neutral-600",
    afterAccent: "bg-crimson",
  },
  evo: {
    before: "from-neutral-700 via-neutral-900 to-black",
    after: "from-[#4a0000] via-[#120000] to-black",
    beforeAccent: "bg-neutral-500",
    afterAccent: "bg-crimson",
  },
  classic: {
    before: "from-stone-700 via-neutral-900 to-black",
    after: "from-stone-800 via-[#1a0808] to-black",
    beforeAccent: "bg-stone-500",
    afterAccent: "bg-crimson",
  },
} as const;

export function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  title,
  theme,
}: BeforeAfterSliderProps) {
  const [pos, setPos] = useState(55);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const colors = THEMES[theme];

  const updateFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(92, Math.max(8, next)));
  }, []);

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  }

  function onPointerUp() {
    dragging.current = false;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
      <div
        ref={trackRef}
        className="relative aspect-[16/10] cursor-ew-resize touch-none select-none sm:aspect-[16/9]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="slider"
        aria-valuemin={8}
        aria-valuemax={92}
        aria-valuenow={Math.round(pos)}
        aria-label={`${title} build progression`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(8, p - 3));
          if (e.key === "ArrowRight") setPos((p) => Math.min(92, p + 3));
        }}
      >
        {/* After layer (full) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.after}`}>
          <div className="absolute inset-0 bg-grid opacity-40" />
          <AbstractVehicle accent={colors.afterAccent} intensity="after" />
          <span className="absolute right-4 top-4 rounded-full border border-crimson/40 bg-crimson/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>

        {/* Before layer (clipped) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.before}`}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <AbstractVehicle accent={colors.beforeAccent} intensity="before" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-200 backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>

        {/* Divider */}
        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_12px_rgba(225,6,0,0.5)]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/80 text-white shadow-lg backdrop-blur-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M8 12H4M4 12L7 9M4 12L7 15M16 12H20M20 12L17 9M20 12L17 15"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-4 py-3 text-center text-[11px] text-neutral-500">
        Drag to compare progression · Abstract visualisation — not a photographed client vehicle
      </p>
    </div>
  );
}

function AbstractVehicle({
  accent,
  intensity,
}: {
  accent: string;
  intensity: "before" | "after";
}) {
  const glow = intensity === "after";
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative w-full max-w-md">
        {/* Silhouette suggestion — geometric, premium, not a fake photo */}
        <div
          className={`mx-auto h-16 w-[85%] rounded-[40%] ${accent} opacity-30 blur-xl ${
            glow ? "animate-pulse-glow" : ""
          }`}
        />
        <div className="relative -mt-10 space-y-2">
          <div className="mx-auto h-3 w-[75%] rounded-full bg-white/10" />
          <div className="mx-auto flex h-14 w-full items-end justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] px-6 pb-3">
            <div className={`h-6 w-6 rounded-full ${accent} opacity-80`} />
            <div className="h-1 w-24 rounded-full bg-white/20" />
            <div className={`h-6 w-6 rounded-full ${accent} opacity-80`} />
          </div>
          <div className="mx-auto h-2 w-1/2 rounded-full bg-white/5" />
        </div>
        {glow && (
          <div className="pointer-events-none absolute -inset-4 rounded-3xl border border-crimson/20" />
        )}
      </div>
    </div>
  );
}
