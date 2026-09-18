import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AffiliateBanner } from "@/components/AffiliateBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  other: {
    "d18eba2d0076b23": "9773ee2e71e05045b37c5dade7f4b18b",
    "impact-site-verification": "393eed62-4e84-48e6-ade7-8a3b48224de7",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="impact-site-verification"
          {...{ value: "393eed62-4e84-48e6-ade7-8a3b48224de7" }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
        <AffiliateBanner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
