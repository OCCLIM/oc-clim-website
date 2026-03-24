"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "Téléphone",
    description: "Contactez-nous via le formulaire",
  },
  {
    icon: MapPin,
    title: "Zone d'intervention",
    description: "Cestas (33610) & tout Bordeaux Métropole",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    description: "7j/7 — Week-ends et jours fériés",
  },
];

const services = [
  "Installation climatisation",
  "Pompe à chaleur Air/Air",
  "Pompe à chaleur Air/Eau",
  "Entretien & maintenance",
  "Dépannage urgent",
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a]">
            Demandez votre devis gratuit
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Décrivez votre projet et recevez une réponse rapide. Devis gratuit
            et sans engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left column — info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0057b8]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#0057b8]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right column — form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-9 h-9 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] text-center">
                  Votre demande a bien été envoyée !
                </h3>
                <p className="text-gray-600 mt-2 text-center max-w-md">
                  Nous vous recontacterons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-[#0f172a] mb-1.5"
                    >
                      Nom
                    </label>
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      value={form.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057b8]/40 focus:border-[#0057b8] transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telephone"
                      className="block text-sm font-medium text-[#0f172a] mb-1.5"
                    >
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
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057b8]/40 focus:border-[#0057b8] transition"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0f172a] mb-1.5"
                  >
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
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057b8]/40 focus:border-[#0057b8] transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-[#0f172a] mb-1.5"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057b8]/40 focus:border-[#0057b8] transition bg-white"
                  >
                    <option value="" disabled>
                      Choisir un service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#0f172a] mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet ou votre besoin..."
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057b8]/40 focus:border-[#0057b8] transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0057b8] hover:bg-[#004494] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  <Send className="w-5 h-5" />
                  Envoyer la demande de devis
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
