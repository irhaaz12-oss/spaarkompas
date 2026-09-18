# Vercel environment variables — SpaarKompas

Zet deze in **Vercel → Project → Settings → Environment Variables** (Production + Preview).
Daarna: **Deployments → … → Redeploy**.

## Verplicht voor correcte URL’s

| Name | Value (voorbeeld) | Notes |
|------|-------------------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://spaarkompas.vercel.app` | Later je eigen domein |

## Affiliate (vullen na goedkeuring)

Laat leeg of `#` tot je echte tracking-URL’s hebt. `NEXT_PUBLIC_*` is zichtbaar in de browser — dat is normaal voor affiliate-links.

| Name | Gebruik op de site |
|------|--------------------|
| `NEXT_PUBLIC_AFFILIATE_BANK_A` | Spaarrekening / bank CTA A |
| `NEXT_PUBLIC_AFFILIATE_BANK_B` | Spaarrekening / bank CTA B |
| `NEXT_PUBLIC_AFFILIATE_BANK_C` | Spaarrekening / bank CTA C |
| `NEXT_PUBLIC_AFFILIATE_BROKER_A` | Broker / beleggingsapp A |
| `NEXT_PUBLIC_AFFILIATE_BROKER_B` | Broker / beleggingsapp B |
| `NEXT_PUBLIC_AFFILIATE_TOOL_A` | Tool / fintech CTA |

## AdSense (later)

| Name | Notes |
|------|--------|
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-…` |
| `NEXT_PUBLIC_ADSENSE_SLOT_HOMEPAGE` | slot id |
| `NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE` | slot id |

Eerst cookie-/consent-banner (AVG) voordat je ads live zet.
