// src/app/legal/page.js

import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";

export default function LegalMentionsPage() {
  return (
    <div className="bg-terre">
      <PageTitle color="ocre">Mentions légales</PageTitle>
      <Section className="text-creme">
          <div className="mb-6">
            <h3 className="font-semibold">Éditeur du site</h3>
            <p>Le Brunch Bordelais (site fictif)<br/>
            Statut : Auto-entrepreneur<br/>
            Adresse : 12 rue du Brunch, 33000 Bordeaux<br/>
            Email : contact@brunchbordelais.fr<br/>
            SIRET : 123 456 789 00000</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Directeur de la publication</h3>
            <p>Jeanne Martin</p>
          </div>

<div className="mb-6">
  <h3 className="font-semibold">Hébergeur</h3>
  <p>
    Vercel Inc.<br />
    440 N Barranca Ave #4133,<br />
    Covina, CA 91723, United States<br />
    <a href="https://vercel.com" className="underline text-[#D8973C]">www.vercel.com</a>
  </p>
</div>

          <div className="mb-6">
            <h3 className="font-semibold">Propriété intellectuelle</h3>
            <p>
              Les contenus de ce site (textes, visuels, photos) sont la propriété exclusive de Brunch & Bordeaux.<br/>
              Toute reproduction sans autorisation est interdite.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">Cookies & données personnelles</h3>
            <p>
              Ce site utilise des cookies uniquement à des fins statistiques anonymes.<br/>
              Aucune donnée personnelle n&rsquo;est collectée sans consentement.
            </p>
          </div>
      </Section>
    </div>  
  );
}