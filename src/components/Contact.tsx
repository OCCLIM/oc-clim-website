"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle, Mail } from "lucide-react";

const infoCards = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["2B Chemin du Chibaley", "33610 Cestas"],
    color: "from-[#1e3a5f] to-[#2b4a73]",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    lines: ["7 jours sur 7", "Week-ends et jours fériés"],
    color: "from-[#2b4a73] to-[#5b9bd5]",
  },
  {
    icon: Phone,
    title: "Réactivité",
    lines: ["Réponse en 22 min en moyenne", "Devis gratuit & sans engagement"],
    color: "from-[#5b9bd5] to-[#4a90c2]",
  },
];

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
    nom: "",
    telephone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setForm({ nom: "", telephone: "", email: "", service: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#f8fbff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-[#5b9bd5]/10 text-[#5b9bd5] mb-5">
            <Mail className="h-3.5 w-3.5" />
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e3a5f] leading-tight">
            Parlons de votre projet
          </h2>
          <p className="mt-5 text-lg text-[#5a7394] leading-relaxed">
            Décrivez votre besoin et recevez une réponse rapide.
            Devis gratuit et sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(30,58,95,0.04)] border border-[#e5eef7] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 shadow-lg shadow-[#1e3a5f]/10`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a5f]">{card.title}</h3>
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-sm text-[#5a7394] mt-0.5">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-[#e5eef7] overflow-hidden shadow-[0_2px_20px_rgba(30,58,95,0.04)] flex-1 min-h-[200px]">
              <div className="h-full flex flex-col items-center justify-center p-6 text-center bg-[#f0f6ff]">
                <MapPin className="h-8 w-8 text-[#5b9bd5] mb-3" />
                <p className="font-bold text-[#1e3a5f]">Zone d&apos;intervention</p>
                <p className="text-sm text-[#5a7394] mt-1">
                  Cestas, Bordeaux, Pessac, Talence,
                  <br />
                  Mérignac, Gradignan et alentours
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 shadow-[0_4px_30px_rgba(30,58,95,0.06)] border border-[#e5eef7]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] text-center">
                  Demande envoyée !
                </h3>
                <p className="text-[#5a7394] mt-3 text-center max-w-md">
                  Merci pour votre confiance. Can vous recontactera dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                      Nom complet
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-[#e5eef7] bg-[#f8fbff] px-4 py-3 text-sm text-[#1e3a5f] placeholder:text-[#a8bcd2] focus:outline-none focus:ring-2 focus:ring-[#5b9bd5]/30 focus:border-[#5b9bd5] transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                      Téléphone
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      value={form.telephone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                      className="w-full rounded-xl border border-[#e5eef7] bg-[#f8fbff] px-4 py-3 text-sm text-[#1e3a5f] placeholder:text-[#a8bcd2] focus:outline-none focus:ring-2 focus:ring-[#5b9bd5]/30 focus:border-[#5b9bd5] transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full rounded-xl border border-[#e5eef7] bg-[#f8fbff] px-4 py-3 text-sm text-[#1e3a5f] placeholder:text-[#a8bcd2] focus:outline-none focus:ring-2 focus:ring-[#5b9bd5]/30 focus:border-[#5b9bd5] transition"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Type de service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#e5eef7] bg-[#f8fbff] px-4 py-3 text-sm text-[#1e3a5f] focus:outline-none focus:ring-2 focus:ring-[#5b9bd5]/30 focus:border-[#5b9bd5] transition"
                  >
                    <option value="" disabled>Choisir un service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#1e3a5f] mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full rounded-xl border border-[#e5eef7] bg-[#f8fbff] px-4 py-3 text-sm text-[#1e3a5f] placeholder:text-[#a8bcd2] focus:outline-none focus:ring-2 focus:ring-[#5b9bd5]/30 focus:border-[#5b9bd5] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#1e3a5f] to-[#5b9bd5] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[#1e3a5f]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  Envoyer ma demande
                </button>

                <p className="text-center text-xs text-[#a8bcd2]">
                  Devis 100% gratuit &middot; Réponse sous 24h &middot; Sans engagement
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
