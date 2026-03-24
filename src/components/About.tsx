"use client";

import { Award, Users, Star, Clock, Shield, CheckCircle, GraduationCap, MapPin } from "lucide-react";

const milestones = [
  { year: "Formation", text: "Bac Pro Technicien du Froid et du Conditionnement de l\u2019Air" },
  { year: "Exp\u00e9rience", text: "Interventions sur tous types d\u2019installations climatiques" },
  { year: "Avril 2024", text: "Cr\u00e9ation d\u2019OC CLIM \u2014 l\u2019aventure commence" },
  { year: "Aujourd\u2019hui", text: "Plus de 110 clients satisfaits sur Bordeaux M\u00e9tropole" },
];

const stats = [
  { value: "110+", label: "Clients satisfaits", icon: Users },
  { value: "5/5", label: "Note AlloVoisins", icon: Star },
  { value: "22 min", label: "Temps de r\u00e9ponse", icon: Clock },
  { value: "7j/7", label: "Disponibilit\u00e9", icon: Award },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#f0f6ff] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#5b9bd5]/10 text-[#5b9bd5] mb-5">
            <Users className="h-3.5 w-3.5" />
            Notre histoire
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] leading-tight">
            Un artisan passionn&eacute;,
            <br />
            <span className="text-gradient">proche de vous.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Story + timeline */}
          <div className="lg:col-span-3">
            <div className="prose prose-lg max-w-none text-[#5a7394] leading-relaxed space-y-5">
              <p className="text-xl">
                Derri&egrave;re <strong className="text-[#1e3a5f]">OC&nbsp;CLIM</strong>, il y a une
                conviction simple&nbsp;: chacun m&eacute;rite un air sain et un confort
                thermique optimal chez soi.
              </p>
              <p>
                <strong className="text-[#1e3a5f]">Can Oruc</strong>, fondateur et g&eacute;rant,
                est un technicien dipl&ocirc;m&eacute; d&apos;un Bac&nbsp;Pro TFCA
                (Technicien du Froid et du Conditionnement de l&apos;Air). Bas&eacute;
                &agrave; <strong className="text-[#1e3a5f]">Cestas&nbsp;(33610)</strong>, il intervient
                sur toute la m&eacute;tropole bordelaise avec r&eacute;activit&eacute; et professionnalisme.
              </p>
              <p>
                Ce qui fait la diff&eacute;rence&nbsp;? Un interlocuteur unique, des
                conseils honn&ecirc;tes, et un travail soign&eacute;. Pas de
                sous-traitance, pas d&apos;interm&eacute;diaire &mdash; c&apos;est Can
                qui &eacute;tudie votre projet, r&eacute;alise les travaux et assure le
                suivi.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1e3a5f] via-[#5b9bd5] to-[#e5eef7]" />
              <div className="space-y-8">
                {milestones.map((m, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#1e3a5f] to-[#5b9bd5] shadow-md shadow-[#1e3a5f]/20">
                      <div className="h-2.5 w-2.5 rounded-full bg-white" />
                    </div>
                    <p className="text-sm font-bold text-[#5b9bd5] uppercase tracking-wide">{m.year}</p>
                    <p className="text-[#1e3a5f] font-medium mt-1">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile card + stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile card */}
            <div className="rounded-3xl bg-gradient-to-br from-[#1e3a5f] to-[#2b4a73] p-8 text-white shadow-2xl shadow-[#1e3a5f]/20">
              <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-4 ring-white/20">
                <span className="text-3xl font-black tracking-tight">CO</span>
              </div>
              <h3 className="text-center text-xl font-bold">Can Oruc</h3>
              <p className="mt-1 text-center text-sm text-white/70">Fondateur & G&eacute;rant</p>

              <div className="my-5 h-px bg-white/15" />

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <GraduationCap className="h-4 w-4 text-[#7bb3e0] shrink-0" />
                  <span className="text-white/85">Bac Pro TFCA</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-[#7bb3e0] shrink-0" />
                  <span className="text-white/85">Cestas (33610)</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="h-4 w-4 text-[#7bb3e0] shrink-0" />
                  <span className="text-white/85">Garantie d&eacute;cennale</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CheckCircle className="h-4 w-4 text-[#7bb3e0] shrink-0" />
                  <span className="text-white/85">SIRET&nbsp;: 987&nbsp;418&nbsp;076&nbsp;00012</span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-[#f8fbff] rounded-2xl p-5 text-center border border-[#e5eef7] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="mx-auto mb-2 h-5 w-5 text-[#5b9bd5]" strokeWidth={1.8} />
                    <p className="text-2xl font-extrabold text-[#1e3a5f]">{stat.value}</p>
                    <p className="text-xs text-[#5a7394] mt-1 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Brands worked with */}
            <div className="rounded-2xl bg-[#f0f6ff] border border-[#e5eef7] p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#5b9bd5]/60 mb-3">
                Marques install&eacute;es & entretenues
              </p>
              <div className="flex flex-wrap gap-2">
                {["Daikin", "Mitsubishi", "Heiwa", "Ariston", "Atlantic"].map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 rounded-full bg-white text-xs font-semibold text-[#1e3a5f] border border-[#e5eef7]"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
