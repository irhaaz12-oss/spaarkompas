import Link from "next/link";

export function AffiliateBanner() {
  return (
    <div className="border-b border-amber-200 bg-amber-50">
      <div className="mx-auto max-w-6xl px-4 py-2.5 text-center text-xs leading-relaxed text-amber-950 sm:px-6 sm:text-sm">
        <strong className="font-semibold">Transparantie:</strong> SpaarKompas kan een commissie
        ontvangen via affiliate-links. Dat kost jou niets extra.{" "}
        <Link href="/affiliate-disclosure" className="font-medium underline underline-offset-2">
          Lees onze affiliate-vermelding
        </Link>
        .
      </div>
    </div>
  );
}
