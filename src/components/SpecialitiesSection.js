// src/components/SpecialitiesSection.js

import Button from "./Button";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SpecialityCard from "./SpecialityCard";

const specialities = [
  {
    imageSrc: "/images/poached-egg.jpg",
    title: "Œufs brouillés bio",
    description: "Œufs de ferme, cuits à la perfection.",
  },
  {
    imageSrc: "/images/granola-yogurt.jpg",
    title: "Bol de granola",
    description: "Granola maison, yaourt et fruits frais de saison.",
  },
  {
    imageSrc: "/images/pastries.jpg",
    title: "Viennoiseries artisanales",
    description: "Croissants, pains au chocolat et brioches locales.",
  },
];

export default function SpecialitiesSection() {
  return (
    <Section bgColor="creme">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Nos spécialités</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 sm:mt-6 lg:mt-8">
          {specialities.map((item, index) => (
            <SpecialityCard
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="mt-3 sm:mt-4 lg:mt-5 text-center">
          <Button href="/menu">Voir le menu</Button>
        </div>
      </div>
    </Section>
  );
}