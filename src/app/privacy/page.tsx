import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: `Privacyverklaring van ${siteConfig.name}: welke gegevens we verwerken en waarom.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Privacyverklaring</h1>
      <p className="mt-2 text-sm text-slate-500">Laatst bijgewerkt: september 2026</p>

      <div className="prose-article mt-8 space-y-4 text-slate-700">
        <p>
          {siteConfig.name} respecteert je privacy. Deze verklaring beschrijft welke
          persoonsgegevens we kunnen verwerken wanneer je onze website gebruikt.
        </p>

        <h2>Wie zijn wij?</h2>
        <p>
          Contact:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Pas dit adres aan naar
          jouw echte contactgegevens voordat je live gaat.
        </p>

        <h2>Welke gegevens?</h2>
        <ul>
          <li>
            <strong>Nieuwsbrief:</strong> e-mailadres en tijdstip van aanmelding (opgeslagen in{" "}
            <code>/data/subscribers.json</code> op de server).
          </li>
          <li>
            <strong>Technische logs:</strong> IP-adres en browsergegevens kunnen in serverlogs
            verschijnen (hostingprovider).
          </li>
          <li>
            <strong>Cookies &amp; analytics:</strong> zie onze{" "}
            <Link href="/cookies">cookieverklaring</Link>. Bij AdSense/analytics pas je dit aan.
          </li>
        </ul>

        <h2>Doelen en rechtsgrond</h2>
        <p>
          We verwerken gegevens om de site te leveren, de nieuwsbrief te sturen (toestemming) en de
          veiligheid te waarborgen (gerechtvaardigd belang).
        </p>

        <h2>Bewaartermijn</h2>
        <p>
          Nieuwsbriefgegevens bewaren we tot je je uitschrijft of verwijdert. Logs volgens beleid
          van de host.
        </p>

        <h2>Jouw rechten (AVG)</h2>
        <p>
          Je hebt recht op inzage, rectificatie, verwijdering, beperking, dataportabiliteit en
          bezwaar. Mail ons via {siteConfig.email}. Je mag ook een klacht indienen bij de Autoriteit
          Persoonsgegevens.
        </p>

        <h2>Delen met derden</h2>
        <p>
          Affiliate-partners ontvangen géén je e-mail via onze nieuwsbrief. Bij klikken op een
          affiliate-link kan de partner cookies/tracking gebruiken volgens hun eigen policy.
        </p>
      </div>
    </div>
  );
}
