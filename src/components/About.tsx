"use client";

import { GraduationCap, MapPin, Shield, CheckCircle, Users, Star, Clock } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "110+", label: "Clients satisfaits", icon: Users },
  { value: "5/5", label: "Note AlloVoisins", icon: Star },
  { value: "7j/7", label: "Disponibilité", icon: Clock },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image + overlay */}
          <ScrollReveal>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/projets/06-console-mitsubishi.jpg"
                  alt="Can Oruc — OC CLIM"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-[#E5E5E5]">
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="text-center">
                        <Icon className="mx-auto mb-1.5 h-4 w-4 text-[#333338]" />
                        <p className="text-xl font-extrabold text-[#333338]">{s.value}</p>
                        <p className="text-[10px] text-[#999] font-medium">{s.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: text */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999] mb-4">
                Qui sommes-nous
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333338] leading-tight mb-8">
                Un artisan passionné, proche de vous.
              </h2>

              <div className="space-y-5 text-[#666] text-base leading-relaxed">
                <p>
                  Derrière <strong className="text-[#333338]">OC CLIM</strong>, il y a une conviction :
                  chacun mérite un air sain et un confort thermique optimal chez soi.
                </p>
                <p>
                  <strong className="text-[#333338]">Can Oruc</strong>, fondateur et gérant, est technicien
                  diplômé d'un Bac Pro TFCA. Il intervient sur toute la <strong className="text-[#333338]">métropole bordelaise</strong> et ses alentours avec réactivité et professionnalisme.
                </p>
                <p>
                  Un interlocuteur unique, des conseils honnêtes, et un travail soigné. Pas de sous-traitance
                  — c'est Can qui étudie votre projet, réalise les travaux et assure le suivi.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: GraduationCap, text: "Bac Pro TFCA" },
                  { icon: Shield, text: "Garantie décennale" },
                  { icon: MapPin, text: "Bordeaux Métropole" },
                  { icon: CheckCircle, text: "SIRET vérifiable" },
                ].map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.text} className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-[#F0F0F0] flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-[#333338]" />
                      </div>
                      <span className="text-sm font-medium text-[#444]">{c.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Brands - now in dedicated BrandMarquee section */}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
