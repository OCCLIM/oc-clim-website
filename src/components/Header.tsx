"use client";

import { useState, useEffect } from "react";
import { Snowflake, Phone, Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Pourquoi nous", href: "#why-us" },
  { label: "Avis clients", href: "#reviews" },
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
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0057b8] via-[#00b4d8] to-[#0057b8]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0057b8] to-[#00b4d8] shadow-md shadow-[#0057b8]/20 transition-transform duration-300 group-hover:scale-105">
              <Snowflake className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-0.5 leading-none">
                <span className="text-xl font-extrabold tracking-tight text-[#0f172a]">
                  OC
                </span>
                <span className="text-xl font-extrabold tracking-tight text-[#0057b8]">
                  &nbsp;CLIM
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-wide text-slate-400 uppercase">
                Climatisation & Pompes à chaleur
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#0057b8] rounded-lg hover:bg-[#0057b8]/5 group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-4 right-4 h-0.5 scale-x-0 rounded-full bg-[#00b4d8] transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0057b8] to-[#00b4d8] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#0057b8]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#0057b8]/30 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Devis gratuit
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition-colors hover:bg-slate-100 hover:text-[#0057b8]"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-[calc(4rem+4px)] bg-black/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-[calc(4rem+4px)] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
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
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-[#0057b8]/5 hover:text-[#0057b8] hover:pl-5"
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                }}
              >
                {link.label}
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </a>
            ))}
          </nav>

          <div className="mt-auto border-t border-slate-100 p-4">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0057b8] to-[#00b4d8] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#0057b8]/25 transition-all duration-300 hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Devis gratuit
            </a>
            <p className="mt-3 text-center text-xs text-slate-400">
              Disponible 7j/7 &middot; Bordeaux & alentours
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
