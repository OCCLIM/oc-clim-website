"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

// Dynamic import 3D scene (no SSR)
const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

/* ─── Phase text content ─── */
const phases = [
  { title: "", subtitle: "" },
  { title: "Silence absolu", subtitle: "Seulement 19 dB — vous ne l'entendrez jamais" },
  { title: "Flux d'air intelligent", subtitle: "Distribution optimale dans chaque recoin de la pièce" },
  { title: "Technologie Inverter", subtitle: "Économisez jusqu'à 30% sur votre facture énergétique" },
  { title: "Installation experte", subtitle: "Garantie décennale — votre tranquillité d'esprit" },
];

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [showSkip, setShowSkip] = useState(false);
  const [textOpacity, setTextOpacity] = useState(0);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const skipTimer = setTimeout(() => setShowSkip(true), 2000);

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        setScrollProgress(p);

        // Phase calculation
        if (p < 0.15) { setPhase(0); setTextOpacity(0); }
        else if (p < 0.30) { setPhase(1); setTextOpacity(Math.min((p - 0.15) / 0.05, 1)); }
        else if (p < 0.45) { setPhase(2); setTextOpacity(Math.min((p - 0.30) / 0.05, 1)); }
        else if (p < 0.60) { setPhase(3); setTextOpacity(Math.min((p - 0.45) / 0.05, 1)); }
        else if (p < 0.80) { setPhase(4); setTextOpacity(Math.min((p - 0.60) / 0.05, 1)); }
        else { setPhase(4); setTextOpacity(1 - (p - 0.80) / 0.15); }
      },
      onLeave: () => handleComplete(),
    });

    return () => {
      clearTimeout(skipTimer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [handleComplete]);

  function handleSkip() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setTimeout(handleComplete, 600);
  }

  // Fade out the entire overlay when nearing end
  const overlayOpacity = scrollProgress > 0.88 ? 1 - (scrollProgress - 0.88) / 0.12 : 1;

  return (
    <div ref={containerRef} className="relative" style={{ height: "600vh" }}>
      {/* Fixed viewport — the 3D cinema */}
      <div
        className="fixed inset-0 z-[200] overflow-hidden"
        style={{ opacity: overlayOpacity, pointerEvents: overlayOpacity < 0.1 ? "none" : "auto" }}
      >
        {/* Background */}
        <div className="absolute inset-0 bg-[#050508]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* 3D Canvas — takes full screen */}
        <div className="absolute inset-0">
          <Scene3D scrollProgress={scrollProgress} />
        </div>

        {/* Logo — appears at start, fades */}
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 transition-all duration-1000"
          style={{ opacity: scrollProgress < 0.1 ? 1 : Math.max(0, 1 - (scrollProgress - 0.1) * 5) }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-lg shadow-white/5">
            <Image src="/images/logo.png" alt="OC CLIM" width={48} height={48} className="w-full h-full object-contain" />
          </div>
          <div>
            <p className="text-white font-extrabold text-sm sm:text-base tracking-tight">OC CLIM</p>
            <p className="text-white/30 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-medium">Votre confort, notre priorité</p>
          </div>
        </div>

        {/* Opening title — fades in then out */}
        <div
          className="absolute top-[20%] sm:top-[18%] left-1/2 -translate-x-1/2 text-center w-full px-6 transition-all duration-700"
          style={{
            opacity: scrollProgress < 0.05 ? scrollProgress * 20 : scrollProgress < 0.15 ? 1 : Math.max(0, 1 - (scrollProgress - 0.15) * 8),
            transform: `translateX(-50%) translateY(${scrollProgress * -40}px)`,
          }}
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white/20 font-medium mb-4">
            Expérience climatique premium
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
            La technologie
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/20">
              au service du confort
            </span>
          </h2>
        </div>

        {/* Phase text — changes with scroll */}
        {phase > 0 && phase < 5 && (
          <div
            className="absolute bottom-[18%] sm:bottom-[15%] left-1/2 -translate-x-1/2 text-center w-full px-6"
            style={{ opacity: textOpacity }}
          >
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-2">
              {phases[phase]?.title}
            </p>
            <p className="text-xs sm:text-sm text-white/30 max-w-md mx-auto">
              {phases[phase]?.subtitle}
            </p>
          </div>
        )}

        {/* Feature pills — appear in later phases */}
        <div
          className="absolute bottom-[6%] left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 transition-all duration-700"
          style={{
            opacity: scrollProgress > 0.5 && scrollProgress < 0.85 ? 1 : 0,
            transform: `translateX(-50%) translateY(${scrollProgress > 0.5 ? 0 : 20}px)`,
          }}
        >
          {["A+++", "19 dB", "10 ans", "7j/7"].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] sm:text-xs font-bold text-white/40 tracking-wider"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700"
          style={{ opacity: scrollProgress < 0.1 ? 1 : 0 }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/15 font-medium">Scrollez</span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
            <div className="w-0.5 h-2 rounded-full bg-white/20 animate-bounce" />
          </div>
        </div>

        {/* Phase progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
          <div
            className="h-full bg-gradient-to-r from-white/20 to-white/40 transition-all duration-300"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Phase dots */}
        <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-[3px] rounded-full transition-all duration-500 ${
                i <= phase ? "bg-white/30" : "bg-white/5"
              } ${i === phase ? "h-5" : "h-1.5"}`}
            />
          ))}
        </div>

        {/* Skip */}
        <button
          onClick={handleSkip}
          className={`absolute top-6 right-6 z-10 text-[10px] uppercase tracking-wider text-white/15 hover:text-white/40 transition-all duration-500 ${
            showSkip ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          Passer →
        </button>
      </div>
    </div>
  );
}
