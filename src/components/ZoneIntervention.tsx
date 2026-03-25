"use client";

import { MapPin, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const zones = [
  { name: "Bordeaux", highlight: true },
  { name: "Pessac", highlight: true },
  { name: "Talence", highlight: false },
  { name: "Mérignac", highlight: true },
  { name: "Gradignan", highlight: false },
  { name: "Villenave-d'Ornon", highlight: false },
  { name: "Bègles", highlight: false },
  { name: "Le Bouscat", highlight: false },
  { name: "Cenon", highlight: false },
  { name: "Lormont", highlight: false },
  { name: "Floirac", highlight: false },
  { name: "Cestas", highlight: true },
  { name: "Léognan", highlight: false },
  { name: "Saint-Médard-en-Jalles", highlight: false },
  { name: "Eysines", highlight: false },
  { name: "Blanquefort", highlight: false },
  { name: "Bruges", highlight: false },
  { name: "Canéjan", highlight: false },
  { name: "Cadaujac", highlight: false },
  { name: "Martignas-sur-Jalle", highlight: false },
];

export default function ZoneIntervention() {
  return (
    <section id="zone" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Info */}
          <ScrollReveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999] mb-4">
                Zone d'intervention
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1E] leading-tight">
                Bordeaux Métropole<br />
                <span className="text-[#999]">& ses alentours</span>
              </h2>
              <p className="mt-6 text-[#777] leading-relaxed max-w-lg">
                Nous intervenons sur l'ensemble de la métropole bordelaise et les communes environnantes.
                Déplacement gratuit pour tout devis, intervention rapide en cas d'urgence.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {zones.map((z) => (
                  <span
                    key={z.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      z.highlight
                        ? "bg-[#1C1C1E] text-white"
                        : "bg-[#f5f5f5] text-[#555] hover:bg-[#eee]"
                    }`}
                  >
                    {z.highlight && <MapPin className="h-3 w-3" />}
                    {z.name}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Déplacement gratuit",
                  "Devis sous 24h",
                  "Intervention 7j/7",
                  "Rayon 40 km",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-[#555]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Map */}
          <ScrollReveal delay={200}>
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-lg aspect-square lg:aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90834.5!2d-0.7!3d44.84!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux!5e0!3m2!1sfr!2sfr!4v1"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zone d'intervention OC CLIM — Bordeaux Métropole"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-[#eee]">
                <p className="text-xs font-bold text-[#1C1C1E]">OC CLIM</p>
                <p className="text-[10px] text-[#999]">Bordeaux Métropole · Rayon 40 km</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
