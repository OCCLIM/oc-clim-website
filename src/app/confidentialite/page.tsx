import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Politique de confidentialité — OC CLIM",
  description: "Politique de confidentialité et de protection des données personnelles de OC CLIM.",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#999] hover:text-[#333338] transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour au site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#333338] mb-10">
          Politique de confidentialité
        </h1>

        <div className="prose prose-sm prose-gray max-w-none space-y-8 text-[#555]">
          <p className="text-[#777]">
            Dernière mise à jour : 30 mars 2026
          </p>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est :<br />
              <strong>OC CLIM</strong> — Can Oruc<br />
              SIRET : 987 418 076 00012<br />
              Email : <a href="mailto:contact@occlim.fr" className="underline">contact@occlim.fr</a><br />
              Téléphone : 07 67 11 75 30
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">2. Données collectées</h2>
            <p>Nous collectons les données suivantes via notre formulaire de contact :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Nom complet</li>
              <li>Numéro de téléphone</li>
              <li>Adresse email</li>
              <li>Type de service demandé</li>
              <li>Message / description du projet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">3. Finalité du traitement</h2>
            <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Répondre à votre demande de devis ou d'information</li>
              <li>Vous recontacter par téléphone ou email concernant votre projet</li>
              <li>Assurer le suivi de la relation commerciale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">4. Base légale</h2>
            <p>
              Le traitement de vos données est fondé sur votre <strong>consentement</strong> (case cochée
              dans le formulaire de contact) conformément à l'article 6.1.a du RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">5. Destinataires des données</h2>
            <p>
              Vos données sont uniquement accessibles à Can Oruc (gérant de OC CLIM).
              Elles ne sont <strong>ni vendues, ni louées, ni cédées à des tiers</strong>.
            </p>
            <p>
              Les données transitent par le service d'envoi d'email Microsoft Outlook (SMTP)
              pour l'acheminement des messages du formulaire de contact.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">6. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant une durée maximale de <strong>3 ans</strong> à
              compter de votre dernier contact, sauf obligation légale imposant une durée différente.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Droit d'accès</strong> : obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit de suppression</strong> : demander l'effacement de vos données</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</li>
            </ul>
            <p>
              Pour exercer vos droits, contactez-nous à :{" "}
              <a href="mailto:contact@occlim.fr" className="underline">contact@occlim.fr</a>
            </p>
            <p>
              Vous pouvez également déposer une réclamation auprès de la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline">CNIL</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">8. Cookies</h2>
            <p>
              Ce site n'utilise <strong>aucun cookie de tracking, publicitaire ou analytique</strong>.
              Aucun outil de type Google Analytics n'est installé.
              Seuls des cookies techniques strictement nécessaires peuvent être déposés par l'hébergeur (Vercel).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">9. Sécurité</h2>
            <p>
              Nous mettons en place les mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, perte ou altération.
              Le site est servi en HTTPS et les communications email sont chiffrées (TLS).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">10. Modification de cette politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité.
              En cas de modification substantielle, la date de mise à jour en haut de cette page sera actualisée.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
