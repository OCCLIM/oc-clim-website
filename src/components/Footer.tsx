import { Wind, MapPin, Clock, Mail, Phone, ArrowUp } from "lucide-react";

const serviceLinks = [
  { label: "Climatisation", href: "#services" },
  { label: "Pompe à chaleur", href: "#services" },
  { label: "Entretien & maintenance", href: "#services" },
  { label: "Dépannage", href: "#services" },
];

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#a-propos" },
  { label: "Avis clients", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1e30] text-[#a8bcd2] relative">
      {/* Wave separator */}
      <div className="absolute -top-[59px] left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px]">
          <path d="M0 0L1440 0L1440 40C1440 40 1200 60 720 60C240 60 0 40 0 40L0 0Z" fill="#f8fbff" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#5b9bd5] flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-extrabold text-white tracking-tight">
                  OC <span className="text-[#5b9bd5]">CLIM</span>
                </span>
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#5b9bd5]/60 font-semibold">
                  Confort & Performance
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Spécialiste en climatisation et pompes à chaleur sur Bordeaux
              Métropole. Votre artisan de confiance depuis 2024.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#5b9bd5] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#5b9bd5]/40" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#5b9bd5] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#5b9bd5]/40" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Informations</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#5b9bd5]" />
                <span>
                  2B Chemin du Chibaley
                  <br />
                  33610 Cestas
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 shrink-0 text-[#5b9bd5]" />
                <span>7j/7 — Week-ends et jours fériés</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 shrink-0 text-[#5b9bd5]" />
                <a href="#contact" className="hover:text-[#5b9bd5] transition-colors">
                  Contactez-nous
                </a>
              </li>
              <li className="pt-2 text-xs text-[#5b9bd5]/50">
                SIRET : 987 418 076 00012
                <br />
                Garantie décennale
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#5b9bd5]/40">
            © {new Date().getFullYear()} OC CLIM — Can Oruc. Tous droits réservés.
          </p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-xs text-[#5b9bd5]/40 hover:text-[#5b9bd5] transition-colors duration-300"
          >
            Retour en haut
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
