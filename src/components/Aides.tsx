"use client";

import { useState } from "react";
import { Euro, FileCheck, Leaf, ChevronDown, ArrowRight, X, BadgeCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const aides = [
  {
    icon: Euro,
    title: "MaPrimeRénov'",
    subtitle: "Jusqu'à 5 000 €",
    description: "Aide de l'État pour le remplacement de votre système de chauffage par une pompe à chaleur ou un chauffe-eau thermodynamique.",
    eligible: ["Pompe à chaleur air/eau", "Chauffe-eau thermodynamique", "Système hybride"],
    conditions: "Logement de + de 15 ans, résidence principale. Montant selon revenus du foyer.",
    color: "bg-emerald-500",
  },
  {
    icon: FileCheck,
    title: "Certificats d'Économie d'Énergie (CEE)",
    subtitle: "Prime énergie",
    description: "Les fournisseurs d'énergie financent une partie de vos travaux de rénovation énergétique via les primes CEE, cumulables avec MaPrimeRénov'.",
    eligible: ["Climatisation réversible", "PAC air/air et air/eau", "Isolation thermique"],
    conditions: "Travaux réalisés par un professionnel qualifié. Devis signé avant début des travaux.",
    color: "bg-blue-500",
  },
  {
    icon: Leaf,
    title: "TVA réduite à 5,5 %",
    subtitle: "Économie immédiate",
    description: "Les travaux d'amélioration de la performance énergétique bénéficient d'un taux de TVA réduit à 5,5 % au lieu de 20 %.",
    eligible: ["Pompe à chaleur", "Chauffe-eau thermodynamique", "Main d'œuvre associée"],
    conditions: "Logement achevé depuis + de 2 ans. Matériel et pose facturés par le même professionnel.",
    color: "bg-amber-500",
  },
];

export default function Aides() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="py-24 sm:py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999] mb-4">
                  Financez vos travaux
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111] leading-tight">
                  Aides & subventions
                </h2>
                <p className="mt-4 text-[#777] max-w-xl leading-relaxed">
                  Profitez des aides de l'État pour réduire le coût de vos installations.
                  OC CLIM vous accompagne dans toutes les démarches administratives.
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="shrink-0 inline-flex items-center gap-2 bg-[#111] text-white font-semibold px-6 py-3.5 rounded-xl text-sm hover:bg-[#333] transition-colors"
              >
                Suis-je éligible ?
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {aides.map((aide, i) => {
              const Icon = aide.icon;
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={aide.title} delay={i * 120}>
                  <div className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden hover:shadow-lg hover:border-[#111]/10 transition-all duration-300">
                    <div className="p-7">
                      <div className={`h-11 w-11 rounded-xl ${aide.color} flex items-center justify-center mb-5`}>
                        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-lg font-bold text-[#111] mb-1">{aide.title}</h3>
                      <p className="text-sm font-semibold text-[#111]/60 mb-3">{aide.subtitle}</p>
                      <p className="text-sm text-[#777] leading-relaxed">{aide.description}</p>

                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="mt-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111] hover:text-[#555] transition-colors"
                      >
                        {isOpen ? "Masquer" : "Détails"}
                        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-80" : "max-h-0"}`}>
                      <div className="px-7 pb-7 border-t border-[#E5E5E5] pt-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999] mb-2">Travaux éligibles</p>
                        <ul className="space-y-1.5 mb-4">
                          {aide.eligible.map((e) => (
                            <li key={e} className="flex items-center gap-2 text-sm text-[#555]">
                              <BadgeCheck className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                              {e}
                            </li>
                          ))}
                        </ul>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999] mb-2">Conditions</p>
                        <p className="text-xs text-[#777] leading-relaxed">{aide.conditions}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-10 bg-[#111] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">OC CLIM s'occupe de tout</h3>
                <p className="text-sm text-white/50">
                  Constitution du dossier, simulation des aides, suivi administratif — nous gérons les démarches pour vous.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-[#111] font-semibold px-6 py-3 rounded-xl text-sm hover:bg-white/90 transition-colors"
              >
                Demander une simulation
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal éligibilité */}
      {showModal && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-fade-in-up shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 h-8 w-8 rounded-full bg-[#f5f5f5] hover:bg-[#eee] flex items-center justify-center">
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-xl font-extrabold text-[#111] mb-2">Vérifiez votre éligibilité</h3>
            <p className="text-sm text-[#777] mb-6">Contactez-nous pour une simulation gratuite et personnalisée de vos aides.</p>
            <div className="space-y-3 mb-6">
              {[
                "Votre logement a plus de 2 ans",
                "C'est votre résidence principale",
                "Vous souhaitez installer une PAC ou un chauffe-eau thermodynamique",
                "Les travaux sont réalisés par un professionnel (OC CLIM)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <BadgeCheck className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-[#555]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#999] mb-4">Si vous cochez au moins 2 critères, vous êtes probablement éligible.</p>
            <a href="#contact" onClick={() => setShowModal(false)} className="w-full flex items-center justify-center gap-2 bg-[#111] text-white font-bold py-3.5 rounded-xl text-sm hover:bg-[#333] transition-colors">
              Demander ma simulation gratuite
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
