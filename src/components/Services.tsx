"use client";

import { Wind, Flame, Settings, AlertTriangle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Climatisation",
    description:
      "Installation de systèmes mono-split, bi-split et multi-split pour un confort optimal en toute saison. Nous étudions votre espace pour vous proposer la solution la plus adaptée.",
    features: ["Mono & Multi-split", "Réversible chaud/froid", "Silencieux", "Classe énergétique A+++"],
    gradient: "from-[#1e3a5f] to-[#2b4a73]",
  },
  {
    icon: Flame,
    title: "Pompes à chaleur",
    description:
      "Pompes à chaleur Air/Eau et Air/Air haute performance. Réduisez votre facture énergétique jusqu’à 70 % tout en chauffant efficacement votre logement.",
    features: ["Air/Eau & Air/Air", "Économies jusqu'à 70%", "Éligible aux aides", "Haut rendement"],
    gradient: "from-[#2b4a73] to-[#5b9bd5]",
  },
  {
    icon: Settings,
    title: "Entretien & Maintenance",
    description:
      "Un entretien régulier garantit la longévité et les performances de vos équipements. Nous proposons des contrats annuels pour votre tranquillité.",
    features: ["Contrat annuel", "Préventif & curatif", "Toutes marques", "Conformité réglementaire"],
    gradient: "from-[#5b9bd5] to-[#4a90c2]",
  },
  {
    icon: AlertTriangle,
    title: "Dépannage rapide",
    description:
      "Panne, dysfonctionnement ou urgence ? Nous intervenons rapidement pour diagnostiquer et réparer votre installation. Disponible 7 jours sur 7.",
    features: ["Intervention rapide", "Diagnostic précis", "7j/7", "Toutes marques"],
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
            Nos métiers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] leading-tight">
            Des solutions complètes,
            <br />
            <span className="text-gradient">un seul interlocuteur.</span>
          </h2>
          <p className="mt-5 text-lg text-[#5a7394] leading-relaxed max-w-2xl">
            De l'installation au dépannage, OC CLIM vous accompagne
            avec un service fiable et personnalisé. Chaque projet est unique,
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
