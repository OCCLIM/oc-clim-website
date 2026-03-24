"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projets = [
  { src: "/images/projets/04-gainable-mitsubishi.jpg", title: "Clim gainable Mitsubishi avec Airzone", tag: "Gainable" },
  { src: "/images/projets/07-tri-split-daikin.jpg", title: "Tri-split Daikin avec récupération condensats", tag: "Tri-split" },
  { src: "/images/projets/01-thermo-ariston.jpg", title: "Installation thermodynamique Ariston", tag: "Thermodynamique" },
  { src: "/images/projets/02-mono-split-heiwa.jpg", title: "2 mono-split Heiwa + extraction d'air", tag: "Mono-split" },
  { src: "/images/projets/06-console-mitsubishi.jpg", title: "Console Mitsubishi", tag: "Console" },
  { src: "/images/projets/08-multi-split-daikin.jpg", title: "Multi-split Daikin", tag: "Multi-split" },
  { src: "/images/projets/09-bi-split-heiwa.jpg", title: "Bi-split Heiwa", tag: "Bi-split" },
  { src: "/images/projets/05-mono-mitsubishi.jpg", title: "Mono-split Mitsubishi", tag: "Mono-split" },
  { src: "/images/projets/10-maintenance-pac.jpg", title: "Maintenance PAC Air/Eau Daikin", tag: "Maintenance" },
  { src: "/images/projets/03-deco-clim.jpg", title: "Pose déco clim", tag: "Déco" },
  { src: "/images/projets/12-split-daikin.jpg", title: "Split Daikin", tag: "Split" },
  { src: "/images/projets/11-depannage.jpg", title: "Dépannage diagnostic", tag: "Dépannage" },
];

export default function Realisations() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  function prev() {
    if (lightbox === null) return;
    setLightbox(lightbox === 0 ? projets.length - 1 : lightbox - 1);
  }
  function next() {
    if (lightbox === null) return;
    setLightbox(lightbox === projets.length - 1 ? 0 : lightbox + 1);
  }

  return (
    <section id="realisations" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#111111] mb-3">
            Nos réalisations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] leading-tight">
            Des projets concrets, des clients satisfaits
          </h2>
          <p className="mt-4 text-lg text-[#777777]">
            Découvrez quelques-unes de nos installations réalisées sur Bordeaux Métropole.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {projets.map((p, i) => (
            <button
              key={p.src}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              style={{ perspective: "600px" }}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#111111] text-white px-2 py-0.5 rounded mb-1">
                  {p.tag}
                </span>
                <p className="text-white text-xs font-medium leading-tight">{p.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 text-white/70 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 text-white/70 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 text-white/70 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl w-full aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={projets[lightbox].src}
              alt={projets[lightbox].title}
              fill
              className="object-contain rounded-lg"
              sizes="90vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4 rounded-b-lg">
              <p className="text-white font-semibold">{projets[lightbox].title}</p>
              <p className="text-white/60 text-sm">{lightbox + 1} / {projets.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
