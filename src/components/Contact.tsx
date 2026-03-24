"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle, Mail } from "lucide-react";

const serviceOptions = [
  "Installation climatisation",
  "Pompe à chaleur Air/Air",
  "Pompe à chaleur Air/Eau",
  "Entretien & maintenance",
  "Dépannage urgent",
  "Autre demande",
];

export default function Contact() {
  const [form, setForm] = useState({
    nom: "", telephone: "", email: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ nom: "", telephone: "", email: "", service: "", message: "" });
    }, 5000);
  }

  const inputClass =
    "w-full rounded-lg border border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3 text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111] transition";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#111111] mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] leading-tight">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-lg text-[#777777]">
            Décrivez votre besoin et recevez une réponse rapide.
            Devis gratuit et sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: "Téléphone", lines: ["07 67 11 75 30", "Réponse rapide"] },
              { icon: Mail, title: "Email", lines: ["occlim@outlook.com"] },
              { icon: MapPin, title: "Adresse", lines: ["2B Chemin du Chibaley", "33610 Cestas"] },
              { icon: Clock, title: "Disponibilité", lines: ["7 jours sur 7", "Week-ends et jours fériés"] },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="flex items-start gap-4 bg-[#FAFAFA] rounded-xl p-5 border border-[#E5E5E5]">
                  <div className="h-10 w-10 rounded-lg bg-[#111111]/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-[#111111]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111111] text-sm">{card.title}</h3>
                    {card.lines.map((l, i) => (
                      <p key={i} className="text-sm text-[#777777]">{l}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Zone */}
            <div className="bg-[#FAFAFA] rounded-xl border border-[#E5E5E5] p-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-[#111111]" />
                <h3 className="font-semibold text-[#111111] text-sm">Zone d'intervention</h3>
              </div>
              <p className="text-sm text-[#777777]">
                Cestas, Bordeaux, Pessac, Talence, Mérignac, Gradignan et alentours
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-[#FAFAFA] rounded-2xl p-8 border border-[#E5E5E5]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-[#111111]">Demande envoyée !</h3>
                <p className="text-[#777777] mt-2 text-center max-w-sm">
                  Merci pour votre confiance. Can vous recontactera dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-medium text-[#111111] mb-1.5">Nom complet</label>
                    <input id="nom" name="nom" type="text" required value={form.nom} onChange={handleChange} placeholder="Votre nom" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-[#111111] mb-1.5">Téléphone</label>
                    <input id="telephone" name="telephone" type="tel" required value={form.telephone} onChange={handleChange} placeholder="06 00 00 00 00" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#111111] mb-1.5">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="votre@email.com" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#111111] mb-1.5">Type de service</label>
                  <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputClass}>
                    <option value="" disabled>Choisir un service</option>
                    {serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#111111] mb-1.5">Votre message</label>
                  <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} placeholder="Décrivez votre projet ou besoin..." className={`${inputClass} resize-none`} />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white font-semibold py-3 rounded-lg hover:bg-[#111111] transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Envoyer ma demande
                </button>

                <p className="text-center text-xs text-[#999999]">
                  Devis 100% gratuit · Réponse sous 24h · Sans engagement
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
