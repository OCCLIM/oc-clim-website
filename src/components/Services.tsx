const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Installation de climatisation",
    description:
      "Pose de climatiseurs mono-split, bi-split, tri-split et multi-split. Solutions adapt\u00e9es \u00e0 chaque pi\u00e8ce de votre habitation ou local professionnel.",
    features: ["Mono-split", "Bi-split", "Tri-split", "Multi-split"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Pompes \u00e0 chaleur",
    description:
      "Installation de pompes \u00e0 chaleur Air/Eau et Air/Air pour un chauffage \u00e9conomique et \u00e9cologique toute l\u2019ann\u00e9e.",
    features: ["PAC Air/Eau", "PAC Air/Air", "\u00c9conomies d'\u00e9nergie", "\u00c9cologique"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Entretien & Maintenance",
    description:
      "Entretien pr\u00e9ventif r\u00e9gulier pour garantir les performances et la long\u00e9vit\u00e9 de vos \u00e9quipements. Contrats de maintenance disponibles.",
    features: ["Maintenance pr\u00e9ventive", "V\u00e9rification annuelle", "Nettoyage", "Optimisation"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    title: "D\u00e9pannage & Diagnostic",
    description:
      "Intervention rapide en cas de panne. Diagnostic pr\u00e9cis et r\u00e9paration efficace de tous types de syst\u00e8mes de climatisation et pompes \u00e0 chaleur.",
    features: ["Intervention rapide", "Diagnostic", "R\u00e9paration", "Toutes marques"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nos services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-dark">
            Des solutions compl\u00e8tes pour votre confort
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Du simple climatiseur \u00e0 la pompe \u00e0 chaleur, nous vous accompagnons
            dans tous vos projets de confort thermique.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-light rounded-2xl p-6 hover:bg-primary hover:shadow-xl hover:shadow-primary/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-white/20 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-dark group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
