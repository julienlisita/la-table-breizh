// src/components/AmbianceSection.js

import { PiCoffeeDuotone } from "react-icons/pi";
import SectionTitle from "./SectionTitle";
import Section from "./Section";

export default function AmbianceSection()
{
    return (
        <Section bgColor="#EFE8DC">
            <SectionTitle  color="terre">L'ambiance</SectionTitle>
            <p className="max-w-2xl mx-auto text-center mt-3 sm:mt-4 lg:mt-5">
            Un lieu chaleureux pour se retrouver entre amis, en famille, ou travailler au calme. Bois brut, lumière douce, musique jazzy : le brunch, c’est un moment à soi.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3 sm:mt-4 lg:mt-5">
                <img src="/images/repas.jpg" className="rounded-lg" alt="" />
                <img src="/images/peach-juice.jpg" className="rounded-lg" alt="" />
                <img src="/images/coffee.jpg" className="rounded-lg" alt="" />
                <img src="/images/outside.jpg" className="rounded-lg" alt="" />
                <img src="/images/bread.jpg" className="rounded-lg" alt="" />
                <img src="/images/breakslow.jpg" className="rounded-lg" alt="" />
            </div>
        </Section>
    )
}