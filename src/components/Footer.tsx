import { Snowflake, MapPin, Clock, Mail } from "lucide-react";

const serviceLinks = [
  { label: "Climatisation", href: "#services" },
  { label: "Pompe à chaleur", href: "#services" },
  { label: "Entretien & maintenance", href: "#services" },
  { label: "Dépannage", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="w-7 h-7 text-[#00b4d8]" />
              <span className="text-xl font-bold text-white">OC CLIM</span>
            </div>
            <p className="text-sm leading-relaxed">
              Spécialiste en climatisation et pompes à chaleur sur Bordeaux
              Métropole. Installation, entretien et dépannage par un
              professionnel certifié.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#00b4d8] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li>OC CLIM &mdash; Can Oruc</li>
              <li>SIRET : 987 418 076 00012</li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#00b4d8]" />
                <span>
                  2B Chemin du Chibaley
                  <br />
                  33610 Cestas
                </span>
              </li>
              <li>Garantie décennale</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-[#00b4d8]" />
                <a
                  href="#contact"
                  className="hover:text-[#00b4d8] transition-colors duration-200"
                >
                  Contactez-nous via le formulaire
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#00b4d8]" />
                <span>Bordeaux Métropole</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#00b4d8]" />
                <span>7j/7 &mdash; Week-ends et jours fériés</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} OC CLIM. Tous droits réservés.</p>
          <p>Site réalisé avec soin</p>
        </div>
      </div>
    </footer>
  );
}
