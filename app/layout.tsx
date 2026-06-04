import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "./data/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: "Fan Fla | Fla Fla - Cookies Artesanais de Moçambique",
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  openGraph: {
    title: "Fan Fla | Fla Fla - Cookies Artesanais de Moçambique",
    description: siteConfig.seo.description,
    type: "website",
    url: siteConfig.seo.siteUrl,
    siteName: "Fan Fla",
    images: [
      {
        url: `${siteConfig.seo.siteUrl}/cookies/matchies.png`,
        width: 864,
        height: 1184,
        alt: "Cookies artesanais Fan Fla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fan Fla | Fla Fla - Cookies Artesanais de Moçambique",
    description: siteConfig.seo.description,
    images: [`${siteConfig.seo.siteUrl}/cookies/matchies.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Fan Fla",
  alternateName: [...siteConfig.seo.brandAliases],
  url: siteConfig.seo.siteUrl,
  telephone: `+${siteConfig.whatsapp.number}`,
  image: `${siteConfig.seo.siteUrl}/cookies/matchies.png`,
  description: siteConfig.seo.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Maputo",
    addressCountry: "MZ",
  },
  servesCuisine: "Cookies artesanais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${poppins.variable} ${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="h-full font-inter antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
