import { Clock, Shield, Award, Banknote, MapPin, Heart } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Temps de réponse moyen de 22 minutes. Nous intervenons rapidement pour tous vos besoins en climatisation.",
    color: "bg-[#00b4d8]",
  },
  {
    icon: Shield,
    title: "Garantie décennale",
    description:
      "Tous nos travaux sont couverts par une garantie décennale pour votre tranquillité d'esprit.",
    color: "bg-[#0057b8]",
  },
  {
    icon: Award,
    title: "Expertise certifiée",
    description:
      "Titulaire d'un Bac Pro TFCA, nous maîtrisons parfaitement les systèmes de climatisation et pompes à chaleur.",
    color: "bg-[#00b4d8]",
  },
  {
    icon: Banknote,
    title: "Devis gratuit & transparent",
    description:
      "Recevez un devis détaillé et sans engagement. Pas de mauvaise surprise, tout est clair dès le départ.",
    color: "bg-[#0057b8]",
  },
  {
    icon: MapPin,
    title: "Proximité Bordeaux",
    description:
      "Basés à Cestas (33610), nous intervenons sur toute la métropole bordelaise et ses alentours.",
    color: "bg-[#00b4d8]",
  },
  {
    icon: Heart,
    title: "Satisfaction 5/5",
    description:
      "Note de 5/5 sur AlloVoisins avec plus de 110 recommandations clients. Votre satisfaction est notre priorité.",
    color: "bg-[#0057b8]",
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a]">
            Pourquoi nous choisir
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            OC CLIM, c&apos;est l&apos;assurance d&apos;un service de qualité,
            rapide et professionnel pour tous vos projets de climatisation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 ${reason.color} rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
