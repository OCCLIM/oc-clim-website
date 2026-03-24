"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const brands = [
  {
    name: "Daikin",
    logo: "/images/logo.png",
    history: "Leader mondial de la climatisation depuis 1924, Daikin est une référence japonaise en matière de confort thermique. Présent dans plus de 150 pays, Daikin est reconnu pour ses pompes à chaleur et systèmes réversibles ultra-performants, avec un engagement fort pour l'environnement et les fluides frigorigènes à faible impact.",
    founded: "1924 — Osaka, Japon",
    specialty: "Pompes à chaleur, climatisation réversible",
  },
  {
    name: "Mitsubishi Electric",
    logo: "/images/logo.png",
    history: "Fondé en 1921, Mitsubishi Electric est un géant japonais de l'électronique et du génie climatique. Ses systèmes de climatisation sont parmi les plus silencieux et économes au monde. La technologie Inverter de Mitsubishi a révolutionné le secteur, offrant un confort constant tout en réduisant la consommation jusqu'à 30 %.",
    founded: "1921 — Tokyo, Japon",
    specialty: "Technologie Inverter, systèmes gainables",
  },
  {
    name: "Atlantic",
    logo: "/images/logo.png",
    history: "Groupe français fondé en 1968 à La Roche-sur-Yon, Atlantic est le spécialiste hexagonal du confort thermique. Avec plus de 12 000 collaborateurs, Atlantic conçoit et fabrique des solutions de chauffage, climatisation et production d'eau chaude. Un savoir-faire 100 % français reconnu dans toute l'Europe.",
    founded: "1968 — La Roche-sur-Yon, France",
    specialty: "Chauffage, eau chaude, climatisation",
  },
  {
    name: "Heiwa",
    logo: "/images/logo.png",
    history: "Marque française spécialisée dans les pompes à chaleur, Heiwa combine technologie japonaise et expertise européenne. Leurs PAC air/eau affichent des COP parmi les plus élevés du marché, avec une fabrication soignée et un service après-vente réactif. Le choix idéal pour le marché français.",
    founded: "France",
    specialty: "Pompes à chaleur air/eau haute performance",
  },
  {
    name: "Ariston",
    logo: "/images/logo.png",
    history: "Fondé en 1930 en Italie, Ariston (groupe Ariston Thermo) est un leader européen du chauffage et de la production d'eau chaude. Présent dans 40 pays avec 7 000 employés, Ariston est reconnu pour ses chauffe-eaux thermodynamiques innovants et ses solutions à haute efficacité énergétique.",
    founded: "1930 — Fabriano, Italie",
    specialty: "Chauffe-eaux thermodynamiques, chauffage",
  },
  {
    name: "Toshiba",
    logo: "/images/logo.png",
    history: "Pionnier technologique japonais depuis 1875, Toshiba est à l'origine de nombreuses innovations en climatisation. Inventeur du premier compresseur Inverter en 1981, Toshiba propose des systèmes ultra-performants avec des rendements exceptionnels. Une fiabilité éprouvée depuis plus d'un siècle.",
    founded: "1875 — Tokyo, Japon",
    specialty: "Compresseur Inverter, systèmes VRF",
  },
  {
    name: "Panasonic",
    logo: "/images/logo.png",
    history: "Multinationale japonaise fondée en 1918, Panasonic est un acteur majeur du confort climatique. Ses systèmes intègrent la technologie nanoe™ X qui purifie l'air tout en climatisant. Panasonic allie innovation, durabilité et performance pour un confort intérieur optimal.",
    founded: "1918 — Osaka, Japon",
    specialty: "Purification nanoe™ X, PAC haute efficacité",
  },
  {
    name: "Fujitsu",
    logo: "/images/logo.png",
    history: "Acteur japonais de référence depuis 1936, Fujitsu General est spécialisé dans la climatisation résidentielle et commerciale. Reconnu pour la fiabilité exceptionnelle de ses compresseurs et leur faible niveau sonore, Fujitsu est le choix des professionnels exigeants en quête de durabilité.",
    founded: "1936 — Kawasaki, Japon",
    specialty: "Fiabilité, compresseurs silencieux",
  },
];

export default function BrandMarquee() {
  const [selected, setSelected] = useState<typeof brands[0] | null>(null);
  const items = [...brands, ...brands];

  return (
    <>
      <section className="py-10 bg-white border-y border-[#eee] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[#999]">
            Nos marques partenaires
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee-fast hover:[animation-play-state:paused]">
            {items.map((brand, i) => (
              <button
                key={`${brand.name}-${i}`}
                onClick={() => setSelected(brand)}
                className="flex-shrink-0 mx-8 flex flex-col items-center gap-2 text-[#ccc] hover:text-[#111] transition-all duration-300 cursor-pointer group"
              >
                <div className="h-12 w-12 rounded-xl bg-[#f5f5f5] group-hover:bg-[#111] flex items-center justify-center transition-all duration-300 overflow-hidden p-2">
                  <Image
                    src="/images/logo.png"
                    alt={brand.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-bold tracking-wide whitespace-nowrap">{brand.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal histoire marque */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-fade-in-up shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-[#f5f5f5] hover:bg-[#eee] flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4 text-[#111]" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-xl bg-[#f5f5f5] flex items-center justify-center p-2">
                <Image
                  src="/images/logo.png"
                  alt={selected.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#111]">{selected.name}</h3>
                <p className="text-xs text-[#999] font-medium">{selected.founded}</p>
              </div>
            </div>

            <p className="text-sm text-[#555] leading-relaxed mb-5">
              {selected.history}
            </p>

            <div className="flex items-center gap-2 bg-[#f5f5f5] rounded-lg px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#999]">Spécialité</span>
              <span className="text-xs font-semibold text-[#111]">{selected.specialty}</span>
            </div>

            <p className="mt-5 text-xs text-[#999] text-center">
              OC CLIM est installateur certifié de cette marque
            </p>
          </div>
        </div>
      )}
    </>
  );
}
