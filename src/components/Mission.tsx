"use client";

import ScrollReveal from "./ScrollReveal";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="relative py-28 sm:py-36 bg-[#111] overflow-hidden">
      {/* Decorative SVG circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="500" height="500" className="animate-rotate-dash opacity-[0.06]">
          <circle cx="250" cy="250" r="230" fill="none" stroke="white" strokeWidth="1" strokeDasharray="12 20" />
          <circle cx="250" cy="250" r="200" fill="none" stroke="white" strokeWidth="0.5" strokeDasharray="8 16" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="mx-auto mb-8 h-14 w-14 rounded-2xl bg-white flex items-center justify-center p-2">
            <Image src="/images/logo.png" alt="OC CLIM" width={40} height={40} className="h-10 w-10 object-contain" />
          </div>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
            Offrir une prestation <span className="text-white/50">fiable</span> et{" "}
            <span className="text-white/50">performante</span> répondant aux attentes
            de nos clients en matière de{" "}
            <span className="text-white/50">confort thermique</span> et d'
            <span className="text-white/50">efficacité énergétique</span>.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-white/20" />
            <p className="text-sm text-white/40 font-medium uppercase tracking-wider">
              Can Oruc — Fondateur OC CLIM
            </p>
            <div className="h-px w-8 bg-white/20" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
