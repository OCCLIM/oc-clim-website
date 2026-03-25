import { MapPin, Clock, Mail, Phone, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2E] text-white/50">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-lg bg-white flex items-center justify-center p-1.5">
                <Image src="/images/logo.png" alt="OC CLIM" width={24} height={24} className="h-6 w-6 object-contain" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">OC CLIM</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Votre confort, notre priorité. Spécialiste en climatisation et pompes à chaleur
              sur Bordeaux Métropole depuis 2024.
            </p>
            <a href="https://occlim.fr" className="text-sm text-white/40 hover:text-white transition-colors">
              occlim.fr
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Services</h3>
            <ul className="space-y-2.5">
              {["Climatisation", "Pompe à chaleur", "Thermodynamique", "Entretien", "Dépannage"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Accueil", href: "#" },
                { label: "Nos métiers", href: "#services" },
                { label: "Réalisations", href: "#realisations" },
                { label: "À propos", href: "#a-propos" },
                { label: "Avis clients", href: "#avis" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-5">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-white/25" />
                <a href="tel:0767117530" className="hover:text-white transition-colors">07 67 11 75 30</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-white/25" />
                <a href="mailto:occlim@outlook.com" className="hover:text-white transition-colors">occlim@outlook.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-white/25" />
                <span>Bordeaux Métropole & alentours</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-white/25" />
                <span>7j/7 — Week-ends inclus</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/20">
              SIRET : 987 418 076 00012 · Garantie décennale
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar - K2 style */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} OC CLIM — Can Oruc. Tous droits réservés.
          </p>
          <a href="#" className="flex items-center gap-1.5 text-xs text-white/20 hover:text-white/50 transition-colors">
            Retour en haut <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
