"use client";

import { useState } from "react";
import { X, Calendar, Award, ArrowRight } from "lucide-react";
import Image from "next/image";

const brands = [
  {
    name: "Daikin",
    fullName: "Daikin Industries",
    founded: "1924 — Osaka, Japon",
    specialty: "Pompes à chaleur, climatisation réversible",
    description: "Leader mondial de la climatisation depuis 1924. Présent dans plus de 150 pays, Daikin est la référence en matière de pompes à chaleur et systèmes réversibles ultra-performants avec un engagement fort pour l'environnement.",
    color: "#004C97",
    logo: "/images/brands/daikin.jpg",
  },
  {
    name: "Mitsubishi Electric",
    fullName: "Mitsubishi Electric",
    founded: "1921 — Tokyo, Japon",
    specialty: "Technologie Inverter, systèmes gainables",
    description: "Géant japonais de l'électronique et du génie climatique. Ses systèmes sont parmi les plus silencieux et économes au monde. La technologie Inverter de Mitsubishi a révolutionné le secteur.",
    color: "#E60012",
    logo: "/images/brands/mitsubishi.png",
  },
  {
    name: "Atlantic",
    fullName: "Groupe Atlantic",
    founded: "1968 — La Roche-sur-Yon, France",
    specialty: "Chauffage, eau chaude, climatisation",
    description: "Groupe français et spécialiste hexagonal du confort thermique. Avec plus de 12 000 collaborateurs, Atlantic conçoit des solutions de chauffage, climatisation et production d'eau chaude. Savoir-faire 100 % français.",
    color: "#005BAA",
    logo: "/images/brands/atlantic.jpg",
  },
  {
    name: "Heiwa",
    fullName: "Heiwa",
    founded: "France",
    specialty: "Pompes à chaleur air/eau haute performance",
    description: "Marque française spécialisée dans les pompes à chaleur, combinant technologie japonaise et expertise européenne. COP parmi les plus élevés du marché, avec un SAV réactif.",
    color: "#1A9E8F",
    logo: "/images/brands/heiwa.png",
  },
  {
    name: "Ariston",
    fullName: "Ariston Thermo Group",
    founded: "1930 — Fabriano, Italie",
    specialty: "Chauffe-eaux thermodynamiques, chauffage",
    description: "Leader européen du chauffage et de la production d'eau chaude depuis 1930. Présent dans 40 pays, Ariston est reconnu pour ses chauffe-eaux thermodynamiques innovants.",
    color: "#E31E24",
    logo: "/images/brands/ariston.png",
  },
  {
    name: "Toshiba",
    fullName: "Toshiba Carrier",
    founded: "1875 — Tokyo, Japon",
    specialty: "Compresseur Inverter, systèmes VRF",
    description: "Pionnier technologique depuis 1875 et inventeur du premier compresseur Inverter en 1981. Toshiba propose des systèmes ultra-performants avec des rendements exceptionnels.",
    color: "#FF0000",
    logo: "/images/brands/toshiba.png",
  },
  {
    name: "Panasonic",
    fullName: "Panasonic Corporation",
    founded: "1918 — Osaka, Japon",
    specialty: "Purification nanoe™ X, PAC haute efficacité",
    description: "Multinationale japonaise fondée en 1918, acteur majeur du confort climatique. Ses systèmes intègrent la technologie nanoe™ X alliant innovation, durabilité et performance.",
    color: "#0068B7",
    logo: "/images/brands/panasonic.jpg",
  },
  {
    name: "Fujitsu",
    fullName: "Fujitsu General",
    founded: "1936 — Kawasaki, Japon",
    specialty: "Fiabilité, compresseurs silencieux",
    description: "Acteur japonais de référence depuis 1936, spécialisé dans la climatisation résidentielle et commerciale. Reconnu pour la fiabilité de ses compresseurs et leur faible niveau sonore.",
    color: "#E4002B",
    logo: "/images/brands/fujitsu.png",
  },
];

export default function BrandMarquee() {
  const [selected, setSelected] = useState<typeof brands[0] | null>(null);
  const items = [...brands, ...brands];

  return (
    <>
      <section className="py-6 sm:py-8 bg-white border-y border-[#eee] overflow-hidden">
        {/* Label */}
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-[#bbb] mb-5">
          Nos marques partenaires
        </p>

        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Marquee track */}
          <div className="flex items-center animate-marquee-fast hover:[animation-play-state:paused]">
            {items.map((brand, i) => (
              <button
                key={`${brand.name}-${i}`}
                onClick={() => setSelected(brand)}
                className="group flex-shrink-0 mx-6 sm:mx-10 flex items-center gap-3 cursor-pointer select-none"
              >
                {/* Logo */}
                <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-[#f8f8f8] border border-[#eee] flex items-center justify-center overflow-hidden p-1.5 group-hover:border-[#ddd] group-hover:shadow-sm transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* Name */}
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#bbb] group-hover:text-[#333338] transition-colors duration-300 whitespace-nowrap">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal marque */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full overflow-hidden relative animate-fade-in-up shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-8 pt-8 pb-6" style={{ background: `linear-gradient(135deg, ${selected.color}15, ${selected.color}05)` }}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-[#333]" />
              </button>

              {/* Brand logo + name */}
              <div className="flex items-center gap-4 mb-2">
                <div className="relative h-14 w-14 rounded-xl bg-white border border-[#eee] flex items-center justify-center overflow-hidden p-2 shadow-sm">
                  <Image
                    src={selected.logo}
                    alt={selected.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#333338]">{selected.name}</h3>
                  <p className="text-sm text-[#777]">{selected.fullName}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-8 py-6">
              <p className="text-sm text-[#555] leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-[#999] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#999] text-xs uppercase tracking-wider">Fondé en</span>
                    <p className="font-semibold text-[#333338]">{selected.founded}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Award className="h-4 w-4 text-[#999] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#999] text-xs uppercase tracking-wider">Spécialité</span>
                    <p className="font-semibold text-[#333338]">{selected.specialty}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#eee] flex items-center justify-between">
                <p className="text-xs text-[#999]">
                  OC CLIM — Installateur partenaire
                </p>
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#333338] hover:text-[#555] transition-colors"
                >
                  Demander un devis
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
