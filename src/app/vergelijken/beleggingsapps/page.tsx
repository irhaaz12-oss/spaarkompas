import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ComparisonCard } from "@/components/ComparisonCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { affiliates, type AffiliateProduct } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Beleggingsapps vergeleken voor beginners",
  description:
    "Vergelijk beleggingsapps en brokers voor beginners in Nederland: kosten, gebruiksgemak en risico's — met affiliate-CTA's.",
  alternates: { canonical: "/vergelijken/beleggingsapps" },
};

const products: AffiliateProduct[] = [
  {
    id: "broker-a",
    name: "Broker A — Beginnersplatform",
    highlight: "Illustratief: lage instap, focus op ETF's",
    pros: ["Eenvoudige interface", "Fracties van ETF's vaak mogelijk", "Educatieve content"],
    cons: ["Beleggen blijft risicovol", "Let op spreads en servicekosten"],
    bestFor: "Wie rustig wil starten met kleine bedragen",
    getUrl: affiliates.brokerA,
    ctaLabel: "Bekijk Broker A",
  },
  {
    id: "broker-b",
    name: "Broker B — Lage kosten",
    highlight: "Illustratief: scherpe tarieven voor actieve spaar-beleggers",
    pros: ["Competitieve orderkosten", "Breed aanbod", "Duidelijke kostenpagina"],
    cons: ["Steilere leercurve", "Meer keuze = meer beslissingsstress"],
    bestFor: "Wie zelf orders wil plaatsen en kosten wil drukken",
    getUrl: affiliates.brokerB,
    ctaLabel: "Bekijk Broker B",
  },
];

export default function VergelijkBeleggingsappsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-800">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Vergelijken</span>
      </nav>

      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">Vergelijking</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Beleggingsapps vergeleken
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Placeholders voor affiliate-partners. Beleggen brengt risico&apos;s mee: je kunt je inleg
          (deels) verliezen. Dit is geen persoonlijk advies. Configureer URL&apos;s via{" "}
          <code className="rounded bg-slate-200 px-1 text-sm">NEXT_PUBLIC_AFFILIATE_BROKER_*</code>.
        </p>
      </header>

      <div className="mt-10 grid gap-6">
        {products.map((p, i) => (
          <ComparisonCard key={p.id} product={p} featured={i === 0} />
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Risicowaarschuwing:</strong> rendementen uit het verleden bieden geen garantie voor
        de toekomst. Lees onze{" "}
        <Link href="/gids/beleggen-voor-beginners" className="underline">
          beginnersgids beleggen
        </Link>{" "}
        voordat je een account opent.
      </div>

      <div className="mt-10">
        <AdSlot slot="comparison-brokers" />
      </div>

      <div className="mt-10 max-w-3xl">
        <NewsletterForm />
      </div>
    </div>
  );
}
