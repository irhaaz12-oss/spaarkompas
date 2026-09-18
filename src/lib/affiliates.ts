/**
 * Affiliate URLs from environment variables.
 * Fallback "#" so the site builds and runs without secrets configured.
 */
export function getAffiliateUrl(key: string): string {
  const value = process.env[key];
  if (value && value.trim().length > 0) return value.trim();
  return "#";
}

export const affiliates = {
  bankA: () => getAffiliateUrl("NEXT_PUBLIC_AFFILIATE_BANK_A"),
  bankB: () => getAffiliateUrl("NEXT_PUBLIC_AFFILIATE_BANK_B"),
  bankC: () => getAffiliateUrl("NEXT_PUBLIC_AFFILIATE_BANK_C"),
  brokerA: () => getAffiliateUrl("NEXT_PUBLIC_AFFILIATE_BROKER_A"),
  brokerB: () => getAffiliateUrl("NEXT_PUBLIC_AFFILIATE_BROKER_B"),
  toolA: () => getAffiliateUrl("NEXT_PUBLIC_AFFILIATE_TOOL_A"),
} as const;

export type AffiliateProduct = {
  id: string;
  name: string;
  highlight: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  getUrl: () => string;
  ctaLabel: string;
};
