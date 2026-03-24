import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marie L.",
    location: "Bordeaux",
    rating: 5,
    text: "Installation de notre climatisation réversible en plein été. M. Oruc a été très réactif, le devis était clair et les travaux réalisés en une journée. Un vrai professionnel, je recommande vivement !",
  },
  {
    name: "Thomas D.",
    location: "Cestas",
    rating: 5,
    text: "Panne de clim un samedi en pleine canicule. J'ai envoyé un message et en moins de 30 minutes j'avais une réponse. Dépannage effectué le jour même. Service au top, merci OC CLIM !",
  },
  {
    name: "Sophie B.",
    location: "Pessac",
    rating: 5,
    text: "Excellents conseils pour le choix de notre pompe à chaleur air/eau. Le rapport qualité-prix est imbattable et les économies sur notre facture de chauffage sont bien réelles. Très satisfaite.",
  },
  {
    name: "Pierre M.",
    location: "Talence",
    rating: 5,
    text: "Contrat d'entretien annuel pour nos deux climatiseurs. Ponctuel, minutieux et toujours de bon conseil. Cela fait deux ans que nous faisons confiance à OC CLIM, sans aucune déception.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00b4d8]/10 text-[#00b4d8] text-sm font-medium mb-4">
            Avis clients
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ce que disent nos clients
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-300 text-sm">5/5 sur AlloVoisins</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <Quote className="w-8 h-8 text-[#00b4d8]/30 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto">
                <StarRating rating={t.rating} />
                <p className="text-white font-semibold mt-3">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
