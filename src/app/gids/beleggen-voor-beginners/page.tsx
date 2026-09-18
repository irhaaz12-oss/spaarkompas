import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Beleggen voor beginners: rustig starten",
  description:
    "Leer beleggen als beginner in Nederland: risico, spreiding, ETF's, kosten en een realistisch stappenplan zonder hype.",
  alternates: { canonical: "/gids/beleggen-voor-beginners" },
};

export default function BeleggenBeginnersPage() {
  return (
    <ArticleLayout
      category="Beleggen"
      title="Beleggen voor beginners"
      description="Een nuchtere startgids: wat beleggen is, welke risico's er zijn, en hoe je in kleine stappen begint — zonder get-rich-quick-verhalen."
      updated="september 2026"
    >
      <p>
        Beleggen betekent dat je geld inzet in bijvoorbeeld aandelen, obligaties of fondsen, met
        als doel vermogen op te bouwen op de <strong>lange termijn</strong>. Het is géén garantie
        op winst: koersen schommelen, en je kunt (een deel van) je inleg verliezen.
      </p>

      <h2>Eerst dit: buffer en schulden</h2>
      <p>
        Voordat je belegt, is het verstandig om een noodbuffer te hebben en dure schulden (zoals
        creditcards met hoge rente) aan te pakken. Beleg alleen met geld dat je op korte termijn
        niet nodig hebt.
      </p>

      <h2>Kernprincipes voor beginners</h2>
      <ul>
        <li>
          <strong>Spreiding</strong> — niet alles in één aandeel of sector.
        </li>
        <li>
          <strong>Kosten</strong> — lage kosten maken op lange termijn een groot verschil.
        </li>
        <li>
          <strong>Horizon</strong> — hoe langer je horizon, hoe beter je schommelingen kunt
          opvangen.
        </li>
        <li>
          <strong>Gedrag</strong> — paniekverkopen bij dips is een veelgemaakte fout.
        </li>
      </ul>

      <h2>ETF&apos;s en indexbeleggen</h2>
      <p>
        Veel beginners starten met <strong>breed gespreide ETF&apos;s</strong> (exchange-traded
        funds) die een wereldwijde index volgen. Dat is geen &quot;veilige&quot; belegging — de
        markt kan dalen — maar wel een eenvoudige manier om spreiding te krijgen zonder zelf
        tientallen aandelen te selecteren.
      </p>

      <blockquote>
        Let op: dit is géén beleggingsadvies. Jouw situatie (leeftijd, inkomen, risicotolerantie)
        is uniek. Twijfel je? Overweeg een onafhankelijk adviseur.
      </blockquote>

      <h2>Stappenplan</h2>
      <ol>
        <li>Stel een doel en tijdshorizon vast.</li>
        <li>Kies een betrouwbare broker of bank met heldere kosten.</li>
        <li>Begin klein; leer hoe orders, dividenden en belastingen werken.</li>
        <li>Automatiseer periodiek inleggen als dat bij je past (dollar-cost averaging).</li>
        <li>Herzie jaarlijks — niet dagelijks — je plan.</li>
      </ol>

      <h2>Vergelijk platforms</h2>
      <p>
        Zie onze{" "}
        <Link href="/vergelijken/beleggingsapps">vergelijking van beleggingsapps</Link> voor een
        overzicht van typische kenmerken. Controleer altijd actuele tarieven bij de aanbieder.
      </p>
    </ArticleLayout>
  );
}
