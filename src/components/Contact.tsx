"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle, Mail } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const serviceOptions = [
  "Installation climatisation",
  "Pompe à chaleur Air/Air",
  "Pompe à chaleur Air/Eau",
  "Système gainable",
  "Entretien & maintenance",
  "Dépannage urgent",
  "Autre demande",
];

export default function Contact() {
  const [form, setForm] = useState({
    nom: "", telephone: "", email: "", service: "", message: "",
  });
  const [rgpd, setRgpd] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ nom: "", telephone: "", email: "", service: "", message: "" });
      }, 6000);
    } catch {
      setError("Une erreur est survenue. Appelez-nous directement au 07 67 11 75 30.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-[#E5E5E5] bg-white px-4 py-3.5 text-sm text-[#333338] placeholder:text-[#BBB] focus:outline-none focus:ring-2 focus:ring-[#111]/10 focus:border-[#333338] transition";

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#999] mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#333338]">
              Estimation de votre projet
            </h2>
            <p className="mt-4 text-lg text-[#777]">
              Décrivez votre besoin et recevez une réponse rapide. Devis gratuit et sans engagement.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: K2-style info block */}
          <ScrollReveal className="lg:col-span-2">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/projets/08-multi-split-daikin.jpg"
                alt="Contactez OC CLIM"
                fill
                className="object-cover"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center mb-4 p-1.5">
                  <Image src="/images/logo.png" alt="OC CLIM" width={28} height={28} className="h-7 w-7 object-contain" />
                </div>
                <div className="space-y-3 text-sm text-white/80">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-white/50 shrink-0" />
                    <a href="tel:0767117530" className="hover:text-white transition-colors font-semibold">07 67 11 75 30</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-white/50 shrink-0" />
                    <a href="mailto:contact@occlim.fr" className="hover:text-white transition-colors">contact@occlim.fr</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-white/50 shrink-0" />
                    <span>Bordeaux Métropole & alentours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-white/50 shrink-0" />
                    <span>7j/7 — Week-ends inclus</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal delay={200} className="lg:col-span-3">
            <div className="bg-[#FAFAFA] rounded-2xl p-8 lg:p-10 border border-[#E5E5E5]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                    <CheckCircle className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[#333338]">Demande envoyée !</h3>
                  <p className="text-[#777] mt-2 text-center max-w-sm">
                    Merci pour votre confiance. Can vous recontactera dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nom" className="block text-xs font-bold uppercase tracking-wider text-[#999] mb-2">Nom complet</label>
                      <input id="nom" name="nom" type="text" required value={form.nom} onChange={handleChange} placeholder="Votre nom" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-xs font-bold uppercase tracking-wider text-[#999] mb-2">Téléphone</label>
                      <input id="telephone" name="telephone" type="tel" required value={form.telephone} onChange={handleChange} placeholder="06 00 00 00 00" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#999] mb-2">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="votre@email.com" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#999] mb-2">Type de service</label>
                    <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputClass}>
                      <option value="" disabled>Choisir un service</option>
                      {serviceOptions.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#999] mb-2">Message</label>
                    <textarea id="message" name="message" rows={4} required value={form.message} onChange={handleChange} placeholder="Décrivez votre projet..." className={`${inputClass} resize-none`} />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      id="rgpd"
                      type="checkbox"
                      checked={rgpd}
                      onChange={(e) => setRgpd(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 rounded border-[#E5E5E5] text-[#333338] focus:ring-[#333338]"
                    />
                    <label htmlFor="rgpd" className="text-xs text-[#999] leading-relaxed">
                      J'accepte que mes données soient traitées conformément à la{" "}
                      <a href="/confidentialite" className="underline hover:text-[#333338] transition-colors">
                        politique de confidentialité
                      </a>{" "}
                      d'OC CLIM. *
                    </label>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg py-3">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#333338] text-white font-bold py-4 rounded-lg text-sm uppercase tracking-wide hover:bg-[#535358] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-[#BBB]">
                    Devis 100% gratuit · Réponse sous 24h · Sans engagement
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
