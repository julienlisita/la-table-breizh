// src/components/HeroSection.js

import Button from "./Button";
import PageTitle from "./PageTitle";

export default function HeroSection()
{
    return (
        <section className="h-screen flex flex-col items-center justify-center text-white text-center px-4 space-y-12">
          <PageTitle color="creme">Le brunch Bordelais</PageTitle>
          <p className="text-creme text-xl sm:text-2xl lg:text-3xl font-tagline font-semibold leading-snug">
            Brunch maison<br />
            Produits locaux<br />
            Ambiance conviviale
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/menu">Voir le menu</Button>
            <Button href="/contact">Nous contacter</Button>
          </div>
        </section>
    )
}