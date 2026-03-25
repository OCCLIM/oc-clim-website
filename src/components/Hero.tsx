"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Phone } from "lucide-react";
import Image from "next/image";

function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
    const count = 60;

    function resize() {
      canvas!.width = canvas!.offsetWidth * 2;
      canvas!.height = canvas!.offsetHeight * 2;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        o: Math.random() * 0.3 + 0.05,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 200)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas!.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas!.height) p.vy *= -1;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background avec dégradé subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2f] via-[#333338] to-[#28282d]" />

      {/* Particules connectées animées */}
      <FloatingParticles />

      {/* Lignes géométriques décoratives */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cercle lumineux en haut à gauche */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[80px]" />
        {/* Cercle lumineux en bas à droite */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px] animate-logo-breathe" />

        {/* Lignes diagonales subtiles */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="20%" y1="0" x2="100%" y2="80%" stroke="white" strokeWidth="0.5" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="0.5" />
        </svg>

        {/* Grille de points très subtile */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Logo immersif */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective: "1200px" }}>
        <div className="hidden lg:block absolute top-1/2 right-[15%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.04] blur-[100px] animate-logo-breathe" />

        {/* Mobile */}
        <div className="lg:hidden absolute top-20 right-2 w-[45vw] h-[45vw] animate-logo-3d" style={{ transformStyle: "preserve-3d" }}>
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={1024}
            height={1024}
            className="w-full h-full object-contain select-none rounded-2xl"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Desktop */}
        <div className="hidden lg:block absolute top-1/2 right-[5%] -translate-y-1/2 w-[45vw] h-[45vw] xl:w-[40vw] xl:h-[40vw] max-w-[700px] max-h-[700px] animate-logo-3d" style={{ transformStyle: "preserve-3d" }}>
          <Image
            src="/images/logo-dark.png"
            alt=""
            width={1024}
            height={1024}
            className="w-full h-full object-contain select-none rounded-3xl"
            priority
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Barre verticale accent gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Contenu */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
          <div className="flex items-end justify-between gap-12">
            <div className="max-w-3xl">
              {/* Badge animé avec pulse */}
              <div className="mb-5 sm:mb-8 animate-fade-in">
                <span className="inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.06] backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-medium text-white/80 tracking-wide">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="hidden sm:inline">Climatisation & Pompes à chaleur · Bordeaux Métropole</span>
                  <span className="sm:hidden">Clim & PAC · Bordeaux</span>
                </span>
              </div>

              {/* Titre avec mot en highlight */}
              <h1 className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-[5.5rem] font-extrabold sm:leading-[1.05] tracking-tight text-white animate-fade-in-up">
                Votre{" "}
                <span className="relative inline-block">
                  confort,
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-white/60 to-transparent rounded-full" />
                </span>
                <br />
                notre priorité.
              </h1>

              {/* Sous-titre */}
              <p className="mt-5 sm:mt-7 max-w-xl text-[15px] sm:text-lg text-white/50 leading-relaxed animate-fade-in-up delay-200">
                <span className="hidden sm:inline">Installation, entretien et dépannage de systèmes climatiques. Un seul interlocuteur, du devis à la mise en service.</span>
                <span className="sm:hidden">Installation, entretien et dépannage de climatisation. Du devis à la mise en service.</span>
              </p>

              {/* Stats avec séparateurs */}
              <div className="mt-8 sm:mt-10 flex items-center gap-5 sm:gap-8 animate-fade-in-up delay-300">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">150<span className="text-white/30">+</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Interventions</p>
                </div>
                <div className="h-10 sm:h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">5<span className="text-white/30">/5</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">AlloVoisins</p>
                </div>
                <div className="h-10 sm:h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">7<span className="text-white/30">j/7</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Disponible</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-in-up delay-400">
                <a
                  href="tel:0767117530"
                  className="group inline-flex items-center justify-center gap-2.5 bg-white text-[#333338] px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-white/90 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone className="h-4 w-4 group-hover:animate-pulse" />
                  07 67 11 75 30
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 border border-white/20 text-white px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl text-sm font-bold tracking-wide uppercase hover:bg-white/5 hover:border-white/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Estimation gratuite
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <a href="#services" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
            <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Découvrir</span>
            <div className="relative w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
              <div className="w-1 h-1.5 rounded-full bg-white/60 animate-scroll-dot" />
            </div>
          </a>
        </div>
      </div>

      {/* Dégradé de transition en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
    </section>
  );
}
