import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Neem contact op met ${siteConfig.name} voor vragen over de website of privacy.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Contact</h1>
      <p className="mt-4 text-lg text-slate-600">
        Heb je een vraag over een artikel, een correctie, of een privacyverzoek? Mail ons — we
        reageren zo snel mogelijk.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">E-mail</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="mt-2 inline-block text-xl font-semibold text-teal-800 hover:underline"
        >
          {siteConfig.email}
        </a>
        <p className="mt-4 text-sm text-slate-600">
          Vervang dit adres in <code className="rounded bg-slate-100 px-1">src/lib/site.ts</code>{" "}
          door je echte inbox voordat je publiceert. We geven geen persoonlijk beleggingsadvies per
          mail.
        </p>
      </div>

      <div className="mt-8 text-sm text-slate-600">
        <p>
          <strong>Pers / samenwerkingen:</strong> vermeld clearly of het om een affiliate- of
          sponsored verzoek gaat. We werken alleen met relevante, ethische partners.
        </p>
      </div>
    </div>
  );
}
