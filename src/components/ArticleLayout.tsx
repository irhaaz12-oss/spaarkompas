import Link from "next/link";
import { AdSlot } from "./AdSlot";
import { NewsletterForm } from "./NewsletterForm";

type ArticleLayoutProps = {
  category: string;
  title: string;
  description: string;
  updated?: string;
  children: React.ReactNode;
};

export function ArticleLayout({
  category,
  title,
  description,
  updated,
  children,
}: ArticleLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <nav className="mb-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-800">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>{category}</span>
      </nav>

      <header className="border-b border-slate-200 pb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">{category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{description}</p>
        {updated && (
          <p className="mt-3 text-sm text-slate-500">Laatst bijgewerkt: {updated}</p>
        )}
      </header>

      <div className="prose-article mt-8 space-y-5 text-[1.05rem] leading-relaxed text-slate-700">
        {children}
      </div>

      <div className="mt-10">
        <AdSlot slot="in-article" />
      </div>

      <div className="mt-10">
        <NewsletterForm />
      </div>
    </article>
  );
}
