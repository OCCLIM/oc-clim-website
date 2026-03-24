"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#a-propos" },
  { label: "Engagements", href: "#pourquoi-nous" },
  { label: "Avis", href: "#avis" },
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="OC CLIM"
              width={36}
              height={36}
              className={`h-9 w-9 transition-all duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
            />
            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${scrolled ? "text-[#111111]" : "text-white"}`}>
              OC CLIM
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 text-[13px] font-medium transition-colors rounded-md ${
                  scrolled
                    ? "text-[#444444] hover:text-[#111111] hover:bg-[#111111]/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="tel:0767117530"
            className={`hidden lg:inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
              scrolled
                ? "bg-[#111111] text-white hover:bg-[#333333]"
                : "bg-white text-[#111111] hover:bg-white/90"
            }`}
          >
            <Phone className="h-3.5 w-3.5" />
            07 67 11 75 30
          </a>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
              scrolled ? "text-[#111111] hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label={open ? "Fermer" : "Menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 top-16 bg-black/20 lg:hidden" onClick={() => setOpen(false)} />
          <div className="fixed top-16 right-0 bottom-0 w-72 bg-white shadow-xl lg:hidden">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-md text-sm font-medium text-[#444444] hover:bg-slate-50 hover:text-[#111111]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:0767117530"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#111111] px-5 py-3 text-sm font-semibold text-white"
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
