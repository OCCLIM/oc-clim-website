export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">
                OC <span className="text-primary">CLIM</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Expert en climatisation et pompes \u00e0 chaleur \u00e0 Bordeaux et Cestas.
              Installation, entretien et d\u00e9pannage.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Installation climatisation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Pompes \u00e0 chaleur
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Entretien & Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  D\u00e9pannage
                </a>
              </li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>OC CLIM \u2014 Can Oruc</li>
              <li>SIRET : 98741807600012</li>
              <li>Cestas (33610)</li>
              <li>Garantie d\u00e9cennale</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="tel:+33600000000"
                  className="hover:text-white transition-colors"
                >
                  06 XX XX XX XX
                </a>
              </li>
              <li>Bordeaux M\u00e9tropole</li>
              <li>7j/7 disponible</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} OC CLIM. Tous droits r\u00e9serv\u00e9s.</p>
          <p>
            Fait avec soin pour votre confort
          </p>
        </div>
      </div>
    </footer>
  );
}
