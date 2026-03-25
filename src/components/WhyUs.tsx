import { Clock, Shield, Award, Banknote, MapPin, Heart, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Réactivité",
    description: "Réponse sous 24h, intervention rapide. Quand vous avez besoin de nous, nous sommes là.",
    accent: "24h",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description: "Tous nos travaux sont couverts pendant 10 ans. Vous êtes protégé en toute sérénité.",
    accent: "10 ans",
  },
  {
    icon: Award,
    title: "Expertise reconnue",
    description: "Diplômé Bac Pro TFCA, Can maîtrise chaque aspect des systèmes climatiques et thermiques.",
    accent: "Pro",
  },
  {
    icon: Banknote,
    title: "Devis gratuit",
    description: "Un devis détaillé et transparent, sans surprise. Vous savez ce que vous payez et pourquoi.",
    accent: "0 €",
  },
  {
    icon: MapPin,
    title: "Proximité",
    description: "Nous intervenons sur toute la métropole bordelaise et ses alentours. Un vrai artisan local, toujours proche de vous.",
    accent: "33",
  },
  {
    icon: Heart,
    title: "Satisfaction",
    description: "Noté 5/5 sur AlloVoisins. Nos clients nous recommandent parce que nous faisons les choses bien.",
    accent: "5/5",
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 sm:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#2A2A2E] mb-3">
            Nos engagements
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2A2A2E] leading-tight">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="mt-4 text-lg text-[#777777]">
            OC CLIM, c'est la promesse d'un service humain, professionnel et sans compromis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group bg-white rounded-2xl p-7 border border-[#E5E5E5] hover:border-[#111111]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-black/10 flex items-center justify-center group-hover:bg-[#2A2A2E] transition-colors duration-300">
                    <Icon className="h-4.5 w-4.5 text-[#2A2A2E] group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <span className="text-2xl font-extrabold text-[#E5E5E5] group-hover:text-[#2A2A2E]/15 transition-colors">
                    {r.accent}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#2A2A2E] mb-2">{r.title}</h3>
                <p className="text-sm text-[#777777] leading-relaxed">{r.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2A2A2E] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#2A2A2E]"
          >
            Parlons de votre projet
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
