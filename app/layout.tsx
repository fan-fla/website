import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
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
  title: "Fla Fla - Cookies Artesanais de Moçambique",
  description:
    "Cookies caseiros e saudáveis, feitos à mão em Maputo com ingredientes naturais da nossa terra. Sem açúcar refinado, sem conservantes.",
  keywords: [
    "cookies",
    "bolachas",
    "Moçambique",
    "Maputo",
    "artesanal",
    "saudável",
    "sem açúcar",
    "natural",
  ],
  openGraph: {
    title: "Fla Fla - Cookies Artesanais de Moçambique",
    description:
      "Cookies caseiros e saudáveis, feitos à mão em Maputo com ingredientes naturais da nossa terra.",
    type: "website",
  },
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
      </head>
      <body className="h-full font-inter antialiased">{children}</body>
    </html>
  );
}
