"use client";

import { Wind, Flame, Wrench, ArrowRight, Droplets } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const metiers = [
  {
    icon: Wind,
    title: "Climatisation",
    description: "Installation de systèmes mono-split, bi-split, multi-split et gainables pour un confort optimal été comme hiver.",
    image: "/images/projets/05-mono-mitsubishi.jpg",
    href: "#faq",
  },
  {
    icon: Droplets,
    title: "Pompe à chaleur",
    description: "PAC air/air réversible et PAC air/eau pour le chauffage et l'eau chaude sanitaire. Un investissement rentable dès la première année.",
    image: "/images/projets/02-mono-split-heiwa.jpg",
    href: "#faq",
  },
  {
    icon: Flame,
    title: "Chauffe-eau thermodynamique",
    description: "Production d'eau chaude sanitaire ultra économique. Jusqu'à 70 % d'économie sur votre facture grâce à l'énergie de l'air.",
    image: "/images/projets/01-thermo-ariston.jpg",
    href: "#faq",
  },
  {
    icon: Wrench,
    title: "Maintenance & Dépannage",
    description: "Entretien régulier, contrats annuels et interventions rapides 7j/7. Toutes marques.",
    image: "/images/projets/10-maintenance-pac.jpg",
    href: "#contact",
  },
];


export default function Services() {
  return (
    <section id="services" className="bg-[#FAFAFA]">
      {/* Métiers - K2 style 3 big cards */}
      <div className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999] mb-4">
              Nos métiers
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333338] leading-tight max-w-3xl">
              Des solutions climatiques complètes
            </h2>
          </ScrollReveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metiers.map((m, i) => {
              const Icon = m.icon;
              return (
                <ScrollReveal key={m.title} delay={i * 150}>
                  <a href={m.href} className="group block relative h-[420px] rounded-2xl overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <div className="h-11 w-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/25 transition-colors">
                        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{m.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">{m.description}</p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                        En savoir +
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
