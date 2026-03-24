const testimonials = [
  {
    name: "Marie L.",
    location: "Bordeaux",
    rating: 5,
    text: "Excellent professionnel ! Can est intervenu rapidement pour installer ma climatisation. Travail soign\u00e9, explications claires et prix tr\u00e8s correct. Je recommande vivement.",
  },
  {
    name: "Thomas D.",
    location: "Cestas",
    rating: 5,
    text: "Tr\u00e8s r\u00e9actif et professionnel. D\u00e9pannage effectu\u00e9 en un temps record. La climatisation refonctionne parfaitement. Merci OC CLIM !",
  },
  {
    name: "Sophie B.",
    location: "Pessac",
    rating: 5,
    text: "Installation d'une pompe \u00e0 chaleur air/air impeccable. Can a pris le temps de bien nous conseiller sur le mod\u00e8le adapt\u00e9. Tr\u00e8s satisfaite du r\u00e9sultat.",
  },
  {
    name: "Pierre M.",
    location: "Talence",
    rating: 5,
    text: "Service au top ! Entretien annuel effectu\u00e9 avec soin. On sent le vrai professionnel passionn\u00e9 par son m\u00e9tier. Prix raisonnable.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 sm:py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Avis clients
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Ce que disent nos clients
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <Stars count={5} />
            <span className="text-white/70 text-sm">
              5/5 sur AlloVoisins
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              <Stars count={t.rating} />
              <p className="mt-4 text-sm text-white/80 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-white/50">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
