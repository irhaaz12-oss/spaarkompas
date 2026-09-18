# SpaarKompas

Nederlandse content-site over persoonlijke financiën voor beginners (sparen, beleggen, budgetteren, tools). Gebouwd met **Next.js App Router**, **TypeScript** en **Tailwind CSS**.

> Geen gefabriceerde verdiensten, geen “word rijk in 30 dagen”. Affiliate-links zijn optioneel en transparant vermeld.

## Lokaal draaien

```bash
cd /workspace/spaarkompas   # of jouw pad naar dit project
cp .env.example .env.local  # optioneel: affiliate-URL's invullen
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Productie-build lokaal:

```bash
npm run build
npm run start
```

## Belangrijkste routes

| Route | Inhoud |
|-------|--------|
| `/` | Homepage |
| `/gids/beste-spaarrekeningen` | Gids spaarrekeningen |
| `/gids/beleggen-voor-beginners` | Gids beleggen |
| `/gids/budgetteren` | Gids budgetteren |
| `/gids/passief-inkomen-affiliate` | Eerlijke uitleg affiliate / “passief” inkomen |
| `/gids/tools-apps` | Tools & apps |
| `/vergelijken/spaarrekeningen` | Vergelijking + affiliate-CTA’s |
| `/vergelijken/beleggingsapps` | Vergelijking brokers/apps |
| `/affiliate-disclosure` | Affiliate-vermelding |
| `/privacy` | Privacyverklaring |
| `/cookies` | Cookieverklaring |
| `/contact` | Contact |
| `POST /api/newsletter` | Nieuwsbrief-aanmelding |

## Affiliate-links instellen

1. Kopieer `.env.example` naar `.env.local`.
2. Vul de variabelen in, bijvoorbeeld:

```env
NEXT_PUBLIC_AFFILIATE_BANK_A=https://partner.voorbeeld.nl/jouw-tracking
NEXT_PUBLIC_AFFILIATE_BROKER_A=https://broker.voorbeeld.nl/ref/abc
```

3. Zonder waarde valt de knop terug op `#` (veilig voor lokale demo).
4. Knoppen gebruiken `rel="sponsored noopener"` en `target="_blank"`.

Productnamen op vergelijkingspagina’s zijn **placeholders** — pas ze aan in:

- `src/app/vergelijken/spaarrekeningen/page.tsx`
- `src/app/vergelijken/beleggingsapps/page.tsx`

## Google AdSense

Component: `src/components/AdSlot.tsx` (placeholder + TODO).

Stappen (kort):

1. AdSense-account aanvragen en site laten goedkeuren.
2. Zet `NEXT_PUBLIC_ADSENSE_CLIENT` en slot-ID’s in `.env`.
3. Vervang de placeholder in `AdSlot` door officiële `<ins class="adsbygoogle">`-markup.
4. Laad het AdSense-script via `next/script` in `layout.tsx`.
5. **Verplicht in EU:** consent / cookiebanner (AVG) vóór niet-essentiële ads.

## Nieuwsbrief

- UI: `src/components/NewsletterForm.tsx`
- API: `src/app/api/newsletter/route.ts`
- Opslag lokaal: `data/subscribers.json` (+ console-log)

Op **Vercel** is het filesystem read-only (behalve `/tmp`). Voor productie koppel je Mailchimp, Buttondown, Resend, of een database. De huidige route is bedoeld als werkende demo / startpunt.

## Deployen op Vercel

1. Push dit project naar GitHub/GitLab.
2. Importeer de repo in [Vercel](https://vercel.com).
3. Zet Environment Variables (affiliate + eventueel AdSense + `NEXT_PUBLIC_SITE_URL`).
4. Deploy (framework preset: Next.js).

Of CLI:

```bash
npx vercel
```

## Realistische inkomensverwachtingen

Affiliate- en ads-inkomsten variëren enorm. Veel nieuwe sites verdienen de **eerste maanden weinig tot niets**. Resultaat hangt af van verkeer, niche, contentkwaliteit en conversie. SpaarKompas belooft **geen** bedragen en toont geen valse “earnings screenshots”.

Zie ook: `/gids/passief-inkomen-affiliate`.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4
- Geen CMS vereist — content staat in de routes

## Licentie / gebruik

Gebruik en pas aan voor je eigen merk. Vervang contact-e-mail in `src/lib/site.ts` en juridische teksten waar nodig door teksten van een jurist als je commercieel live gaat.
