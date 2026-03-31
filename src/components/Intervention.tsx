"use client";

import { PenTool, Hammer, Settings, ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: PenTool,
    title: "Étude & Conception",
    description: "Audit de votre espace, dimensionnement précis et recommandation de la solution la plus adaptée à votre budget et vos besoins.",
    image: "/images/projets/03-deco-clim.jpg",
  },
  {
    icon: Hammer,
    title: "Installation",
    description: "Pose soignée et professionnelle dans le respect de votre habitation. Mise en service, réglages et formation à l'utilisation.",
    image: "/images/projets/07-tri-split-daikin.jpg",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Entretien régulier pour garantir performance et longévité. Contrats annuels, dépannage rapide 7j/7.",
    image: "/images/projets/10-maintenance-pac.jpg",
  },
];

export default function Intervention() {
  return (
    <section id="intervention" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999] mb-4">
              Notre champ d'intervention
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333338]">
              De la conception à la maintenance
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.title} delay={i * 150}>
                <div className="group text-center">
                  {/* Image */}
                  <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    {/* Step number */}
                    <div className="absolute top-4 left-4 h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                      <span className="text-sm font-extrabold text-[#333338]">0{i + 1}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#333338] mb-4">
                    <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-lg font-bold text-[#333338] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#777] leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-16">
            <a
              href="#a-propos"
              className="inline-flex items-center gap-2 bg-[#333338] text-white px-8 py-4 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-[#535358] transition-colors"
            >
              Découvrir l'entreprise
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
