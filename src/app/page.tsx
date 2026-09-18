import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { NewsletterForm } from "@/components/NewsletterForm";
import { guideLinks, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
              Persoonlijke financiën · Nederland
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Jouw kompas voor sparen, budgetteren en beleggen
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {siteConfig.description} We schrijven helder, toetsen bronnen en claimen nooit
              gegarandeerde rendementen of &quot;passief rijk&quot;-verhalen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/vergelijken/spaarrekeningen"
                className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-800"
              >
                Vergelijk spaarrekeningen
              </Link>
              <Link
                href="/gids/beleggen-voor-beginners"
                className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Startgids beleggen
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-teal-50/60 p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-slate-900">Waarom SpaarKompas?</h2>
            <ul className="mt-4 space-y-4">
              {[
                {
                  t: "Eerlijk over affiliate",
                  d: "We vermelden commissies openlijk. Jij betaalt niets extra.",
                },
                {
                  t: "Voor beginners",
                  d: "Geen jargon-jargon. Wel stappenplannen die je vandaag kunt toepassen.",
                },
                {
                  t: "Geen wonderclaims",
                  d: "Geen gefabriceerde verdiensten of beloftes van snelle rijkdom.",
                },
                {
                  t: "Nederlands gericht",
                  d: "Spaarrekeningen, brokers en wetgeving relevant voor NL.",
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-xs font-bold text-white">
                    ✓
                  </span>
                  <div>
                    <p className="font-medium text-slate-900">{item.t}</p>
                    <p className="text-sm text-slate-600">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Populaire gidsen</h2>
            <p className="mt-2 text-slate-600">Praktische artikelen om je geldzaken op orde te krijgen.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guideLinks.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                {g.category}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-teal-800">
                {g.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{g.description}</p>
              <span className="mt-4 text-sm font-semibold text-teal-700">Lees gids →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
          <Link
            href="/vergelijken/spaarrekeningen"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-teal-300 hover:bg-teal-50/40"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Vergelijking</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Spaarrekeningen vergeleken</h3>
            <p className="mt-2 text-sm text-slate-600">
              Overzicht van rentes, voorwaarden en affiliate-CTA&apos;s naar bankpartners.
            </p>
          </Link>
          <Link
            href="/vergelijken/beleggingsapps"
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-teal-300 hover:bg-teal-50/40"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Vergelijking</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Beleggingsapps vergeleken</h3>
            <p className="mt-2 text-sm text-slate-600">
              Brokers en apps voor beginners — kosten, gebruiksgemak en risico&apos;s.
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <AdSlot slot="homepage-mid" />
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <NewsletterForm />
      </section>

      <section className="border-t border-slate-200 bg-slate-100/80">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <p className="text-sm leading-relaxed text-slate-600">
            <strong className="text-slate-800">Disclaimer:</strong> SpaarKompas biedt algemene
            informatie, geen persoonlijk financieel advies. Beleggen brengt risico&apos;s mee; je
            kunt (een deel van) je inleg verliezen. Vergelijk altijd zelf voorwaarden en doe eigen
            onderzoek voordat je een product afsluit.
          </p>
        </div>
      </section>
    </>
  );
}
