"use client";

import { ArrowRight, Phone, Shield, Star, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0F172A] overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#0369A1]/30" />
        <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-[#0369A1]/8 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#0EA5E9]/6 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-[#0EA5E9] backdrop-blur-sm">
              <CheckCircle className="h-3.5 w-3.5" />
              Artisan certifié · Bordeaux Métropole & Cestas
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white animate-fade-in-up delay-100">
            Votre confort climatique,{" "}
            <span className="text-gradient">notre métier.</span>
          </h1>

          {/* Story paragraph */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 animate-fade-in-up delay-200">
            Can Oruc, technicien diplômé et passionné, installe, entretient
            et dépanne vos systèmes de climatisation et pompes à chaleur.
            Un seul interlocuteur, du devis à la mise en service.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0369A1] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0EA5E9] hover:-translate-y-0.5 shadow-lg shadow-[#0369A1]/25"
            >
              <Phone className="h-4 w-4" />
              Demander un devis gratuit
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/5 hover:border-white/25"
            >
              Découvrir nos services
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 animate-fade-in-up delay-400">
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-400">5/5 AlloVoisins</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#0EA5E9]" />
              <span className="text-sm text-slate-400">Garantie décennale</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#0EA5E9]" />
              <span className="text-sm text-slate-400">Réponse sous 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
