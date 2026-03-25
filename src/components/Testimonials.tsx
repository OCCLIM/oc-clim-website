"use client";

import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Kevin D.",
    location: "Bordeaux",
    text: "Personne aimable, a su se rendre disponible rapidement pour résoudre nos problèmes.",
    initials: "KD",
  },
  {
    name: "Benjamin M.",
    location: "Cestas",
    text: "Révision d'une pompe à chaleur, très bon contact, très professionnel. Je recommande.",
    initials: "BM",
  },
  {
    name: "Sandrine S.",
    location: "Bordeaux Métropole",
    text: "Professionnel courtois, efficace, expliquant clairement la problématique rencontrée. 100% recommandé.",
    initials: "SS",
  },
  {
    name: "M. Boucher",
    location: "Gironde",
    text: "Une réactivité dans les échanges. Très satisfait de la prestation, je recommande vivement OC CLIM.",
    initials: "MB",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 sm:py-32 bg-[#2A2A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
              Témoignages
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              La parole à nos clients
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-white/40">5/5 sur AlloVoisins · Avis vérifiés</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.07] transition-all duration-300 h-full flex flex-col">
                <Quote className="h-6 w-6 text-white/10 mb-4" />
                <p className="text-white/70 leading-relaxed text-[15px] mb-6 flex-1">
                  « {t.text} »
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-white/60">{t.initials}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-white/30 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-10">
            <a
              href="https://www.allovoisins.com/p/occlim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              Voir tous les avis sur AlloVoisins
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
