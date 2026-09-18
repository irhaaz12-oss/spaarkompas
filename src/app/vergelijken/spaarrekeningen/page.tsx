import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ComparisonCard } from "@/components/ComparisonCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { affiliates, type AffiliateProduct } from "@/lib/affiliates";

export const metadata: Metadata = {
  title: "Spaarrekeningen vergeleken — rentes & voorwaarden",
  description:
    "Vergelijk spaarrekeningen voor Nederlanders: typische kenmerken, plus- en minpunten, en directe CTA's naar bankpartners (affiliate).",
  alternates: { canonical: "/vergelijken/spaarrekeningen" },
};

const products: AffiliateProduct[] = [
  {
    id: "bank-a",
    name: "Bank A — Flexibel Sparen",
    highlight: "Illustratief: vrij opneembaar · focus op gebruiksgemak",
    pros: ["Snel openen via app", "Geen vaste looptijd", "Duidelijk dashboard"],
    cons: ["Rente is variabel", "Welkomstbonus vaak tijdelijk"],
    bestFor: "Je noodbuffer en korte-termijndoelen",
    getUrl: affiliates.bankA,
    ctaLabel: "Bekijk Bank A",
  },
  {
    id: "bank-b",
    name: "Bank B — RentePlus",
    highlight: "Illustratief: hogere rente bij voorwaarden",
    pros: ["Competitieve spaarrente (check actueel)", "Goede app-reviews", "EU-garantiestelsel"],
    cons: ["Voorwaarden kunnen saldovereisten hebben", "Nieuwe klant? Check overstapservice"],
    bestFor: "Spaarders die voorwaarden willen optimaliseren",
    getUrl: affiliates.bankB,
    ctaLabel: "Bekijk Bank B",
  },
  {
    id: "bank-c",
    name: "Bank C — DepositoStart",
    highlight: "Illustratief: vaste rente bij vastzetten",
    pros: ["Meer rentezekerheid bij deposito", "Geschikt voor langere horizon", "Heldere looptijden"],
    cons: ["Geld staat vast", "Boete of lagere rente bij vroeg opnemen"],
    bestFor: "Geld dat je 1–3 jaar kunt missen",
    getUrl: affiliates.bankC,
    ctaLabel: "Bekijk Bank C",
  },
];

export default function VergelijkSpaarrekeningenPage() {
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
          Spaarrekeningen vergeleken
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Onderstaande producten zijn <strong>illustratieve placeholders</strong> voor affiliate-
          partners. Vervang namen, rentes en URL&apos;s via{" "}
          <code className="rounded bg-slate-200 px-1 text-sm">.env</code> zodra je echte deals hebt.
          Rentes wijzigen; controleer altijd de aanbieder.
        </p>
      </header>

      <div className="mt-10 grid gap-6 lg:grid-cols-1">
        {products.map((p, i) => (
          <ComparisonCard key={p.id} product={p} featured={i === 1} />
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
        <strong>Geen advies.</strong> Dit is algemene informatie. SpaarKompas ontvangt mogelijk een
        commissie als je via een knop een product afsluit. Zie de{" "}
        <Link href="/affiliate-disclosure" className="underline">
          affiliate-vermelding
        </Link>
        .
      </div>

      <div className="mt-10">
        <AdSlot slot="comparison-savings" />
      </div>

      <p className="mt-8 text-sm text-slate-600">
        Meer context? Lees de gids{" "}
        <Link href="/gids/beste-spaarrekeningen" className="font-medium text-teal-800 underline">
          Beste spaarrekeningen vergeleken
        </Link>
        .
      </p>

      <div className="mt-10 max-w-3xl">
        <NewsletterForm />
      </div>
    </div>
  );
}
