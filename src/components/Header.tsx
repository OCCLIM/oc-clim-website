"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight, Wind } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#a-propos" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Avis clients", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(30,58,95,0.08)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1e3a5f] via-[#5b9bd5] to-[#1e3a5f]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#5b9bd5] shadow-lg shadow-[#1e3a5f]/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Wind className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1 leading-none">
                <span className="text-xl font-extrabold tracking-tight text-[#1e3a5f]">
                  OC
                </span>
                <span className="text-xl font-extrabold tracking-tight text-[#5b9bd5]">
                  CLIM
                </span>
              </div>
              <span className="text-[9px] font-semibold tracking-[0.15em] text-[#5b9bd5]/70 uppercase mt-0.5">
                Confort & Performance
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[#1e3a5f]/70 transition-colors duration-200 hover:text-[#1e3a5f] rounded-lg hover:bg-[#5b9bd5]/8 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#5b9bd5] transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1e3a5f] to-[#5b9bd5] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1e3a5f]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#1e3a5f]/30 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Devis gratuit
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-[#1e3a5f] transition-colors hover:bg-[#5b9bd5]/10"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[calc(4rem+3px)] bg-[#1e3a5f]/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[calc(4rem+3px)] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-[#1e3a5f] transition-all duration-200 hover:bg-[#5b9bd5]/8 hover:pl-5"
                style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-[#5b9bd5]/50" />
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-[#e5eef7] p-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1e3a5f] to-[#5b9bd5] px-6 py-3.5 text-base font-semibold text-white shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Devis gratuit
            </a>
            <p className="mt-3 text-center text-xs text-[#5b9bd5]/60">
              7j/7 · Bordeaux & Cestas
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
