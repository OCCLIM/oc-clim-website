"use client";

import { ArrowDown, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background - dark with logo watermark */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Logo as giant watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <Image
            src="/images/logo.png"
            alt=""
            width={700}
            height={700}
            className="h-[500px] w-[500px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px] opacity-[0.04]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Animated decorative circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="600" height="600" className="animate-rotate-dash opacity-[0.06]">
          <circle
            cx="300" cy="300" r="280"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="15 25"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
          {/* Badge */}
          <div className="mb-6 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-1.5 text-sm font-medium text-white/90">
              <Image src="/images/logo.png" alt="" width={14} height={14} className="h-3.5 w-3.5 rounded-sm bg-white p-[1px]" />
              Climatisation & Pompes à chaleur · Bordeaux Métropole
            </span>
          </div>

          {/* Headline - K2 style large */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white animate-fade-in-up">
            Votre partenaire pour l'installation et la maintenance{" "}
            <span className="text-white/60">de vos systèmes climatiques</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-white/70 leading-relaxed animate-fade-in-up delay-200">
            OC CLIM, votre expert en climatisation et pompes à chaleur à Bordeaux
            et Cestas. Du devis à la mise en service, un seul interlocuteur.
          </p>

          {/* CTAs - K2 style */}
          <div className="mt-10 flex flex-wrap items-center gap-5 animate-fade-in-up delay-300">
            <a
              href="tel:0767117530"
              className="inline-flex items-center gap-2.5 bg-white text-[#111] px-7 py-4 rounded-lg text-sm font-bold tracking-wide uppercase hover:bg-white/90 transition-all"
            >
              <Phone className="h-4 w-4" />
              07 67 11 75 30
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-lg text-sm font-bold tracking-wide uppercase hover:bg-white/10 hover:border-white/50 transition-all"
            >
              Estimation gratuite
            </a>
          </div>
        </div>

        {/* Scroll indicator - K2 style */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Découvrir</span>
            <ArrowDown className="h-4 w-4 animate-float" />
          </a>
        </div>
      </div>
    </section>
  );
}
