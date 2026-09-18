import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate-vermelding",
  description:
    "Transparantie over affiliate-links op SpaarKompas: hoe commissies werken en wat dat voor jou betekent.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Affiliate-vermelding</h1>
      <p className="mt-2 text-sm text-slate-500">Laatst bijgewerkt: september 2026</p>

      <div className="prose-article mt-8 space-y-4 text-slate-700">
        <p>
          {siteConfig.name} bevat <strong>affiliate-links</strong>. Dat betekent: als je via een
          link op onze site een product of dienst afsluit, kunnen wij een commissie ontvangen van
          de aanbieder.
        </p>

        <h2>Wat betekent dat voor jou?</h2>
        <ul>
          <li>Jij betaalt doorgaans niets extra door onze link.</li>
          <li>De commissie helpt ons de site en gidsen te onderhouden.</li>
          <li>
            Links gebruiken <code>rel=&quot;sponsored noopener&quot;</code> waar van toepassing.
          </li>
        </ul>

        <h2>Onze belofte</h2>
        <p>
          We streven naar eerlijke vergelijkingen met voor- én nadelen. Affiliate-inkomsten
          beïnvloeden niet of we risico&apos;s of beperkingen noemen. We fabriceren geen
          verdiensten of nep-testimonials.
        </p>

        <h2>Geen advies</h2>
        <p>
          Informatie op deze site is algemeen van aard en geen persoonlijk financieel advies.
          Controleer altijd actuele voorwaarden bij de aanbieder.
        </p>

        <p>
          Vragen?{" "}
          <Link href="/contact">Neem contact op</Link>.
        </p>
      </div>
    </div>
  );
}
