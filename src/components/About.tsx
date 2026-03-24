"use client";

import {
  Award,
  Users,
  Star,
  Clock,
  Shield,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

const stats = [
  { value: "2024", label: "Création", icon: Award },
  { value: "110+", label: "Clients accompagnés", icon: Users },
  { value: "5/5", label: "Note moyenne", icon: Star },
  { value: "22 min", label: "Temps de réponse", icon: Clock },
];

const trustBadges = [
  { icon: Shield, text: "Garantie décennale" },
  { icon: CheckCircle, text: "Assurance professionnelle" },
  { icon: Award, text: "SIRET\u00a0: 987\u00a0418\u00a0076\u00a000012" },
];

export default function About() {
  return (
    <section id="a-propos" className="py-20 sm:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Visual card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Main gradient card */}
              <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-white shadow-2xl">
                {/* Initials circle */}
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-4 ring-white/30">
                  <span className="text-4xl font-black tracking-tight">CO</span>
                </div>

                {/* Name */}
                <h3 className="text-center text-2xl font-bold">Can Oruc</h3>
                <p className="mt-1 text-center text-sm text-white/80">
                  Fondateur &amp; Gérant
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-white/20" />

                {/* Short bio */}
                <p className="text-center text-sm leading-relaxed text-white/90">
                  Passionné par le génie climatique, diplômé d&apos;un
                  Bac&nbsp;Pro Technicien du Froid et du Conditionnement de
                  l&apos;Air. Intervient sur Cestas et toute la métropole
                  bordelaise.
                </p>
              </div>

              {/* Floating diploma badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 shadow-lg ring-1 ring-gray-100">
                  <GraduationCap
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.8}
                  />
                  <span className="text-sm font-semibold text-dark">
                    Bac Pro TFCA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary mb-4">
              À propos
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-dark mb-6">
              Un artisan de confiance, proche de&nbsp;vous
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-dark">OC&nbsp;CLIM</strong> est une
                entreprise spécialisée en climatisation et pompes à chaleur,
                basée à{" "}
                <strong className="text-dark">Cestas&nbsp;(33610)</strong>, aux
                portes de Bordeaux.
              </p>
              <p>
                Fondée en 2024 par{" "}
                <strong className="text-dark">Can Oruc</strong>, technicien
                diplômé d&apos;un Bac&nbsp;Pro TFCA, l&apos;entreprise
                s&apos;appuie sur un savoir-faire rigoureux et une vraie
                proximité client. Chaque projet est traité avec le même soin, du
                diagnostic initial à la mise en service.
              </p>
              <p>
                Nous travaillons avec les plus grandes marques — Daikin,
                Mitsubishi, Heiwa, Ariston — pour vous garantir fiabilité,
                performance et économies d&apos;énergie durables.
              </p>
            </div>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-4 text-center shadow-sm"
                  >
                    <Icon
                      className="mx-auto mb-2 h-5 w-5 text-accent"
                      strokeWidth={1.8}
                    />
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {trustBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.text}
                    className="inline-flex items-center gap-2 text-sm font-medium text-dark bg-white px-4 py-2 rounded-full shadow-sm ring-1 ring-gray-100"
                  >
                    <Icon
                      className="h-4 w-4 text-primary"
                      strokeWidth={2}
                    />
                    {badge.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
