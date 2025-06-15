// src/components/ConceptSection.js

import { FaPlateWheat } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { GiCookingPot } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import PointItem from "./PointItem";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function ConceptSection()
{
  const conceptItems = [
    {
      icon: FaLeaf,
      title: "Retour à l’essentiel",
      description: "Des recettes simples, sincères, sans superflu.",
    },
    {
      icon: GiMeal,
      title: "Ambiance conviviale",
      description: "Comme à la maison, autour d’une bonne table.",
    },
    {
      icon: FaPlateWheat,
      title: "Pain artisanal",
      description: "Du pain frais, pétri chaque jour avec passion.",
    },
    {
      icon: GiCookingPot,
      title: "Produit fait maison",
      description: "Tout est préparé dans notre cuisine, du granola aux confitures.",
    }
  ]

  return (
    <Section bgColor="#EFE8DC">
      <SectionTitle>Notre concept</SectionTitle>
      <p className="max-w-2xl mx-auto mt-4 sm:mt-6 lg:mt-8 text-center">
        Chez Le Brunch Bordelais, on cuisine comme à la maison. Des plats simples et généreux, préparés avec des produits de saison et beaucoup d’amour. Ici, tout est fait maison, du granola aux confitures.
      </p>
      <ul className="mt-3 sm:mt-4 lg:mt-5" 
        style={{
        listStyle: 'none',
        padding: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '1.5rem',
        textAlign: 'center',
        }}>
          {conceptItems.map(item => (
            <PointItem
              key= {item.title}
              bgColor="#EFE8DC"
              icon = {item.icon}
              iconColor="ocre"
              title = {item.title}
              titleColor = "terre"
              description = {item.description}
              descriptionColor="terre"
            />
          ))}
      </ul>
    </Section>
  )
}