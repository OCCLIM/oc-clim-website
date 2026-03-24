"use client";

import { Wind, Flame, Settings, AlertTriangle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Climatisation",
    description:
      "Installation de syst\u00e8mes mono-split, bi-split et multi-split pour un confort optimal en toute saison. Nous \u00e9tudions votre espace pour vous proposer la solution la plus adapt\u00e9e.",
    features: ["Mono & Multi-split", "R\u00e9versible chaud/froid", "Silencieux", "Classe \u00e9nerg\u00e9tique A+++"],
    gradient: "from-[#1e3a5f] to-[#2b4a73]",
  },
  {
    icon: Flame,
    title: "Pompes \u00e0 chaleur",
    description:
      "Pompes \u00e0 chaleur Air/Eau et Air/Air haute performance. R\u00e9duisez votre facture \u00e9nerg\u00e9tique jusqu\u2019\u00e0 70\u00a0% tout en chauffant efficacement votre logement.",
    features: ["Air/Eau & Air/Air", "\u00c9conomies jusqu'\u00e0 70%", "\u00c9ligible aux aides", "Haut rendement"],
    gradient: "from-[#2b4a73] to-[#5b9bd5]",
  },
  {
    icon: Settings,
    title: "Entretien & Maintenance",
    description:
      "Un entretien r\u00e9gulier garantit la long\u00e9vit\u00e9 et les performances de vos \u00e9quipements. Nous proposons des contrats annuels pour votre tranquillit\u00e9.",
    features: ["Contrat annuel", "Pr\u00e9ventif & curatif", "Toutes marques", "Conformit\u00e9 r\u00e9glementaire"],
    gradient: "from-[#5b9bd5] to-[#4a90c2]",
  },
  {
    icon: AlertTriangle,
    title: "D\u00e9pannage rapide",
    description:
      "Panne, dysfonctionnement ou urgence\u00a0? Nous intervenons rapidement pour diagnostiquer et r\u00e9parer votre installation. Disponible 7 jours sur 7.",
    features: ["Intervention rapide", "Diagnostic pr\u00e9cis", "7j/7", "Toutes marques"],
    gradient: "from-[#4a90c2] to-[#1e3a5f]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#5b9bd5]/10 text-[#5b9bd5] mb-5">
            <Settings className="h-3.5 w-3.5" />
            Nos m&eacute;tiers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] leading-tight">
            Des solutions compl&egrave;tes,
            <br />
            <span className="text-gradient">un seul interlocuteur.</span>
          </h2>
          <p className="mt-5 text-lg text-[#5a7394] leading-relaxed max-w-2xl">
            De l&apos;installation au d&eacute;pannage, OC&nbsp;CLIM vous accompagne
            avec un service fiable et personnalis&eacute;. Chaque projet est unique,
            chaque solution est sur-mesure.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_30px_rgba(30,58,95,0.06)] border border-[#e5eef7] hover:shadow-[0_8px_40px_rgba(30,58,95,0.12)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Corner number */}
                <span className="absolute top-6 right-8 text-7xl font-black text-[#e5eef7] select-none leading-none transition-colors duration-500 group-hover:text-[#5b9bd5]/10">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-[#1e3a5f]/15 group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className="h-6 w-6 text-white" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#1e3a5f]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[#5a7394] leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center text-xs font-medium bg-[#f0f6ff] text-[#1e3a5f] px-3 py-1.5 rounded-full border border-[#e5eef7]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a href="#contact" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[#5b9bd5] group-hover:text-[#1e3a5f] transition-colors duration-300">
                  Demander un devis
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
