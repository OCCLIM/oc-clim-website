import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kevin D.",
    location: "Bordeaux",
    text: "Personne aimable, a su se rendre disponible rapidement pour résoudre nos problèmes.",
    initials: "KD",
  },
  {
    name: "Benjamin M.",
    location: "Cestas",
    text: "Révision d'une pompe à chaleur, très bon contact, très professionnel. Je recommande.",
    initials: "BM",
  },
  {
    name: "Sandrine S.",
    location: "Bordeaux Métropole",
    text: "Professionnel courtois, efficace, expliquant clairement la problématique rencontrée.",
    initials: "SS",
  },
  {
    name: "M. Boucher",
    location: "Gironde",
    text: "Une réactivité dans les échanges. Très satisfait de la prestation, je recommande vivement OC CLIM.",
    initials: "MB",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 sm:py-32 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0EA5E9] mb-3">
            Témoignages
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            La parole à nos clients
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm text-slate-400">
              5/5 sur AlloVoisins · Avis vérifiés
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-300"
            >
              <Quote className="h-6 w-6 text-[#0369A1]/30 mb-4" />
              <p className="text-slate-300 leading-relaxed text-[15px] mb-6">
                « {t.text} »
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="h-9 w-9 rounded-lg bg-[#0369A1]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#0EA5E9]">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="text-center mt-10">
          <a
            href="https://www.allovoisins.com/p/occlim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#0EA5E9] transition-colors"
          >
            <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
            Voir tous les avis sur AlloVoisins
          </a>
        </div>
      </div>
    </section>
  );
}
