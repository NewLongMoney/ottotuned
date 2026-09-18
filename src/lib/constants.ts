export const BRAND = {
  name: "Otto Tuned",
  founder: "Lëroy Otto",
  tagline: "Making your dreams a reality!",
  location: "Kenya",
  cityHint: "Nairobi & nationwide",
  phoneDisplay: "+254 782 217 212",
  phoneLocal: "0782 217 212",
  phoneTel: "tel:+254782217212",
  whatsapp: "https://wa.me/254782217212",
  instagram: "https://www.instagram.com/ottotuned_",
  instagramHandle: "@ottotuned_",
  partners: [
    {
      name: "Mamba Turbo",
      handle: "@mambaturbo",
      href: "https://www.instagram.com/mambaturbo",
      role: "Turbo partner",
    },
    {
      name: "Ottomotive Sim",
      handle: "@ottomotive_sim",
      href: "https://www.instagram.com/ottomotive_sim",
      role: "Simulator",
    },
  ],
} as const;

export const SERVICES = [
  {
    id: "euro",
    title: "Euro Tuning",
    blurb:
      "Precision calibration for European performance platforms — from daily drivers to exotic SUVs. Map strategy, boost control, and drivability that feels factory-intentional.",
    points: ["ECU / TCU strategy", "Boost & torque management", "Road & track validation"],
  },
  {
    id: "diesel",
    title: "Diesel",
    blurb:
      "Clean, strong diesel calibrations for Kenya’s workhorses and tourers — Hilux, Fortuner, Prado and light commercial platforms. Power where you need it, without sacrificing reliability or tow manners.",
    points: ["Fuel & smoke control", "Torque shaping", "Economy-aware maps"],
  },
  {
    id: "stock-block",
    title: "Stock Block",
    blurb:
      "Extract meaningful gains while respecting OEM margins. Ideal when you want more — without a full bottom-end build.",
    points: ["Safe power ceiling", "Sensor & knock strategy", "Street durability focus"],
  },
  {
    id: "calibration",
    title: "Full Calibration / Track Prep",
    blurb:
      "End-to-end race and track preparation: full calibration, session support, and data-led refinement for competitive weekends.",
    points: ["Session-ready maps", "Launch & traction", "Post-run iteration"],
  },
] as const;

export const BUILDS = [
  {
    id: "euro-suv",
    label: "Euro Performance SUV",
    category: "Featured build type",
    subtitle: "Urus-class Euro",
    description:
      "High-output Euro SUV calibration — composure under boost, sharp throttle response, and a chassis that still feels civilised on the open road.",
    beforeLabel: "Baseline street",
    afterLabel: "Otto calibrated",
    metrics: [
      { value: "+180", unit: "HP*", note: "illustrative delta" },
      { value: "+220", unit: "Nm*", note: "illustrative delta" },
    ],
  },
  {
    id: "evo-race",
    label: "Evo Race Platform",
    category: "Featured build type",
    subtitle: "Rally-bred JDM",
    description:
      "Track-focused Evo progression — boost discipline, launch strategy, and the kind of mid-corner confidence that wins championships.",
    beforeLabel: "Stage prep",
    afterLabel: "Race weekend",
    metrics: [
      { value: "MULTI", unit: "Titles", note: "racing champion" },
      { value: "AWD", unit: "Focus", note: "traction priority" },
    ],
  },
  {
    id: "bmw-classic",
    label: "BMW Classic",
    category: "Featured build type",
    subtitle: "Heritage sports saloon",
    description:
      "Classic BMW character preserved — modern calibration manners layered onto analogue chassis feel. Respect the icon; sharpen the drive.",
    beforeLabel: "OEM character",
    afterLabel: "Otto refined",
    metrics: [
      { value: "NA→T", unit: "Path*", note: "build-dependent" },
      { value: "OEM+", unit: "Feel", note: "drivability first" },
    ],
  },
] as const;

export const MAKES = [
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Volkswagen",
  "Porsche",
  "Lamborghini",
  "Mitsubishi",
  "Toyota",
  "Ford",
  "Nissan",
  "Subaru",
  "Other",
] as const;

export const YEARS = Array.from({ length: 30 }, (_, i) => String(2026 - i));
