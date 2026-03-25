"use client";

import { useState } from "react";
import { X, Calendar, Award, MapPin, ArrowRight } from "lucide-react";

const brands = [
  {
    name: "DAIKIN",
    fullName: "Daikin Industries",
    founded: "1924 — Osaka, Japon",
    specialty: "Pompes à chaleur, climatisation réversible",
    description: "Leader mondial de la climatisation depuis 1924. Présent dans plus de 150 pays, Daikin est la référence en matière de pompes à chaleur et systèmes réversibles ultra-performants avec un engagement fort pour l'environnement.",
    color: "#004C97",
  },
  {
    name: "MITSUBISHI",
    fullName: "Mitsubishi Electric",
    founded: "1921 — Tokyo, Japon",
    specialty: "Technologie Inverter, systèmes gainables",
    description: "Géant japonais de l'électronique et du génie climatique. Ses systèmes sont parmi les plus silencieux et économes au monde. La technologie Inverter de Mitsubishi a révolutionné le secteur, réduisant la consommation jusqu'à 30 %.",
    color: "#E60012",
  },
  {
    name: "ATLANTIC",
    fullName: "Groupe Atlantic",
    founded: "1968 — La Roche-sur-Yon, France",
    specialty: "Chauffage, eau chaude, climatisation",
    description: "Groupe français et spécialiste hexagonal du confort thermique. Avec plus de 12 000 collaborateurs, Atlantic conçoit et fabrique des solutions de chauffage, climatisation et production d'eau chaude. Un savoir-faire 100 % français.",
    color: "#005BAA",
  },
  {
    name: "HEIWA",
    fullName: "Heiwa",
    founded: "France",
    specialty: "Pompes à chaleur air/eau haute performance",
    description: "Marque française spécialisée dans les pompes à chaleur, combinant technologie japonaise et expertise européenne. Leurs PAC air/eau affichent des COP parmi les plus élevés du marché, avec un service après-vente réactif.",
    color: "#1A1A1A",
  },
  {
    name: "ARISTON",
    fullName: "Ariston Thermo Group",
    founded: "1930 — Fabriano, Italie",
    specialty: "Chauffe-eaux thermodynamiques, chauffage",
    description: "Leader européen du chauffage et de la production d'eau chaude depuis 1930. Présent dans 40 pays avec 7 000 employés, Ariston est reconnu pour ses chauffe-eaux thermodynamiques innovants et ses solutions à haute efficacité énergétique.",
    color: "#E31E24",
  },
  {
    name: "TOSHIBA",
    fullName: "Toshiba Carrier",
    founded: "1875 — Tokyo, Japon",
    specialty: "Compresseur Inverter, systèmes VRF",
    description: "Pionnier technologique depuis 1875 et inventeur du premier compresseur Inverter en 1981. Toshiba propose des systèmes ultra-performants avec des rendements exceptionnels. Une fiabilité éprouvée depuis plus d'un siècle.",
    color: "#FF0000",
  },
  {
    name: "PANASONIC",
    fullName: "Panasonic Corporation",
    founded: "1918 — Osaka, Japon",
    specialty: "Purification nanoe™ X, PAC haute efficacité",
    description: "Multinationale japonaise fondée en 1918, acteur majeur du confort climatique. Ses systèmes intègrent la technologie nanoe™ X qui purifie l'air tout en climatisant, alliant innovation, durabilité et performance.",
    color: "#0068B7",
  },
  {
    name: "FUJITSU",
    fullName: "Fujitsu General",
    founded: "1936 — Kawasaki, Japon",
    specialty: "Fiabilité, compresseurs silencieux",
    description: "Acteur japonais de référence depuis 1936, spécialisé dans la climatisation résidentielle et commerciale. Reconnu pour la fiabilité exceptionnelle de ses compresseurs et leur faible niveau sonore.",
    color: "#E4002B",
  },
];

export default function BrandMarquee() {
  const [selected, setSelected] = useState<typeof brands[0] | null>(null);
  const items = [...brands, ...brands];

  return (
    <>
      <section className="py-8 bg-white border-y border-[#eee] overflow-hidden">
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee-fast hover:[animation-play-state:paused]">
            {items.map((brand, i) => (
              <button
                key={`${brand.name}-${i}`}
                onClick={() => setSelected(brand)}
                className="flex-shrink-0 mx-8 text-sm font-bold tracking-[0.15em] text-[#ccc] hover:text-[#333338] transition-colors duration-300 cursor-pointer select-none"
              >
                {brand.name}
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
            {/* Header with brand color */}
            <div className="relative px-8 pt-8 pb-6" style={{ background: `linear-gradient(135deg, ${selected.color}15, ${selected.color}05)` }}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4 text-[#333]" />
              </button>

              {/* Brand logo as styled text */}
              <div
                className="inline-block text-3xl font-black tracking-wider mb-3"
                style={{ color: selected.color }}
              >
                {selected.name}
              </div>
              <p className="text-sm font-medium text-[#555]">{selected.fullName}</p>
            </div>

            {/* Content */}
            <div className="px-8 py-6">
              <p className="text-sm text-[#555] leading-relaxed mb-6">
                {selected.description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-[#999] shrink-0" />
                  <span className="text-[#777]">Fondé en</span>
                  <span className="font-semibold text-[#333338]">{selected.founded}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Award className="h-4 w-4 text-[#999] shrink-0" />
                  <span className="text-[#777]">Spécialité</span>
                  <span className="font-semibold text-[#333338]">{selected.specialty}</span>
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
