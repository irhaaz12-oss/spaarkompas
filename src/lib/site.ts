export const siteConfig = {
  name: "SpaarKompas",
  tagline: "Heldere gidsen voor je geldzaken",
  description:
    "SpaarKompas helpt beginners in Nederland met spaarrekeningen, beleggen, budgetteren en handige financiële tools. Eerlijk, praktisch en zonder loze beloftes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://spaarkompas.nl",
  locale: "nl-NL",
  email: "hello@spaarkompas.nl",
  social: {
    twitter: "@spaarkompas",
  },
} as const;

export const navLinks = [
  { href: "/gids/beste-spaarrekeningen", label: "Sparen" },
  { href: "/gids/beleggen-voor-beginners", label: "Beleggen" },
  { href: "/gids/budgetteren", label: "Budgetteren" },
  { href: "/vergelijken/spaarrekeningen", label: "Vergelijken" },
  { href: "/gids/tools-apps", label: "Tools" },
] as const;

export const guideLinks = [
  {
    href: "/gids/beste-spaarrekeningen",
    title: "Beste spaarrekeningen vergeleken",
    description: "Rente, voorwaarden en waar je op moet letten bij spaarrekeningen in Nederland.",
    category: "Sparen",
  },
  {
    href: "/gids/beleggen-voor-beginners",
    title: "Beleggen voor beginners",
    description: "Hoe je rustig start met beleggen: risico, spreiding en lange termijn.",
    category: "Beleggen",
  },
  {
    href: "/gids/budgetteren",
    title: "Budgetteren: zo begin je",
    description: "Een eenvoudig stappenplan om overzicht te krijgen over inkomsten en uitgaven.",
    category: "Budget",
  },
  {
    href: "/gids/passief-inkomen-affiliate",
    title: "Passief inkomen met affiliate content",
    description: "Hoe affiliate content écht werkt — inclusief realistische verwachtingen.",
    category: "Inkomen",
  },
  {
    href: "/gids/tools-apps",
    title: "Tools & apps voor geldbesparing",
    description: "Praktische apps die sparen, budgetteren en beleggen makkelijker maken.",
    category: "Tools",
  },
] as const;
