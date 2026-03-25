"use client";

import { useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "Combien coûte l'installation d'une climatisation ?",
    answer: "Le prix dépend du type de système (mono-split, multi-split, gainable) et de la surface à traiter. Comptez en moyenne entre 1 500 € et 5 000 € pose comprise pour un mono-split mural, et entre 4 000 € et 12 000 € pour un multi-split. Nous réalisons un devis gratuit et personnalisé après une visite technique.",
  },
  {
    question: "Quelles aides financières sont disponibles ?",
    answer: "Plusieurs dispositifs existent : MaPrimeRénov' (jusqu'à 5 000 €), les Certificats d'Économie d'Énergie (CEE), et la TVA réduite à 5,5 %. Ces aides sont cumulables et peuvent couvrir une grande partie du coût. OC CLIM vous accompagne dans toutes les démarches administratives.",
  },
  {
    question: "Quelle est la durée d'installation ?",
    answer: "L'installation d'un mono-split prend généralement une demi-journée. Un multi-split ou un système gainable nécessite 1 à 2 jours selon la complexité. Nous planifions l'intervention à votre convenance, y compris le week-end.",
  },
  {
    question: "À quelle fréquence faut-il entretenir sa climatisation ?",
    answer: "Un entretien annuel est recommandé et obligatoire pour les systèmes contenant plus de 2 kg de fluide frigorigène. L'entretien régulier prolonge la durée de vie de l'appareil, maintient ses performances et garantit une qualité d'air optimale. Nous proposons des contrats d'entretien annuels.",
  },
  {
    question: "Intervenez-vous en urgence pour un dépannage ?",
    answer: "Oui, nous sommes disponibles 7j/7, week-ends inclus. Notre temps de réponse moyen est de 22 minutes. Contactez-nous par téléphone au 07 67 11 75 30 pour une intervention rapide sur toute la métropole bordelaise.",
  },
  {
    question: "Quelle est la différence entre une PAC air/air et air/eau ?",
    answer: "La PAC air/air puise les calories de l'air extérieur pour chauffer ou rafraîchir via des unités intérieures (splits). La PAC air/eau utilise l'air extérieur pour chauffer un circuit d'eau alimentant radiateurs ou plancher chauffant, et peut aussi produire l'eau chaude sanitaire. Le choix dépend de votre installation existante et de vos besoins.",
  },
  {
    question: "Quelles marques installez-vous ?",
    answer: "Nous travaillons avec les meilleures marques du marché : Daikin, Mitsubishi Electric, Atlantic, Heiwa, Ariston, Toshiba, Panasonic et Fujitsu. Nous vous conseillerons la marque la plus adaptée à votre projet et votre budget.",
  },
  {
    question: "Proposez-vous une garantie sur les installations ?",
    answer: "Oui, toutes nos installations sont couvertes par la garantie décennale (10 ans). En complément, les équipements bénéficient de la garantie constructeur (2 à 5 ans selon les marques). Nous assurons également le service après-vente.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999] mb-4">
              Questions fréquentes
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1E]">
              Tout savoir sur nos services
            </h2>
            <p className="mt-4 text-[#777] max-w-lg mx-auto">
              Les réponses aux questions les plus posées par nos clients.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 60}>
                <div className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen ? "border-[#1C1C1E]/15 shadow-md" : "border-[#E5E5E5] hover:border-[#1C1C1E]/10"
                }`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircleQuestion className={`h-5 w-5 shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-[#1C1C1E]" : "text-[#ccc]"
                      }`} />
                      <span className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                        isOpen ? "text-[#1C1C1E]" : "text-[#444]"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#999] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-14">
                      <p className="text-sm text-[#777] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-12 text-center">
            <p className="text-sm text-[#999] mb-4">Vous avez une autre question ?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1C1C1E] text-white font-semibold px-6 py-3 rounded-xl text-sm hover:bg-[#3C3C3E] transition-colors"
            >
              Contactez-nous
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
