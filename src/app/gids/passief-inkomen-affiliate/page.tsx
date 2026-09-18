import type { Metadata } from "next";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Hoe passief inkomen met affiliate content écht werkt",
  description:
    "Eerlijke uitleg over affiliate marketing en content: wat het is, hoeveel werk het kost, realistische inkomensverwachtingen en wat SpaarKompas wél en niet belooft.",
  alternates: { canonical: "/gids/passief-inkomen-affiliate" },
};

export default function PassiefInkomenAffiliatePage() {
  return (
    <ArticleLayout
      category="Inkomen"
      title="Hoe passief inkomen met affiliate content écht werkt"
      description="Geen wonderverhalen. Wel een eerlijke uitleg over affiliate content, werk dat vooraf komt, en realistische verwachtingen."
      updated="september 2026"
    >
      <p>
        &quot;Passief inkomen&quot; klinkt aantrekkelijk: geld verdienen terwijl je slaapt. In de
        praktijk is affiliate content <strong>zelden volledig passief</strong>. Je bouwt eerst
        maanden (soms jaren) aan artikelen, SEO, e-mail en vertrouwen op — daarna kan een deel van
        de inkomsten doorlopen met minder dagelijks werk.
      </p>

      <h2>Wat is affiliate content?</h2>
      <p>
        Je schrijft nuttige gidsen of vergelijkingen en plaatst links naar producten of diensten.
        Als iemand via jouw link een aankoop of aanmelding doet, kun je een commissie ontvangen.
        De lezer betaalt meestal niets extra; de aanbieder betaalt de commissie.
      </p>

      <h2>Wat het wél vraagt</h2>
      <ul>
        <li>Onderzoek en helder schrijven (geen copy-paste van affiliate-teksten).</li>
        <li>Technische basis: website, analytics, snelle laadtijden.</li>
        <li>SEO en distributie — verkeer komt niet vanzelf.</li>
        <li>Transparantie: vermeld affiliate-relaties (zoals wij doen).</li>
        <li>Doorlopend onderhoud: rentes, voorwaarden en wetgeving veranderen.</li>
      </ul>

      <h2>Realistische inkomensverwachtingen</h2>
      <p>
        Veel nieuwe sites verdienen de eerste maanden <strong>weinig tot niets</strong>. Resultaten
        hangen af van niche, concurrentie, kwaliteit, verkeer en conversie. Sommige hobbyprojecten
        blijven onder de €100 per maand; succesvolle sites kunnen meer opleveren — maar dat is géén
        garantie en geen typisch startpunt.
      </p>

      <blockquote>
        SpaarKompas claimt <strong>geen</strong> specifieke verdiensten, geen &quot;€10k/maand in 90
        dagen&quot;, en geen gegarandeerd passief inkomen. Want dat zou niet eerlijk zijn.
      </blockquote>

      <h2>Ethische richtlijnen die wij volgen</h2>
      <ol>
        <li>Alleen producten aanbevelen die we begrijpen en relevant vinden.</li>
        <li>Nadelen benoemen, niet alleen pluspunten.</li>
        <li>Affiliate-vermelding zichtbaar houden.</li>
        <li>Geen gefabriceerde screenshots of valse testimonials.</li>
        <li>Geen financieel advies vermommen als affiliate-pitch.</li>
      </ol>

      <h2>Conclusie</h2>
      <p>
        Affiliate content kan een legitiem verdienmodel zijn naast waardevolle informatie. Het is
        werk. Wie het presenteert als snelle rijkdom, verdient wantrouwen — niet je e-mailadres.
      </p>
    </ArticleLayout>
  );
}
