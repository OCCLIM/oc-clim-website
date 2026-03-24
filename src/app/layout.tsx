import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OC CLIM — Climatisation & Pompes à Chaleur | Bordeaux & Cestas (33)",
  description:
    "OC CLIM, votre expert en installation, entretien et dépannage de climatisation et pompes à chaleur à Bordeaux, Cestas et Gironde. Devis gratuit, garantie décennale.",
  keywords:
    "climatisation Bordeaux, pompe à chaleur Cestas, installation clim 33, entretien climatisation Gironde, OC CLIM, Can Oruc, dépannage clim, PAC air eau",
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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A]">
        {children}
      </body>
    </html>
  );
}
