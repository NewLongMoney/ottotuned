import { BRAND } from "./constants";

/** Instagram @ottotuned_ media paths + captions (see public/media/MANIFEST.md) */
export const MEDIA = {
  attribution: `Media from Instagram ${BRAND.instagramHandle}`,
  instagram: BRAND.instagram,
  handle: BRAND.instagramHandle,
  videos: {
    urus: {
      src: "/media/videos/urus-lamborghini.mp4",
      poster: "/media/stills/urus-hero.jpg",
      caption: "Lamborghini Urus / AURA — public reel @ottotuned_",
      post: "DYyoC4lMB38",
    },
    e30: {
      src: "/media/videos/old-barn-e30.mp4",
      poster: "/media/stills/e30-barn.jpg",
      caption: "E30 barn-find / workshop project — public reel @ottotuned_",
      post: "DJ1wFBnI2Z7",
    },
  },
  stills: {
    urusHero: "/media/stills/urus-hero.jpg",
    urusRear: "/media/stills/urus-rear.jpg",
    urusSide: "/media/stills/urus-side.jpg",
    e30Barn: "/media/stills/e30-barn.jpg",
    e30Detail: "/media/stills/e30-detail.jpg",
    e30Workshop: "/media/stills/e30-workshop.jpg",
    profile: "/media/stills/profile-shot.jpg",
  },
  posters: {
    oldBarn: "/media/old-barn-e30.jpg",
    poster02: "/media/video-poster-02.jpg",
    poster03: "/media/video-poster-03.jpg",
    highwayFog: "/media/highway-fog.jpg",
    sedanWheel: "/media/sedan-wheel.jpg",
    odometer: "/media/odometer.jpg",
    carWheel: "/media/car-wheel.jpg",
    auraRoad: "/media/aura-road.jpg",
  },
  profileGrid: "/media/profile-grid.png",
} as const;

export const GALLERY_ITEMS = [
  {
    src: MEDIA.stills.urusHero,
    alt: "Red Lamborghini Urus — hero still from @ottotuned_",
    caption: "Urus · AURA",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: MEDIA.stills.e30Barn,
    alt: "BMW E30 barn-find project — @ottotuned_",
    caption: "E30 barn find",
    span: "",
  },
  {
    src: MEDIA.stills.urusRear,
    alt: "Lamborghini Urus rear — @ottotuned_",
    caption: "Urus rear",
    span: "",
  },
  {
    src: MEDIA.stills.e30Detail,
    alt: "E30 detail — @ottotuned_",
    caption: "E30 detail",
    span: "",
  },
  {
    src: MEDIA.stills.profile,
    alt: "Otto Tuned profile still — @ottotuned_",
    caption: "Shop · profile",
    span: "",
  },
  {
    src: MEDIA.stills.urusSide,
    alt: "Urus side frame — @ottotuned_",
    caption: "Urus motion",
    span: "",
  },
  {
    src: MEDIA.posters.auraRoad,
    alt: "AURA road reel poster — @ottotuned_",
    caption: "AURA road",
    span: "",
  },
  {
    src: MEDIA.posters.sedanWheel,
    alt: "Sedan wheel reel poster — @ottotuned_",
    caption: "Wheel · street",
    span: "",
  },
] as const;

export const SERVICE_BACKGROUNDS: Record<string, string> = {
  euro: MEDIA.stills.urusHero,
  diesel: MEDIA.posters.highwayFog,
  "stock-block": MEDIA.posters.carWheel,
  calibration: MEDIA.stills.e30Detail,
};
