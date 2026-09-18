type AdSlotProps = {
  /** Slot label for layout/debug, e.g. "sidebar" or "in-article" */
  slot?: string;
  className?: string;
};

/**
 * AdSense-ready placeholder.
 *
 * TODO: Replace with real Google AdSense <ins> markup once approved:
 *   <ins
 *     className="adsbygoogle"
 *     style={{ display: "block" }}
 *     data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
 *     data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_XXX}
 *     data-ad-format="auto"
 *     data-full-width-responsive="true"
 *   />
 * And load the AdSense script in layout.tsx via next/script.
 *
 * Do NOT enable ads until you have consent management (AVG/GDPR) in place.
 */
export function AdSlot({ slot = "default", className = "" }: AdSlotProps) {
  return (
    <aside
      aria-label="Advertentieruimte"
      data-ad-slot={slot}
      className={`flex min-h-[90px] items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center ${className}`}
    >
      <div className="text-xs text-slate-500">
        <p className="font-medium text-slate-600">Advertentie</p>
        <p className="mt-1">
          AdSense-slot klaar ({slot}). Configureer{" "}
          <code className="rounded bg-slate-200 px-1">NEXT_PUBLIC_ADSENSE_*</code> na goedkeuring.
        </p>
      </div>
    </aside>
  );
}
