import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Mentions légales — OC CLIM",
  description: "Mentions légales du site OC CLIM, climatisation et pompes à chaleur à Bordeaux.",
};

export default function MentionsLegales() {
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
          Mentions légales
        </h1>

        <div className="prose prose-sm prose-gray max-w-none space-y-8 text-[#555]">
          <section>
            <h2 className="text-lg font-bold text-[#333338]">1. Éditeur du site</h2>
            <p>
              Le site <strong>oc-clim-website.vercel.app</strong> est édité par :<br />
              <strong>OC CLIM</strong> — Entreprise individuelle<br />
              Gérant : Can Oruc<br />
              SIRET : 987 418 076 00012<br />
              Adresse : Cestas (33610), Gironde, France<br />
              Téléphone : 07 67 11 75 30<br />
              Email : occlim@outlook.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">2. Hébergeur</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">3. Directeur de la publication</h2>
            <p>
              Can Oruc, en sa qualité de gérant de OC CLIM.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de OC CLIM,
              sauf mention contraire. Toute reproduction, représentation ou diffusion, en tout ou partie,
              du contenu de ce site est interdite sans l'autorisation préalable écrite de OC CLIM.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">5. Données personnelles</h2>
            <p>
              Les données personnelles collectées via le formulaire de contact (nom, téléphone, email, message)
              sont utilisées uniquement pour répondre à votre demande. Elles ne sont ni vendues ni cédées à des tiers.
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
              Pour exercer ce droit, contactez-nous à : <a href="mailto:occlim@outlook.com" className="underline">occlim@outlook.com</a>.
            </p>
            <p>
              Pour en savoir plus, consultez notre{" "}
              <Link href="/confidentialite" className="underline">politique de confidentialité</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">6. Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de tracking ou publicitaires.
              Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">7. Limitation de responsabilité</h2>
            <p>
              OC CLIM s'efforce d'assurer l'exactitude des informations diffusées sur ce site.
              Toutefois, OC CLIM ne saurait être tenu responsable des omissions, inexactitudes
              ou erreurs contenues dans ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333338]">8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français.
              En cas de litige, les tribunaux compétents seront ceux de Bordeaux.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
