"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Avis", href: "#avis" },
  { label: "Zone", href: "#zone" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Force white bg when mobile menu is open
  const showWhiteBg = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        showWhiteBg
          ? "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo - toujours visible avec un fond blanc rond sur le hero noir */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${
              showWhiteBg ? "h-14 w-14" : "h-14 w-14 bg-white shadow-md"
            }`}>
              <Image
                src="/images/logo.png"
                alt="OC CLIM"
                width={56}
                height={56}
                className="h-14 w-14"
                priority
              />
            </div>
            <span className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 ${
              showWhiteBg ? "text-[#333338]" : "text-white"
            }`}>
              OC CLIM
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[13px] font-medium transition-colors rounded-md ${
                  showWhiteBg
                    ? "text-[#444444] hover:text-[#333338] hover:bg-black/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="tel:0767117530"
            className={`hidden lg:inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
              showWhiteBg
                ? "bg-[#333338] text-white hover:bg-[#535358]"
                : "bg-white text-[#333338] hover:bg-white/90"
            }`}
          >
            <Phone className="h-3.5 w-3.5" />
            07 67 11 75 30
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
              showWhiteBg ? "text-[#333338] hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={open ? "Fermer" : "Menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl overflow-y-auto">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-md text-sm font-medium text-[#444444] hover:bg-slate-50 hover:text-[#333338]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0767117530"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#333338] px-5 py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                07 67 11 75 30
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
