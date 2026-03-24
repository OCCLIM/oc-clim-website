import { Wind, Flame, Wrench, AlertTriangle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Climatisation",
    description:
      "Installation de systèmes mono-split, bi-split et multi-split adaptés à votre espace. Confort garanti été comme hiver avec des équipements réversibles.",
    features: ["Mono & Multi-split", "Réversible", "Silencieux", "A+++"],
  },
  {
    icon: Flame,
    title: "Pompes à chaleur",
    description:
      "Solutions Air/Eau et Air/Air haute performance. Réduisez votre facture énergétique jusqu'à 70 % tout en chauffant efficacement votre logement.",
    features: ["Air/Eau & Air/Air", "Jusqu'à -70%", "Aides financières", "Haut rendement"],
  },
  {
    icon: Wrench,
    title: "Entretien & Maintenance",
    description:
      "Un entretien régulier garantit la longévité et la performance de vos équipements. Contrats annuels disponibles pour votre tranquillité.",
    features: ["Contrat annuel", "Toutes marques", "Préventif", "Conformité"],
  },
  {
    icon: AlertTriangle,
    title: "Dépannage",
    description:
      "Panne ou urgence ? Diagnostic rapide et réparation efficace de votre installation. Disponible 7 jours sur 7, y compris les jours fériés.",
    features: ["7j/7", "Diagnostic précis", "Toutes marques", "Intervention rapide"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#111111] mb-3">
            Nos services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] leading-tight">
            Des solutions complètes pour votre confort
          </h2>
          <p className="mt-4 text-lg text-[#777777] leading-relaxed">
            De l'installation au dépannage, OC CLIM vous accompagne avec un service
            fiable, personnalisé et transparent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 border border-[#E5E5E5] hover:border-[#111111]/20 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon + number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-xl bg-[#111111]/10 flex items-center justify-center group-hover:bg-[#111111] transition-colors duration-300">
                    <Icon className="h-5 w-5 text-[#111111] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-5xl font-extrabold text-[#E5E5E5] group-hover:text-[#111111]/10 transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#111111] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#777777] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs font-medium bg-[#F5F5F5] text-[#444444] px-2.5 py-1 rounded-md"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111] hover:gap-2.5 transition-all">
                  Demander un devis
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
