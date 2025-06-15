// src/components/CommitmentsSection.js

import { FiSun } from "react-icons/fi";
import { FaRecycle } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import PointItem from "./PointItem";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function CommitmentsSection()
{
      const commitmentItems = [
        {
          icon: FiSun,
          title: "Produits de saison",
          description: "Une carte qui suit le rythme de la nature.",
        },
        {
          icon: GiFarmTractor,
          title: "Producteurs locaux",
          description: "Nos ingrédients viennent d’à côté, pas d’un autre continent.",
        },
        {
          icon: GiTomato,
          title: "Produits bruts",
          description: "Pas d’artifices : du vrai, du bon, du simple..",
        },
        {
          icon: FaRecycle,
          title: "Zéro gaspillage",
          description: "On valorise chaque ingrédient pour limiter le gaspillage.",
        }
      ]
    return (
        <Section bgColor="#7A9E7E">
            <SectionTitle color="creme">Nos engagements</SectionTitle>
            <p className="max-w-2xl mx-auto text-creme text-center mt-4 sm:mt-6 lg:mt-8">
            Nous travaillons avec des producteurs locaux et privilégions les produits artisanaux.
            </p>
                <ul
                  className="mt-3 sm:mt-4 lg:mt-5" 
                  style={{
                   listStyle: 'none',
                   padding: 0,
                   display: 'grid',
                   gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                   gap: '1.5rem',
                   textAlign: 'center',
                   }}>
                    {commitmentItems.map(item => (
                       <PointItem
                            key= {item.title}
                            bgColor="olivier"
                            icon = {item.icon}
                            iconColor="ocre"
                            title = {item.title}
                            titleColor = "creme"
                            description = {item.description}
                            descriptionColor="creme"
                        />
                    ))}
                 </ul>
        </Section>
    )
}