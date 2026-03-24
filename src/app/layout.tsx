import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OC CLIM — Climatisation & Pompes à Chaleur | Bordeaux & Cestas (33)",
  description:
    "OC CLIM, votre expert en installation, entretien et dépannage de climatisation et pompes à chaleur (Air/Eau, Air/Air) à Bordeaux, Cestas et toute la Gironde. Devis gratuit, garantie décennale.",
  keywords:
    "climatisation Bordeaux, pompe à chaleur Cestas, installation clim 33, entretien climatisation Gironde, OC CLIM, Can Oruc, PAC air eau, PAC air air, Daikin, Mitsubishi",
  openGraph: {
    title: "OC CLIM — Climatisation & Pompes à Chaleur | Bordeaux",
    description:
      "Expert en climatisation et pompes à chaleur à Bordeaux et Cestas. Installation, entretien, dépannage. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
    siteName: "OC CLIM",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col bg-[#f8fbff] text-[#1e3a5f] font-[var(--font-poppins)]">
        {children}
      </body>
    </html>
  );
}
