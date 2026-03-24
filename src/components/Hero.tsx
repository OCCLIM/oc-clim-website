"use client";

import { ArrowRight, Phone, Shield, Star, CheckCircle } from "lucide-react";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0F172A] overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#0F172A] to-[#0369A1]/20" />
        <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-[#0369A1]/8 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#0EA5E9]/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-[#0EA5E9] backdrop-blur-sm">
                <CheckCircle className="h-3.5 w-3.5" />
                Artisan certifié · Bordeaux & Cestas
              </span>
            </div>

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-white animate-fade-in-up delay-100">
              Votre confort,{" "}
              <span className="text-gradient">notre priorité.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400 animate-fade-in-up delay-200">
              Spécialiste en installation, entretien et réparation de systèmes
              de climatisation, OC Clim met son expertise au service de votre bien-être.
              Un seul interlocuteur, du devis à la mise en service.
            </p>

            {/* Key points from flyer */}
            <div className="mt-8 grid grid-cols-2 gap-3 animate-fade-in-up delay-300">
              {[
                "Installation pour tout budget",
                "Maintenance de qualité",
                "Dépannage tout appareil",
                "Disponible 7j/7",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0EA5E9] shrink-0" />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up delay-400">
              <a
                href="tel:0767117530"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0369A1] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0EA5E9] hover:-translate-y-0.5 shadow-lg shadow-[#0369A1]/25"
              >
                <Phone className="h-4 w-4" />
                07 67 11 75 30
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/5 hover:border-white/25"
              >
                Devis gratuit
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 animate-fade-in-up delay-500">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-slate-400">5/5 AlloVoisins</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#0EA5E9]" />
                <span className="text-sm text-slate-400">Garantie décennale</span>
              </div>
            </div>
          </div>

          {/* Right: 3D card visual */}
          <div className="hidden lg:block">
            <div
              className="relative mx-auto max-w-sm"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl p-10 shadow-2xl"
                style={{ transform: "rotateY(-5deg) rotateX(3deg)", transformStyle: "preserve-3d" }}
              >
                {/* Logo */}
                <div className="flex justify-center mb-8">
                  <div className="h-20 w-20 rounded-2xl bg-[#0369A1] flex items-center justify-center shadow-xl shadow-[#0369A1]/30 text-white">
                    <Logo className="h-10 w-10" />
                  </div>
                </div>

                <h3 className="text-center text-xl font-bold text-white mb-1">OC CLIM</h3>
                <p className="text-center text-sm text-slate-400 mb-8">Votre confort, notre priorité</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "110+", label: "Clients" },
                    { value: "5/5", label: "Note" },
                    { value: "7j/7", label: "Dispo" },
                    { value: "10 ans", label: "Garantie" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-white/5 border border-white/[0.06] p-4 text-center">
                      <p className="text-lg font-bold text-white">{s.value}</p>
                      <p className="text-[11px] text-slate-400">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Brands */}
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 text-center mb-3">
                    Marques partenaires
                  </p>
                  <div className="flex justify-center gap-5">
                    {["Daikin", "Mitsubishi", "Heiwa", "Ariston"].map((b) => (
                      <span key={b} className="text-xs font-medium text-slate-500">{b}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <div
                className="absolute -top-4 -right-4 h-16 w-16 rounded-xl bg-[#0369A1] flex items-center justify-center shadow-lg shadow-[#0369A1]/30 text-white"
                style={{ transform: "translateZ(40px)" }}
              >
                <Logo className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
