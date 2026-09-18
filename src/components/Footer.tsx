import Link from "next/link";
import { guideLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-slate-900">{siteConfig.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {siteConfig.tagline}. Praktische gidsen voor beginners — zonder loze beloftes over
            snelle rijkdom.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Gidsen</p>
          <ul className="mt-3 space-y-2">
            {guideLinks.map((g) => (
              <li key={g.href}>
                <Link href={g.href} className="text-sm text-slate-700 hover:text-teal-800">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Juridisch</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/privacy" className="text-sm text-slate-700 hover:text-teal-800">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-sm text-slate-700 hover:text-teal-800">
                Cookies
              </Link>
            </li>
            <li>
              <Link
                href="/affiliate-disclosure"
                className="text-sm text-slate-700 hover:text-teal-800"
              >
                Affiliate-vermelding
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-slate-700 hover:text-teal-800">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {siteConfig.name}. Geen financieel advies — doe eigen onderzoek.
          </p>
          <p>
            Sommige links zijn affiliate-links. Zie onze{" "}
            <Link href="/affiliate-disclosure" className="underline hover:text-teal-800">
              affiliate-vermelding
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
