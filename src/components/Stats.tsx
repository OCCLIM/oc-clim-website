"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 150, suffix: "+", label: "Installations réalisées" },
  { value: 5, suffix: "/5", label: "Avis clients (AlloVoisins)" },
  { value: 7, suffix: "j/7", label: "Disponibilité" },
  { value: 22, suffix: " min", label: "Temps de réponse moyen" },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return { count, ref, started };
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-[#111] overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => {
            const { count, ref, started } = useCountUp(stat.value);
            return (
              <div key={stat.label} ref={ref} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-3">
                  <span className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white tabular-nums transition-all duration-300 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    {count}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-white/40">{stat.suffix}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white/40 uppercase tracking-wider">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Logo watermark center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
          <Image src="/images/logo.png" alt="" width={300} height={300} className="h-72 w-72" />
        </div>
      </div>
    </section>
  );
}
