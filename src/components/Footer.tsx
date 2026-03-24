import { Wind, MapPin, Clock, Mail, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 rounded-lg bg-[#0369A1] flex items-center justify-center">
                <Wind className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-white">
                OC <span className="text-[#0EA5E9]">CLIM</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Spécialiste en climatisation et pompes à chaleur sur Bordeaux
              Métropole. Votre artisan de confiance depuis 2024.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2">
              {["Climatisation", "Pompe à chaleur", "Entretien", "Dépannage"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-[#0EA5E9] transition-colors">
                    {s}
                  </a>
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
                { label: "À propos", href: "#a-propos" },
                { label: "Avis", href: "#avis" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-[#0EA5E9] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Informations</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#0EA5E9]" />
                <span>2B Chemin du Chibaley<br />33610 Cestas</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <span>7j/7 — Week-ends inclus</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[#0EA5E9]" />
                <a href="#contact" className="hover:text-[#0EA5E9] transition-colors">Contactez-nous</a>
              </li>
              <li className="pt-1 text-xs text-slate-500">
                SIRET : 987 418 076 00012<br />
                Garantie décennale
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
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
