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
            <img src="/images/plat.jpg" className="rounded-lg" alt="" />
                        <img src="/images/cafe.jpg" className="rounded-lg" alt="" />
            <img src="/images/brunch.jpg" className="rounded-lg" alt="" />
            <img src="/images/table.jpg" className="rounded-lg" alt="" />
            <img src="/images/degustation.jpg" className="rounded-lg" alt="" />
                <img src="/images/cake.jpg" className="rounded-lg" alt="" />
            </div>
        </Section>
    )
}