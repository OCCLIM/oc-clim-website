import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OC CLIM - Climatisation & Pompes \u00e0 Chaleur | Bordeaux & Cestas",
  description:
    "OC CLIM, expert en installation et maintenance de climatisation, pompes \u00e0 chaleur air/eau et air/air \u00e0 Bordeaux et Cestas. Devis gratuit, garantie d\u00e9cennale. G\u00e9r\u00e9 par Can Oruc.",
  keywords:
    "climatisation, pompe \u00e0 chaleur, Bordeaux, Cestas, installation clim, entretien climatisation, OC CLIM, Can Oruc, PAC air eau, PAC air air",
  openGraph: {
    title: "OC CLIM - Climatisation & Pompes \u00e0 Chaleur | Bordeaux",
    description:
      "Expert en climatisation et pompes \u00e0 chaleur \u00e0 Bordeaux. Installation, entretien, d\u00e9pannage. Devis gratuit.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
