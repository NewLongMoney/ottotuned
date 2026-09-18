import Image from "next/image";
import { GALLERY_ITEMS, MEDIA } from "@/lib/media";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-white/10 bg-black py-24 sm:py-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-crimson" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-crimson">
                Gallery
              </p>
            </div>
            <h2
              id="gallery-heading"
              className="font-display mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              From the feed.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
              Real stills pulled from public {MEDIA.handle} reels and posts — Urus AURA energy,
              E30 barn-find craft, and street atmosphere.
            </p>
          </div>
          <a
            href={MEDIA.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-full border border-white/15 px-5 text-sm font-semibold text-white transition hover:border-crimson/50 hover:bg-crimson/10 lg:self-auto"
          >
            Follow {MEDIA.handle}
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:auto-rows-[180px]">
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface ${
                i === 0
                  ? "col-span-2 aspect-[4/3] sm:aspect-auto lg:col-span-2 lg:row-span-2 lg:aspect-auto lg:h-full"
                  : "aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:h-full"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-110"
                sizes={
                  i === 0
                    ? "(max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                }
                priority={i < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-95" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                <span className="text-xs font-semibold tracking-wide text-white sm:text-sm">
                  {item.caption}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                  {MEDIA.handle}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] text-neutral-600">
          {MEDIA.attribution} · https://www.instagram.com/ottotuned_/
        </p>
      </div>
    </section>
  );
}
