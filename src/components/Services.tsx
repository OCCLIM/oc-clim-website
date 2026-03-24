"use client";

import { Snowflake, Flame, Settings, AlertTriangle } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Snowflake,
    title: "Installation climatisation",
    description:
      "Installation professionnelle de systèmes de climatisation mono-split, bi-split, tri-split et multi-split. Solutions adaptées à chaque configuration pour un confort optimal été comme hiver.",
    tags: ["Mono-split", "Bi-split", "Tri-split", "Multi-split", "Réversible"],
  },
  {
    num: "02",
    icon: Flame,
    title: "Pompes à chaleur",
    description:
      "Mise en place de pompes à chaleur Air/Eau et Air/Air haute performance. Réduisez votre facture énergétique jusqu\u2019à 70\u00a0% tout en chauffant efficacement votre logement.",
    tags: ["Air/Eau", "Air/Air", "Économies d'énergie", "Éligible aides"],
  },
  {
    num: "03",
    icon: Settings,
    title: "Entretien & Maintenance",
    description:
      "Maintenance préventive et curative de vos installations. Contrats d\u2019entretien annuels pour garantir la longévité et les performances de vos équipements.",
    tags: ["Contrat annuel", "Préventif", "Curatif", "Toutes marques"],
  },
  {
    num: "04",
    icon: AlertTriangle,
    title: "Dépannage & Diagnostic",
    description:
      "Intervention rapide en cas de panne ou dysfonctionnement. Diagnostic précis et réparation sur toutes marques\u00a0: Daikin, Mitsubishi, Heiwa, Ariston et plus.",
    tags: ["Intervention rapide", "Toutes marques", "Diagnostic", "Réparation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-4">
            Nos services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark">
            Des solutions complètes pour votre confort
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            De l&apos;installation au dépannage, OC&nbsp;CLIM vous accompagne à
            chaque étape avec expertise et réactivité.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="group relative bg-light rounded-2xl p-7 hover:bg-primary hover:shadow-xl hover:shadow-primary/15 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Corner number */}
                <span className="absolute top-5 right-5 text-5xl font-black leading-none select-none text-gray-200/80 transition-colors duration-300 group-hover:text-white/15">
                  {service.num}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-bold text-dark group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
