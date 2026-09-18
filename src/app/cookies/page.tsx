import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookieverklaring",
  description: `Uitleg over cookies op ${siteConfig.name} en hoe je ze kunt beheren.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Cookieverklaring</h1>
      <p className="mt-2 text-sm text-slate-500">Laatst bijgewerkt: september 2026</p>

      <div className="prose-article mt-8 space-y-4 text-slate-700">
        <p>
          Cookies zijn kleine tekstbestanden die je browser kan opslaan. {siteConfig.name} gebruikt
          in de basisversie <strong>geen tracking-cookies</strong> voor advertenties. Dat verandert
          zodra je Analytics of AdSense activeert.
        </p>

        <h2>Soorten cookies</h2>
        <ul>
          <li>
            <strong>Functioneel</strong> — nodig voor basiswerking (indien van toepassing).
          </li>
          <li>
            <strong>Analytisch</strong> — inzicht in bezoek (alleen na jouw implementatie én
            toestemming waar vereist).
          </li>
          <li>
            <strong>Marketing / affiliate</strong> — bij klikken op affiliate-links kunnen partners
            cookies plaatsen.
          </li>
        </ul>

        <h2>AdSense &amp; toestemming</h2>
        <p>
          Voordat je Google AdSense live zet in de EU/EER, implementeer een cookiebanner /
          consent-managementplatform (CMP) dat toestemming registreert. De AdSlot-componenten in
          deze codebase zijn placeholders met TODO-instructies.
        </p>

        <h2>Cookies beheren</h2>
        <p>
          Je kunt cookies verwijderen of blokkeren via je browserinstellingen. Sommige
          functionaliteit kan dan beperkter werken.
        </p>

        <p>
          Meer over gegevensverwerking:{" "}
          <Link href="/privacy">privacyverklaring</Link>.
        </p>
      </div>
    </div>
  );
}
