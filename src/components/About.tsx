import { GraduationCap, MapPin, Shield, CheckCircle, Users, Star, Clock } from "lucide-react";

const timeline = [
  { year: "Formation", text: "Bac Pro TFCA – Technicien du Froid et du Conditionnement de l'Air" },
  { year: "Expérience", text: "Interventions sur tous types d'installations climatiques" },
  { year: "Avril 2024", text: "Création d'OC CLIM à Cestas (33610)" },
  { year: "Aujourd'hui", text: "Plus de 110 clients satisfaits sur Bordeaux Métropole" },
];

const stats = [
  { value: "110+", label: "Clients", icon: Users },
  { value: "5/5", label: "Note", icon: Star },
  { value: "24h", label: "Réponse", icon: Clock },
];

export default function About() {
  return (
    <section id="a-propos" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0369A1] mb-3">
              À propos
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
              Un artisan passionné,<br />
              <span className="text-gradient">proche de vous.</span>
            </h2>

            <div className="mt-8 space-y-5 text-[#64748B] text-lg leading-relaxed">
              <p>
                Derrière <strong className="text-[#0F172A]">OC CLIM</strong>, il y a
                une conviction : chacun mérite un air sain et un confort thermique
                optimal chez soi.
              </p>
              <p>
                <strong className="text-[#0F172A]">Can Oruc</strong>, fondateur et gérant,
                est technicien diplômé d'un Bac Pro TFCA. Basé à
                <strong className="text-[#0F172A]"> Cestas (33610)</strong>, il intervient
                sur toute la métropole bordelaise.
              </p>
              <p>
                Ce qui fait la différence ? Un interlocuteur unique, des conseils
                honnêtes, et un travail soigné. Pas de sous-traitance — c'est Can
                qui étudie votre projet, réalise les travaux et assure le suivi.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12 space-y-6 relative">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#E2E8F0]" />
              {timeline.map((m, i) => (
                <div key={i} className="relative pl-10">
                  <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-[#0369A1]/10 flex items-center justify-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#0369A1]" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0369A1]">{m.year}</p>
                  <p className="text-[#334155] font-medium mt-0.5">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Card + stats */}
          <div className="space-y-6">
            {/* Profile card */}
            <div className="rounded-2xl bg-[#0F172A] p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-xl bg-[#0369A1] flex items-center justify-center">
                  <span className="text-2xl font-extrabold">CO</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Can Oruc</h3>
                  <p className="text-slate-400 text-sm">Fondateur & Gérant</p>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-[#0EA5E9] shrink-0" />
                  <span className="text-slate-300">Bac Pro TFCA</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#0EA5E9] shrink-0" />
                  <span className="text-slate-300">Cestas (33610) — Bordeaux Métropole</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-[#0EA5E9] shrink-0" />
                  <span className="text-slate-300">Garantie décennale</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-[#0EA5E9] shrink-0" />
                  <span className="text-slate-300">SIRET : 987 418 076 00012</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-[#F8FAFC] rounded-xl p-5 text-center border border-[#E2E8F0]">
                    <Icon className="mx-auto mb-2 h-5 w-5 text-[#0369A1]" />
                    <p className="text-2xl font-extrabold text-[#0F172A]">{s.value}</p>
                    <p className="text-xs text-[#64748B] mt-0.5">{s.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Brands */}
            <div className="rounded-xl border border-[#E2E8F0] p-5 bg-[#F8FAFC]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
                Marques installées
              </p>
              <div className="flex flex-wrap gap-2">
                {["Daikin", "Mitsubishi", "Heiwa", "Ariston", "Atlantic"].map((b) => (
                  <span key={b} className="px-3 py-1 rounded-md bg-white text-xs font-medium text-[#334155] border border-[#E2E8F0]">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
