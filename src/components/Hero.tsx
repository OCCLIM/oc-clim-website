"use client";

import { ArrowRight, Phone, Star, Shield, Clock, Wind } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f1e30] via-[#152a45] to-[#1e3a5f] pt-24 lg:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#5b9bd5]/10 blur-[120px] animate-float" />
        <div className="absolute top-1/3 -right-24 h-[400px] w-[400px] rounded-full bg-[#4a90c2]/10 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-16 left-1/3 h-[300px] w-[300px] rounded-full bg-[#5b9bd5]/8 blur-[80px] animate-float" style={{ animationDelay: "4s" }} />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[15, 25, 40, 55, 70, 85].map((left, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#5b9bd5]/20"
            style={{
              left: `${left}%`,
              bottom: "-10px",
              width: `${3 + i}px`,
              height: `${3 + i}px`,
              animation: `particle-float ${12 + i * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
          {/* Left column: storytelling content */}
          <div className="flex flex-col justify-center">
            {/* Intro tag */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#5b9bd5]/20 bg-[#5b9bd5]/10 px-4 py-2 text-sm font-medium text-[#7bb3e0] backdrop-blur-sm">
                <Wind className="h-4 w-4" />
                Artisan certifi&eacute; &middot; Cestas & Bordeaux M&eacute;tropole
              </div>
            </div>

            {/* Main headline - storytelling */}
            <h1 className="mt-8 animate-fade-in-up delay-100">
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-white">
                Votre confort,
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mt-1">
                <span className="bg-gradient-to-r from-[#7bb3e0] via-[#5b9bd5] to-[#4a90c2] bg-clip-text text-transparent">
                  notre expertise.
                </span>
              </span>
            </h1>

            {/* Story paragraph */}
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#a8bcd2] animate-fade-in-up delay-200">
              Fond&eacute;e par <span className="font-semibold text-white">Can Oruc</span>, technicien
              dipl&ocirc;m&eacute; et passionn&eacute;, OC&nbsp;CLIM vous accompagne dans
              l&apos;installation, l&apos;entretien et le d&eacute;pannage de vos syst&egrave;mes
              de <span className="font-semibold text-white">climatisation</span> et{" "}
              <span className="font-semibold text-white">pompes &agrave; chaleur</span>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#1e3a5f] via-[#2b4a73] to-[#5b9bd5] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#1e3a5f]/40 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                Demander un devis gratuit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 rounded-2xl border-2 border-[#5b9bd5]/25 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#5b9bd5]/50 hover:bg-white/5 hover:-translate-y-1"
              >
                D&eacute;couvrir nos services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-[#a8bcd2]">5/5 sur AlloVoisins</span>
              </div>
              <div className="h-4 w-px bg-[#5b9bd5]/20" />
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#5b9bd5]" />
                <span className="text-sm font-medium text-[#a8bcd2]">Garantie d&eacute;cennale</span>
              </div>
              <div className="h-4 w-px bg-[#5b9bd5]/20" />
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#5b9bd5]" />
                <span className="text-sm font-medium text-[#a8bcd2]">R&eacute;ponse en 22 min</span>
              </div>
            </div>
          </div>

          {/* Right column: visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[500px]">
              {/* Main card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-10 shadow-2xl">
                {/* Animated ring */}
                <div className="absolute -inset-4 rounded-[2rem] border border-[#5b9bd5]/10 animate-[spin_40s_linear_infinite]" />

                {/* Central icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-[#1e3a5f] to-[#5b9bd5] flex items-center justify-center shadow-2xl shadow-[#5b9bd5]/30">
                      <Wind className="h-12 w-12 text-white" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -inset-2 rounded-[1.5rem] bg-[#5b9bd5]/20 blur-xl -z-10" />
                  </div>
                </div>

                {/* Stats inside card */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "5/5", label: "Note clients", icon: Star },
                    { value: "22 min", label: "Temps de r\u00e9ponse", icon: Clock },
                    { value: "7j/7", label: "Disponibilit\u00e9", icon: Phone },
                    { value: "100%", label: "Satisfaction", icon: Shield },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                      <stat.icon className="h-5 w-5 text-[#5b9bd5] mx-auto mb-2" />
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-[11px] text-[#a8bcd2] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Brands */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-[#5b9bd5]/50 text-center mb-3">
                    Marques partenaires
                  </p>
                  <div className="flex justify-center gap-6">
                    {["Daikin", "Mitsubishi", "Heiwa", "Ariston"].map((brand) => (
                      <span key={brand} className="text-xs font-semibold text-[#a8bcd2]/50 hover:text-[#a8bcd2] transition-colors duration-300">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -top-6 -right-6 h-20 w-20 rounded-2xl bg-gradient-to-br from-[#5b9bd5] to-[#4a90c2] flex items-center justify-center shadow-xl shadow-[#5b9bd5]/30 animate-float">
                <span className="text-2xl font-black text-white">OC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z" fill="#f8fbff" />
        </svg>
      </div>
    </section>
  );
}
