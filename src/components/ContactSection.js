// src/components/ContactSection.js

import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import Button from "./Button";

export default function ContactSection()
{
    return (
      <Section bgColor="creme">
        <SectionTitle>Infos & Contact</SectionTitle>
        <div className="mt-4 sm:mt-6 lg:mt-8 flex items-center justify-center gap-2">
          <HiOutlineLocationMarker className="text-[#D8973C] text-xl" />
          <span>24 rue des Remparts, Bordeaux</span>
        </div>
        <div className=" mt-3 sm:mt-4 lg:mt-5 flex items-center justify-center gap-2">
          <LuClock3 className="text-[#D8973C] text-xl" />
          <span>Ouvert du mardi au dimanche, 9h – 15h</span>
        </div>
        <div className="mt-3 sm:mt-4 lg:mt-5 text-center ">
          <Button href="/contact">Nous contacter</Button>
        </div>
      </Section>
    )
}