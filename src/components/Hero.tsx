"use client";

import { ArrowDown, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background noir */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Contenu */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32">
          <div className="flex items-end justify-between gap-12">
            {/* Left — texte */}
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="mb-8 animate-fade-in">
                <span className="inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.04] px-5 py-2 text-[13px] font-medium text-white/70 tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  Climatisation & Pompes à chaleur · Bordeaux Métropole
                </span>
              </div>

              {/* Titre */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5.5rem] font-extrabold leading-[1.05] tracking-tight text-white animate-fade-in-up">
                Votre confort,
                <br />
                notre priorité.
              </h1>

              {/* Sous-titre */}
              <p className="mt-7 max-w-xl text-base sm:text-lg text-white/50 leading-relaxed animate-fade-in-up delay-200">
                Installation, entretien et dépannage de systèmes climatiques.
                Un seul interlocuteur, du devis à la mise en service.
              </p>

              {/* Stats inline */}
              <div className="mt-10 flex items-center gap-8 animate-fade-in-up delay-300">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">150<span className="text-white/30">+</span></p>
                  <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Interventions</p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">5<span className="text-white/30">/5</span></p>
                  <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">AlloVoisins</p>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">7<span className="text-white/30">j/7</span></p>
                  <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Disponible</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up delay-400">
                <a
                  href="tel:0767117530"
                  className="inline-flex items-center gap-2.5 bg-white text-[#111] px-7 py-4 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-white/90 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  07 67 11 75 30
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2.5 border border-white/20 text-white px-7 py-4 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Estimation gratuite
                </a>
              </div>
            </div>

            {/* Right — Logo tel quel, fond blanc */}
            <div className="hidden lg:block shrink-0 animate-fade-in delay-300">
              <div className="relative">
                <div className="h-[340px] w-[340px] xl:h-[400px] xl:w-[400px] rounded-3xl bg-white flex items-center justify-center p-12 shadow-2xl shadow-white/[0.03]">
                  <Image
                    src="/images/logo.png"
                    alt="OC CLIM"
                    width={400}
                    height={400}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Découvrir</span>
            <ArrowDown className="h-4 w-4 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
}
