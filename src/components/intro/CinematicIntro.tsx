"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

/* ─── SVG inline: simplified split-unit AC ─── */
function ACUnit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 260" fill="none" className={className}>
      {/* Body */}
      <rect x="20" y="30" width="360" height="200" rx="16" fill="url(#bodyGrad)" stroke="url(#rimGrad)" strokeWidth="1.5" />
      {/* Front panel */}
      <rect x="35" y="45" width="330" height="140" rx="10" fill="url(#panelGrad)" opacity="0.6" />
      {/* Air vents */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="55" y={80 + i * 16} width="290" height="2" rx="1" fill="white" opacity={0.08 + i * 0.02} />
      ))}
      {/* Bottom louver */}
      <rect x="35" y="190" width="330" height="25" rx="6" fill="url(#louverGrad)" opacity="0.5" />
      {/* LED indicator */}
      <circle cx="350" cy="60" r="3" fill="#4ade80" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Subtle brand area */}
      <rect x="160" y="55" width="80" height="18" rx="4" fill="white" opacity="0.04" />
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8f8f8" />
          <stop offset="100%" stopColor="#e8e8e8" />
        </linearGradient>
        <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ddd" />
          <stop offset="100%" stopColor="#bbb" />
        </linearGradient>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f0f0f0" />
        </linearGradient>
        <linearGradient id="louverGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e0e0e0" />
          <stop offset="100%" stopColor="#d0d0d0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Particle system for airflow ─── */
function AirParticles({ active }: { active: boolean }) {
  return (
    <div className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${active ? "opacity-100" : "opacity-0"}`}>
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            left: `${30 + Math.random() * 40}%`,
            top: `${45 + Math.random() * 20}%`,
            opacity: 0,
            animation: active
              ? `introParticle ${3 + Math.random() * 4}s ${Math.random() * 2}s ease-out infinite`
              : "none",
          }}
        />
      ))}
    </div>
  );
}

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0); // 0-5 scroll phases
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Show skip button after 1.5s
    const skipTimer = setTimeout(() => setShowSkip(true), 1500);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        pin: false,
        onUpdate: (self) => {
          const p = self.progress;
          if (p < 0.15) setPhase(0);
          else if (p < 0.30) setPhase(1);
          else if (p < 0.50) setPhase(2);
          else if (p < 0.70) setPhase(3);
          else if (p < 0.88) setPhase(4);
          else setPhase(5);
        },
        onLeave: () => {
          onComplete();
        },
      },
    });

    // Phase timeline targets
    const product = container.querySelector(".intro-product");
    const title = container.querySelector(".intro-title");
    const subtitle = container.querySelector(".intro-subtitle");
    const features = container.querySelectorAll(".intro-feature");
    const overlay = container.querySelector(".intro-overlay");
    const logo = container.querySelector(".intro-logo");
    const glow = container.querySelector(".intro-glow");

    if (product && title && subtitle && overlay && logo && glow) {
      tl
        // Phase 0→1: Logo appears, title fades in
        .fromTo(logo, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 10 }, 0)
        .fromTo(title, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 10 }, 2)
        .fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 8 }, 5)

        // Phase 1→2: Product reveals with scale
        .fromTo(product, { opacity: 0, scale: 0.6, y: 60 }, { opacity: 1, scale: 1, y: 0, duration: 15 }, 10)
        .to(logo, { opacity: 0.3, scale: 0.7, duration: 10 }, 12)
        .to(title, { y: -30, opacity: 0.6, duration: 12 }, 12)
        .to(subtitle, { y: -20, opacity: 0, duration: 8 }, 14)

        // Phase 2→3: Product close-up, glow appears
        .to(product, { scale: 1.3, y: -20, duration: 15 }, 25)
        .fromTo(glow, { opacity: 0 }, { opacity: 1, duration: 12 }, 26)

        // Phase 3→4: Features fly in
        .to(title, { opacity: 0, duration: 5 }, 30)
        .to(product, { scale: 0.85, y: -60, duration: 15 }, 35);

      features.forEach((f, i) => {
        tl.fromTo(f, { opacity: 0, x: i % 2 === 0 ? -40 : 40 }, { opacity: 1, x: 0, duration: 8 }, 35 + i * 3);
      });

      tl
        // Phase 4→5: Everything fades, reveal site
        .to(product, { opacity: 0, scale: 0.7, duration: 10 }, 55)
        .to(glow, { opacity: 0, duration: 8 }, 55)
        .to(overlay, { opacity: 0, duration: 15 }, 58);

      features.forEach((f) => {
        tl.to(f, { opacity: 0, duration: 8 }, 56);
      });
    }

    return () => {
      clearTimeout(skipTimer);
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [onComplete]);

  function handleSkip() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    setTimeout(onComplete, 600);
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: "500vh" }}>
      {/* Fixed viewport */}
      <div className="intro-overlay fixed inset-0 z-[200] bg-[#060606] overflow-hidden">

        {/* Ambient gradient background */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full transition-all duration-[2000ms]"
            style={{
              background: phase >= 2
                ? "radial-gradient(circle, rgba(100,180,255,0.06) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo OC CLIM */}
        <div className="intro-logo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-6 opacity-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-white flex items-center justify-center p-3 shadow-2xl shadow-white/5">
            <Image
              src="/images/logo.png"
              alt="OC CLIM"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <div className="intro-title absolute top-[28%] sm:top-[22%] left-1/2 -translate-x-1/2 text-center opacity-0 w-full px-6">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white/30 font-medium mb-3 sm:mb-4">
            Expérience climatique
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
            La technologie
            <br />
            <span className="text-white/40">au service du confort</span>
          </h2>
        </div>

        {/* Subtitle */}
        <div className="intro-subtitle absolute top-[52%] sm:top-[48%] left-1/2 -translate-x-1/2 text-center opacity-0 w-full px-6">
          <p className="text-sm sm:text-lg text-white/30 max-w-md mx-auto">
            Systèmes dernière génération, silence absolu, efficacité maximale.
          </p>
        </div>

        {/* Product — AC Unit */}
        <div className="intro-product absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] lg:w-[520px] opacity-0">
          <ACUnit className="w-full drop-shadow-2xl" />
          <AirParticles active={phase >= 2} />
        </div>

        {/* Glow effect under product */}
        <div className="intro-glow absolute top-[62%] left-1/2 -translate-x-1/2 w-[400px] h-[150px] opacity-0"
          style={{
            background: "radial-gradient(ellipse, rgba(100,180,255,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Features — appear in phase 3-4 */}
        <div className="absolute top-[72%] sm:top-[68%] left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: "Silence", value: "19 dB", sub: "Ultra silencieux" },
              { label: "Efficacité", value: "A+++", sub: "Classe énergie" },
              { label: "Garantie", value: "10 ans", sub: "Décennale" },
            ].map((f, i) => (
              <div key={f.label} className="intro-feature opacity-0 text-center">
                <p className="text-xl sm:text-3xl font-black text-white">{f.value}</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/25 font-medium mt-1">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500 ${phase >= 4 ? "opacity-0" : "opacity-100"}`}>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/20 font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-white/30 animate-bounce" />
          </div>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className={`absolute top-6 right-6 text-[10px] sm:text-xs uppercase tracking-wider text-white/20 hover:text-white/50 transition-all duration-500 z-10 ${showSkip ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          Passer →
        </button>

        {/* Phase indicator dots */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-1 rounded-full transition-all duration-500 ${
                i === phase ? "h-6 bg-white/40" : "h-1.5 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
