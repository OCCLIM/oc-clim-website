import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kevin D.",
    location: "Bordeaux",
    text: "Personne aimable, a su se rendre disponible rapidement pour r\u00e9soudre nos probl\u00e8mes.",
    initials: "KD",
    color: "from-[#1e3a5f] to-[#2b4a73]",
  },
  {
    name: "Benjamin M.",
    location: "Cestas",
    text: "R\u00e9vision d\u2019une pompe \u00e0 chaleur, tr\u00e8s bon contact, tr\u00e8s professionnel. Je recommande.",
    initials: "BM",
    color: "from-[#2b4a73] to-[#5b9bd5]",
  },
  {
    name: "Sandrine S.",
    location: "Bordeaux M\u00e9tropole",
    text: "Professionnel courtois, efficace, expliquant clairement la probl\u00e9matique rencontr\u00e9e.",
    initials: "SS",
    color: "from-[#5b9bd5] to-[#4a90c2]",
  },
  {
    name: "M. Boucher",
    location: "Gironde",
    text: "Une r\u00e9activit\u00e9 dans les \u00e9changes. Tr\u00e8s satisfait de la prestation, je recommande vivement OC CLIM.",
    initials: "MB",
    color: "from-[#4a90c2] to-[#1e3a5f]",
  },
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-24 sm:py-32 bg-[#0f1e30] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#5b9bd5]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#1e3a5f]/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5b9bd5]/10 text-[#7bb3e0] text-sm font-semibold tracking-wide uppercase mb-5">
            <Star className="h-3.5 w-3.5" />
            T\u00e9moignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            La parole &agrave; nos clients
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-[#a8bcd2] text-sm font-medium">
              5/5 sur AlloVoisins &middot; Avis v\u00e9rifi\u00e9s
            </span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-7 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-[#5b9bd5]/20 mb-5" />

              {/* Text */}
              <p className="text-[#a8bcd2] leading-relaxed mb-8 text-[15px]">
                &laquo;&nbsp;{t.text}&nbsp;&raquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} shadow-lg`}>
                  <span className="text-xs font-bold text-white">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#5b9bd5]/60 text-xs">{t.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Source badge */}
        <div className="text-center mt-12">
          <a
            href="https://www.allovoisins.com/p/occlim"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm text-[#a8bcd2] hover:bg-white/10 transition-colors duration-300"
          >
            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
            Voir tous les avis sur AlloVoisins
          </a>
        </div>
      </div>
    </section>
  );
}
