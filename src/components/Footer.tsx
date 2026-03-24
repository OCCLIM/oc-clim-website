import { MapPin, Clock, Mail, Phone, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/images/logo.png" alt="OC CLIM" width={32} height={32} className="h-8 w-8" />
              <span className="text-base font-bold text-white">
                OC <span className="text-[#0EA5E9]">CLIM</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Votre confort, notre priorité. Spécialiste en climatisation et
              pompes à chaleur sur Bordeaux Métropole depuis 2024.
            </p>
            <p className="text-sm">
              <a href="https://occlim.fr" className="text-[#0EA5E9] hover:underline">occlim.fr</a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {["Climatisation", "Pompe à chaleur", "Entretien", "Dépannage"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-[#0EA5E9] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: "Accueil", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Réalisations", href: "#realisations" },
                { label: "À propos", href: "#a-propos" },
                { label: "Avis", href: "#avis" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-[#0EA5E9] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <a href="tel:0767117530" className="hover:text-[#0EA5E9] transition-colors">07 67 11 75 30</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <a href="mailto:occlim@outlook.com" className="hover:text-[#0EA5E9] transition-colors">occlim@outlook.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#0EA5E9]" />
                <span>2B Chemin du Chibaley<br />33610 Cestas</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <span>7j/7 — Week-ends inclus</span>
              </li>
              <li className="pt-1 text-xs text-slate-500">
                SIRET : 987 418 076 00012<br />
                Garantie décennale
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} OC CLIM — Can Oruc. Tous droits réservés.
          </p>
          <a href="#" className="flex items-center gap-1 text-xs text-slate-500 hover:text-[#0EA5E9] transition-colors">
            Retour en haut <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
