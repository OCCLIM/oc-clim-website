export default function About() {
  return (
    <section id="a-propos" className="py-20 sm:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-white">CO</span>
                </div>
                <p className="text-lg font-semibold text-dark">Can Oruc</p>
                <p className="text-sm text-gray-500">Fondateur & G\u00e9rant</p>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg p-4">
              <p className="text-2xl font-bold text-primary">Bac Pro</p>
              <p className="text-xs text-gray-500">Technicien du Froid</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              \u00c0 propos
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-dark">
              Un professionnel certifi\u00e9 \u00e0 votre service
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              <strong>OC CLIM</strong> est une entreprise sp\u00e9cialis\u00e9e dans
              l&apos;installation, l&apos;entretien et le d\u00e9pannage de syst\u00e8mes de
              climatisation et de pompes \u00e0 chaleur, bas\u00e9e \u00e0{" "}
              <strong>Cestas (33610)</strong>, pr\u00e8s de Bordeaux.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Fond\u00e9e par <strong>Can Oruc</strong>, titulaire d&apos;un{" "}
              <strong>
                Bac Pro Technicien du Froid et du Conditionnement de l&apos;Air
              </strong>
              , notre entreprise met son expertise au service de votre confort
              thermique, toute l&apos;ann\u00e9e.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: "2024", label: "Cr\u00e9ation" },
                { value: "110+", label: "Clients accompagn\u00e9s" },
                { value: "5/5", label: "Note moyenne" },
                { value: "22 min", label: "Temps de r\u00e9ponse" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Garantie d\u00e9cennale",
                "Assurance professionnelle",
                "SIRET : 98741807600012",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-white px-4 py-2 rounded-full"
                >
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
