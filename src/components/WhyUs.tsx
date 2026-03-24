import { Clock, Shield, Award, Banknote, MapPin, Heart, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Réactivité inégalée",
    description: "Temps de réponse moyen de 22 minutes. Quand vous avez besoin de nous, nous sommes là.",
    highlight: "22 min",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts. Vous êtes protégé pendant 10 ans, en toute sérénité.",
    highlight: "10 ans",
  },
  {
    icon: Award,
    title: "Expertise certifiée",
    description: "Diplômé Bac Pro TFCA, Can maîtrise chaque aspect des systèmes de climatisation et pompes à chaleur.",
    highlight: "Bac Pro",
  },
  {
    icon: Banknote,
    title: "Devis gratuit & transparent",
    description: "Un devis détaillé, sans surprise. Vous savez exactement ce que vous payez et pourquoi.",
    highlight: "0€",
  },
  {
    icon: MapPin,
    title: "Proximité Bordeaux",
    description: "Basé à Cestas, nous intervenons sur toute la métropole bordelaise et alentours. Un vrai artisan local.",
    highlight: "33610",
  },
  {
    icon: Heart,
    title: "Satisfaction totale",
    description: "Noté 5/5 sur AlloVoisins. Nos clients nous recommandent parce que nous faisons les choses bien.",
    highlight: "5/5",
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 sm:py-32 bg-[#f0f6ff] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#5b9bd5]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e3a5f]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#1e3a5f]/10 text-[#1e3a5f] mb-5">
            <Award className="h-3.5 w-3.5" />
            Nos engagements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] leading-tight">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="mt-5 text-lg text-[#5a7394] leading-relaxed">
            OC CLIM, c'est la promesse d'un service humain,
            professionnel et sans compromis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group relative bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgba(30,58,95,0.04)] border border-[#e5eef7] hover:shadow-[0_8px_40px_rgba(30,58,95,0.1)] hover:-translate-y-1 transition-all duration-500"
              >
                {/* Highlight number */}
                <span className="absolute top-6 right-6 text-3xl font-black text-[#5b9bd5]/10 group-hover:text-[#5b9bd5]/20 transition-colors duration-500">
                  {reason.highlight}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#5b9bd5] flex items-center justify-center shadow-lg shadow-[#1e3a5f]/15 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-[#1e3a5f]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm text-[#5a7394] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#1e3a5f] to-[#5b9bd5] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-[#1e3a5f]/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Parlons de votre projet
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
