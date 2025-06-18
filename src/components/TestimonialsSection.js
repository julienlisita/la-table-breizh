// src/components/TestimonialsSection.js

import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

const testimonials = [
  {
    name: "Clara L.",
    comment: "Un vrai brunch bordelais. Accueil au top et produits délicieux.",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "Julien M.",
    comment: "Enfin un brunch authentique, sans chichi. On reviendra !",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Sarah G.",
    comment: "Le lieu est chaleureux, les plats sont faits maison, j'ai adoré.",
    avatar: "/images/avatar3.jpg",
  },
  {
    name: "Louis D.",
    comment: "Une ambiance cosy et un service aux petits soins. Bravo !",
    avatar: "/images/avatar4.jpg",
  },
];

export default function TestimonialsSection()
{
    return (
      <Section bgColor="terre">
      <div className="max-w-4xl mx-auto">
        <FaQuoteLeft className="text-creme w-12 h-12 m-auto" />
        <SectionTitle className="mt-3 sm:mt-4 lg:mt-5" color="creme">Ils en parlent mieux que nous</SectionTitle>
        <div className="space-y-6 mt-4 sm:mt-6 lg:mt-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="relative  text-lg text-center text-creme"
            >
              <p className="italic">{t.comment}</p>
              <footer className="text-sm text-ocre text-center font-semibold">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </Section>
    )
}