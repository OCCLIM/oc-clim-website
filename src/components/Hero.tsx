"use client";

import { ArrowRight, Phone, Shield, Star, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0f1e30] via-[#152a45] to-[#1e3a5f] pt-24 lg:pt-0">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#0369A1]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-24 h-[400px] w-[400px] rounded-full bg-[#0EA5E9]/8 blur-[100px]" />
        <div className="absolute -bottom-16 left-1/3 h-[300px] w-[300px] rounded-full bg-[#0369A1]/6 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
          {/* Left: storytelling */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#0EA5E9] backdrop-blur-sm">
                <CheckCircle className="h-4 w-4" />
                Artisan certifié · Cestas & Bordeaux Métropole
              </span>
            </div>

            <h1 className="mt-8 animate-fade-in-up delay-100">
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight text-white">
                Votre confort,
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] tracking-tight mt-1">
                <span className="text-gradient">
                  notre priorité.
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-400 animate-fade-in-up delay-200">
              Fondée par <span className="font-semibold text-white">Can Oruc</span>, technicien
              diplômé et passionné, OC CLIM vous accompagne dans
              l'installation, l'entretien et le dépannage de vos systèmes
              de <span className="font-semibold text-white">climatisation</span> et{" "}
              <span className="font-semibold text-white">pompes à chaleur</span>.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <a
                href="tel:0767117530"
                className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0369A1] to-[#0EA5E9] px-7 py-4 text-base font-semibold text-white shadow-xl shadow-[#0369A1]/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <Phone className="h-5 w-5" />
                07 67 11 75 30
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-2xl border-2 border-white/15 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/5 hover:-translate-y-1"
              >
                Demander un devis gratuit
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
                <span className="text-sm font-medium text-slate-400">5/5 sur AlloVoisins</span>
              </div>
              <div className="h-4 w-px bg-white/15" />
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-[#0EA5E9]" />
                <span className="text-sm font-medium text-slate-400">Garantie décennale</span>
              </div>
              <div className="h-4 w-px bg-white/15" />
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#0EA5E9]" />
                <span className="text-sm font-medium text-slate-400">Disponible 7j/7</span>
              </div>
            </div>
          </div>

          {/* Right: logo visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative">
              {/* Glow behind logo */}
              <div className="absolute inset-0 scale-150 bg-[#0369A1]/15 blur-[80px] rounded-full" />
              {/* Logo */}
              <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
                <Image
                  src="/images/logo.png"
                  alt="OC CLIM — Froid & Chaud"
                  width={280}
                  height={280}
                  className="w-[280px] h-[280px] object-contain"
                  priority
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-[#0369A1] text-white rounded-xl px-4 py-2 shadow-lg animate-subtle-float">
                <p className="text-xs font-bold">110+ clients</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-[#0F172A] rounded-xl px-4 py-2 shadow-lg animate-subtle-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold ml-1">5/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0 60L1440 60L1440 20C1440 20 1200 0 720 0C240 0 0 20 0 20L0 60Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  );
}
