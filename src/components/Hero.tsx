"use client";

import {
  ArrowRight,
  Phone,
  Star,
  Shield,
  Clock,
  Snowflake,
  Thermometer,
  Wind,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#0f1d35] to-[#0a1628] pt-24 lg:pt-32">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#0057b8]/15 blur-[120px] animate-float" />
        <div
          className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-[#00b4d8]/15 blur-[100px] animate-float"
          style={{ animationDelay: "2s", animationDuration: "8s" }}
        />
        <div
          className="absolute -bottom-20 left-1/3 h-[350px] w-[350px] rounded-full bg-[#0057b8]/10 blur-[80px] animate-float"
          style={{ animationDelay: "4s", animationDuration: "10s" }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        <div
          className="absolute top-20 left-[15%] h-2 w-2 rounded-full bg-[#00b4d8]/30 animate-float"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-40 right-[25%] h-1.5 w-1.5 rounded-full bg-[#0057b8]/40 animate-float"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-[40%] h-2.5 w-2.5 rounded-full bg-[#00b4d8]/20 animate-float"
          style={{ animationDuration: "7s", animationDelay: "3s" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center min-h-[calc(100vh-8rem)] pb-32 lg:pb-40">
          {/* Left column: content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00b4d8]/20 bg-[#00b4d8]/10 px-4 py-1.5 text-sm font-medium text-[#00b4d8] backdrop-blur-sm">
                <Snowflake className="h-3.5 w-3.5" />
                Expert certifié &middot; Bordeaux & Cestas
              </div>
            </div>

            {/* Headline */}
            <h1 className="mt-6 animate-fade-in-up delay-100">
              <span className="block text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Votre expert en
              </span>
              <span className="block text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-[#00b4d8] via-[#0088cc] to-[#0057b8] bg-clip-text text-transparent">
                  climatisation
                </span>
              </span>
              <span className="block text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                &{" "}
                <span className="bg-gradient-to-r from-[#0057b8] via-[#0088cc] to-[#00b4d8] bg-clip-text text-transparent">
                  pompes à chaleur
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300/90 animate-fade-in-up delay-200">
              Installation, entretien et dépannage de systèmes de climatisation
              et pompes à chaleur à{" "}
              <span className="font-semibold text-white">Bordeaux</span>,{" "}
              <span className="font-semibold text-white">Cestas</span> et dans
              toute la Gironde. Intervention rapide, 7 jours sur 7.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#0057b8] to-[#00b4d8] px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-[#0057b8]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0057b8]/40 hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5" />
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 rounded-xl border-2 border-slate-500/30 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#00b4d8]/50 hover:bg-white/5 hover:-translate-y-0.5"
              >
                Nos services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 animate-fade-in-up delay-400">
              {[
                {
                  icon: Star,
                  label: "5/5",
                  sub: "AlloVoisins",
                  color: "#fbbf24",
                },
                {
                  icon: Shield,
                  label: "Garantie",
                  sub: "Décennale",
                  color: "#0057b8",
                },
                {
                  icon: Clock,
                  label: "22 min",
                  sub: "Temps de réponse",
                  color: "#00b4d8",
                },
                {
                  icon: Snowflake,
                  label: "7j/7",
                  sub: "Disponibilité",
                  color: "#0057b8",
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${badge.color}20` }}
                  >
                    <badge.icon
                      className="h-4 w-4"
                      style={{ color: badge.color }}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white leading-tight">
                      {badge.label}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-tight truncate">
                      {badge.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: decorative visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main decorative circle */}
            <div className="relative h-[480px] w-[480px]">
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-[#0057b8]/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#00b4d8]/15 animate-[spin_25s_linear_infinite_reverse]" />

              {/* Center glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#0057b8]/20 to-[#00b4d8]/20 blur-2xl" />
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-[#0057b8]/10 to-[#00b4d8]/10 backdrop-blur-3xl border border-white/10 flex items-center justify-center">
                <Snowflake className="h-20 w-20 text-[#00b4d8]/40 animate-[spin_20s_linear_infinite]" />
              </div>

              {/* Floating stat card: 5/5 rating */}
              <div className="absolute -left-4 top-16 animate-float delay-100">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 shadow-2xl backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30">
                    <Star className="h-5 w-5 text-white" fill="white" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-white leading-none">
                      5/5
                    </p>
                    <p className="text-xs text-slate-300">Note clients</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card: 110+ clients */}
              <div
                className="absolute -right-8 top-32 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 shadow-2xl backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0057b8] to-[#00b4d8] shadow-lg shadow-[#0057b8]/30">
                    <Thermometer className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-white leading-none">
                      110+
                    </p>
                    <p className="text-xs text-slate-300">
                      Clients référencés
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat card: Certifié */}
              <div
                className="absolute -left-2 bottom-28 animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 shadow-2xl backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none">
                      Certifié
                    </p>
                    <p className="text-xs text-slate-300">
                      Garantie décennale
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating stat card: 22 min */}
              <div
                className="absolute right-4 bottom-16 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-3.5 shadow-2xl backdrop-blur-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b4d8] to-cyan-400 shadow-lg shadow-cyan-500/30">
                    <Wind className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white leading-none">
                      22 min
                    </p>
                    <p className="text-xs text-slate-300">Temps de réponse</p>
                  </div>
                </div>
              </div>

              {/* Small floating accent icons */}
              <div
                className="absolute top-4 right-24 animate-float"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0057b8]/20 backdrop-blur-sm">
                  <Snowflake className="h-4 w-4 text-[#00b4d8]/60" />
                </div>
              </div>
              <div
                className="absolute bottom-8 left-24 animate-float"
                style={{ animationDuration: "5s", animationDelay: "1s" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00b4d8]/20 backdrop-blur-sm">
                  <Wind className="h-3.5 w-3.5 text-[#0057b8]/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-white/[0.03] backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Marques partenaires
            </p>
            <div className="flex items-center gap-8 sm:gap-12">
              {["Daikin", "Mitsubishi", "Heiwa", "Ariston"].map((brand) => (
                <span
                  key={brand}
                  className="text-sm font-semibold tracking-wide text-slate-400/70 transition-colors duration-300 hover:text-slate-300"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
