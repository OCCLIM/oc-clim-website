"use client";

import { ArrowDown, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background noir */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Logo en fond — immersif, pas en carré */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-end lg:pr-[8%] pointer-events-none">
        <div className="relative w-[70vw] h-[70vw] sm:w-[50vw] sm:h-[50vw] lg:w-[42vw] lg:h-[42vw] xl:w-[36vw] xl:h-[36vw] max-w-[600px] max-h-[600px] animate-logo-breathe">
          {/* Halo lumineux */}
          <div className="absolute inset-[-20%] rounded-full bg-white/[0.02] blur-[100px]" />
          <Image
            src="/images/logo.png"
            alt=""
            width={800}
            height={800}
            className="w-full h-full object-contain opacity-[0.04] lg:opacity-[0.06] select-none"
            priority
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
          <div className="flex items-end justify-between gap-12">
            {/* Left — texte */}
            <div className="max-w-3xl">
              {/* Badge - plus compact mobile */}
              <div className="mb-5 sm:mb-8 animate-fade-in">
                <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3.5 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[13px] font-medium text-white/70 tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="hidden sm:inline">Climatisation & Pompes à chaleur · Bordeaux Métropole</span>
                  <span className="sm:hidden">Clim & PAC · Bordeaux</span>
                </span>
              </div>

              {/* Titre - taille ajustée mobile */}
              <h1 className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-[5.5rem] font-extrabold sm:leading-[1.05] tracking-tight text-white animate-fade-in-up">
                Votre confort,
                <br />
                notre priorité.
              </h1>

              {/* Sous-titre - plus court mobile */}
              <p className="mt-4 sm:mt-7 max-w-xl text-[15px] sm:text-lg text-white/50 leading-relaxed animate-fade-in-up delay-200">
                <span className="hidden sm:inline">Installation, entretien et dépannage de systèmes climatiques. Un seul interlocuteur, du devis à la mise en service.</span>
                <span className="sm:hidden">Installation, entretien et dépannage de climatisation. Du devis à la mise en service.</span>
              </p>

              {/* Stats inline - grille mobile */}
              <div className="mt-6 sm:mt-10 flex items-center gap-5 sm:gap-8 animate-fade-in-up delay-300">
                <div>
                  <p className="text-xl sm:text-3xl font-black text-white">150<span className="text-white/30">+</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Interventions</p>
                </div>
                <div className="h-8 sm:h-10 w-px bg-white/10" />
                <div>
                  <p className="text-xl sm:text-3xl font-black text-white">5<span className="text-white/30">/5</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">AlloVoisins</p>
                </div>
                <div className="h-8 sm:h-10 w-px bg-white/10" />
                <div>
                  <p className="text-xl sm:text-3xl font-black text-white">7<span className="text-white/30">j/7</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Disponible</p>
                </div>
              </div>

              {/* CTAs - stack vertical mobile */}
              <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-in-up delay-400">
                <a
                  href="tel:0767117530"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-[#111] px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-white/90 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  07 67 11 75 30
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 border border-white/20 text-white px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-white/5 hover:border-white/40 transition-all"
                >
                  Estimation gratuite
                </a>
              </div>
            </div>

            {/* Logo maintenant en fond — plus de bloc carré */}
          </div>
        </div>

        {/* Scroll indicator - caché mobile */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Découvrir</span>
            <ArrowDown className="h-4 w-4 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
}
