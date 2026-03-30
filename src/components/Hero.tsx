"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Phone } from "lucide-react";
import Image from "next/image";

/* ── Flocons / particules qui flottent comme de la neige ── */
function SnowParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    interface Flake {
      x: number; y: number;
      r: number; o: number;
      vx: number; vy: number;
      spin: number; angle: number;
      type: "dot" | "snowflake";
    }

    const flakes: Flake[] = [];
    const COUNT = 80;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      flakes.push({
        x: Math.random() * 2000,
        y: Math.random() * 2000,
        r: Math.random() * 3 + 1,
        o: Math.random() * 0.4 + 0.05,
        vx: (Math.random() - 0.5) * 0.3,
        vy: Math.random() * 0.4 + 0.15,
        spin: (Math.random() - 0.5) * 0.02,
        angle: Math.random() * Math.PI * 2,
        type: Math.random() > 0.6 ? "snowflake" : "dot",
      });
    }

    function drawSnowflake(x: number, y: number, size: number, angle: number, opacity: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.rotate(angle);
      ctx!.strokeStyle = `rgba(255,255,255,${opacity})`;
      ctx!.lineWidth = 0.8;
      // 6 branches
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i;
        ctx!.beginPath();
        ctx!.moveTo(0, 0);
        ctx!.lineTo(Math.cos(a) * size, Math.sin(a) * size);
        // petit rameau
        const bx = Math.cos(a) * size * 0.6;
        const by = Math.sin(a) * size * 0.6;
        ctx!.moveTo(bx, by);
        ctx!.lineTo(bx + Math.cos(a + 0.6) * size * 0.25, by + Math.sin(a + 0.6) * size * 0.25);
        ctx!.moveTo(bx, by);
        ctx!.lineTo(bx + Math.cos(a - 0.6) * size * 0.25, by + Math.sin(a - 0.6) * size * 0.25);
        ctx!.stroke();
      }
      ctx!.restore();
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      for (const f of flakes) {
        f.x += f.vx + Math.sin(f.y * 0.005) * 0.2;
        f.y += f.vy;
        f.angle += f.spin;

        // wrap around
        if (f.y > H + 10) { f.y = -10; f.x = Math.random() * W; }
        if (f.x > W + 10) f.x = -10;
        if (f.x < -10) f.x = W + 10;

        if (f.type === "snowflake") {
          drawSnowflake(f.x, f.y, f.r * 3, f.angle, f.o);
        } else {
          ctx!.beginPath();
          ctx!.arc(f.x, f.y, f.r, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(255,255,255,${f.o})`;
          ctx!.fill();
        }
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
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2f] via-[#333338] to-[#28282d]" />

      {/* Flocons et particules */}
      <SnowParticles />

      {/* Logo — image TELLE QUELLE, bien visible, animé */}
      <div className="absolute inset-0 pointer-events-none" style={{ perspective: "1200px" }}>
        {/* Glow derrière le logo */}
        <div className="absolute top-1/2 right-[10%] lg:right-[15%] -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-white/[0.03] blur-[100px] animate-logo-breathe" />

        {/* Logo mobile — en haut à droite, bien visible */}
        <div
          className="lg:hidden absolute top-24 right-4 w-[200px] h-[200px] animate-logo-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/images/logo-hero.png"
            alt=""
            width={1024}
            height={1024}
            className="w-full h-full object-contain select-none"
            priority
            aria-hidden="true"
          />
        </div>

        {/* Logo desktop — gros, à droite, centré */}
        <div
          className="hidden lg:block absolute top-1/2 right-[5%] -translate-y-1/2 w-[550px] h-[550px] xl:w-[650px] xl:h-[650px] animate-logo-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          <Image
            src="/images/logo-hero.png"
            alt=""
            width={1024}
            height={1024}
            className="w-full h-full object-contain select-none"
            priority
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
          <div className="flex items-end justify-between gap-12">
            <div className="max-w-3xl">
              {/* Badge */}
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

              {/* Titre */}
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

              {/* Stats */}
              <div className="mt-8 sm:mt-10 flex items-center gap-5 sm:gap-8 animate-fade-in-up delay-300">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">150<span className="text-white/30">+</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Interventions</p>
                </div>
                <div className="h-10 sm:h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-white">5<span className="text-white/30">/5</span></p>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/30 font-medium mt-0.5">Satisfaction</p>
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
                  <Phone className="h-4 w-4" />
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
