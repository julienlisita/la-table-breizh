// src/app/about/page.js

import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
      <div>
        <PageTitle>À propos de Le Brunch Bordelais</PageTitle>
        <Section>
          <p className="mb-4">
            Situé au cœur de Bordeaux, <strong>Le Brunch Bordelais</strong> est un lieu de partage et de gourmandise, pensé pour les amoureux du brunch.
            Notre cuisine maison s'inspire des produits locaux et de saison, dans un cadre cosy aux tons naturels.
          </p>

          <p className="mb-6 text-[#7A9E7E] font-medium">
            Notre engagement : offrir une expérience conviviale, éthique et savoureuse, chaque week-end.
          </p>

          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Recettes gourmandes & créatives</li>
            <li>Options végétariennes et sans gluten</li>
            <li>Produits frais & circuits courts</li>
            <li>Ambiance chaleureuse, enfants & animaux bienvenus</li>
          </ul>

          <p className="text-xl">Venez bruncher autrement à Bordeaux !</p>
      </Section>
    </div>   
  );
}