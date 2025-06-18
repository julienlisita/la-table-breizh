// src/components/AmbianceSection.js

import { PiCoffeeDuotone } from "react-icons/pi";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import Image from 'next/image';

export default function AmbianceSection()
{
    return (
        <Section bgColor="#EFE8DC">
            <SectionTitle  color="terre">L&apos;ambiance</SectionTitle>
            <p className="max-w-2xl mx-auto text-center mt-3 sm:mt-4 lg:mt-5">
            Un lieu chaleureux pour se retrouver entre amis, en famille, ou travailler au calme. Bois brut, lumière douce, musique jazzy : le brunch, c’est un moment à soi.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3 sm:mt-4 lg:mt-5">
                <div className="relative w-full aspect-square">
                    <Image src="/images/repas.jpg" alt="Plat servi" className="rounded-lg" fill objectFit="cover" />
                </div>
                <div className="relative w-full aspect-square">
                    <Image src="/images/peach-juice.jpg" alt="Jus de pêche" className="rounded-lg" fill objectFit="cover" />
                </div>
                <div className="relative w-full aspect-square">
                    <Image src="/images/coffee.jpg" alt="Tasse de café" className="rounded-lg" fill objectFit="cover" />
                </div>
                <div className="relative w-full aspect-square">
                    <Image src="/images/outside.jpg" alt="Terrasse extérieure" className="rounded-lg" fill objectFit="cover" />
                </div>
                <div className="relative w-full aspect-square">
                    <Image src="/images/bread.jpg" alt="Pain frais" className="rounded-lg" fill objectFit="cover" />
                </div>
                <div className="relative w-full aspect-square">
                    <Image src="/images/breakslow.jpg" alt="Petit-déjeuner brunch" className="rounded-lg" fill objectFit="cover" />
                </div>
            </div>
        </Section>
    )
}