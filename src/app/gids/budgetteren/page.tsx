import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Budgetteren: zo begin je (simpel stappenplan)",
  description:
    "Leer budgetteren in Nederland: overzicht van inkomsten en uitgaven, de 50/30/20-regel, en praktische tips om te sparen zonder stress.",
  alternates: { canonical: "/gids/budgetteren" },
};

export default function BudgetterenPage() {
  return (
    <ArticleLayout
      category="Budget"
      title="Budgetteren: zo begin je"
      description="Een eenvoudig, haalbaar stappenplan om grip te krijgen op je geld — zonder spreadsheet-angst."
      updated="september 2026"
    >
      <p>
        Budgetteren klinkt saai, maar het is vooral: <strong>weten waar je geld naartoe gaat</strong>
        . Met overzicht kun je bewuster keuzes maken, stress verminderen en gericht sparen voor
        doelen die jij belangrijk vindt.
      </p>

      <h2>Stap 1 — Breng inkomsten in kaart</h2>
      <p>
        Noteer je netto maandinkomen (salaris, toeslagen, bijverdiensten). Werk je met wisselende
        uren? Neem een voorzichtige gemiddelde van de afgelopen 3 maanden.
      </p>

      <h2>Stap 2 — Categoriseer uitgaven</h2>
      <ul>
        <li>
          <strong>Vaste lasten</strong> — huur/hypotheek, verzekeringen, abonnementen, energie.
        </li>
        <li>
          <strong>Variabele noodzakelijke</strong> — boodschappen, vervoer, zorgkosten.
        </li>
        <li>
          <strong>Flexibel / lifestyle</strong> — horeca, streaming, hobby&apos;s, kleding.
        </li>
      </ul>

      <h2>Stap 3 — Kies een methode die bij je past</h2>
      <p>
        Populair is de <strong>50/30/20-richtlijn</strong>: ongeveer 50% noodzakelijk, 30% wensen,
        20% sparen/aflossen. Het is een richtlijn, geen wet. Woon je in een dure stad, dan kan 50%
        voor vaste lasten te krap zijn — pas aan.
      </p>

      <h2>Stap 4 — Automatiseer</h2>
      <p>
        Zet op betaaldag automatisch een bedrag over naar je spaarrekening. Wat je niet ziet, geef
        je minder snel uit. Combineer dit met een{" "}
        <Link href="/gids/beste-spaarrekeningen">geschikte spaarrekening</Link>.
      </p>

      <blockquote>
        Perfect budgetteren bestaat niet. Consistentie wint van perfectie. Pas maandelijks aan
        zonder schuldgevoel.
      </blockquote>

      <h2>Handige hulpmiddelen</h2>
      <p>
        Apps en spreadsheets helpen. Bekijk onze gids{" "}
        <Link href="/gids/tools-apps">Tools &amp; apps die geldbesparing makkelijker maken</Link>.
      </p>
    </ArticleLayout>
  );
}
