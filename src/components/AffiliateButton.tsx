type AffiliateButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function AffiliateButton({
  href,
  children,
  variant = "primary",
  className = "",
}: AffiliateButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "primary"
      ? "bg-teal-700 text-white shadow-sm hover:bg-teal-800 focus-visible:outline-teal-700"
      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus-visible:outline-slate-400";

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener"
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
