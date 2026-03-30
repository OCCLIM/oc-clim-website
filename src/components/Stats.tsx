"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Interventions réalisées" },
  { value: 5, suffix: "/5", label: "Satisfaction clients" },
  { value: 7, suffix: "j/7", label: "Disponibilité" },
  { value: 22, suffix: " min", label: "Temps de réponse moyen" },
];

function CountUp({ target, started }: { target: number; started: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return <>{count}</>;
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 bg-[#333338] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-1 mb-3">
                <span className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white tabular-nums transition-all duration-500 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <CountUp target={stat.value} started={started} />
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-white/40">{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-white/40 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
