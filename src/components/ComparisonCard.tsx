import { AffiliateButton } from "./AffiliateButton";
import type { AffiliateProduct } from "@/lib/affiliates";

type ComparisonCardProps = {
  product: AffiliateProduct;
  featured?: boolean;
};

export function ComparisonCard({ product, featured = false }: ComparisonCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${
        featured ? "border-teal-300 ring-2 ring-teal-100" : "border-slate-200"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-teal-700 px-3 py-0.5 text-xs font-semibold text-white">
          Populair
        </span>
      )}
      <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
      <p className="mt-2 text-sm font-medium text-teal-800">{product.highlight}</p>
      <p className="mt-3 text-sm text-slate-600">
        <span className="font-medium text-slate-800">Beste voor:</span> {product.bestFor}
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Pluspunten</p>
          <ul className="mt-2 space-y-1.5">
            {product.pros.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-slate-700">
                <span className="text-teal-600" aria-hidden>
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Let op</p>
          <ul className="mt-2 space-y-1.5">
            {product.cons.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-slate-700">
                <span className="text-amber-600" aria-hidden>
                  !
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <AffiliateButton href={product.getUrl()} className="w-full sm:w-auto">
          {product.ctaLabel}
        </AffiliateButton>
        <p className="mt-2 text-xs text-slate-500">Affiliate-link · rel=sponsored</p>
      </div>
    </div>
  );
}
