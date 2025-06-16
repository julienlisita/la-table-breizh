// src/components/ContactSection.js

import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { LuClock3 } from "react-icons/lu";
import SectionTitle from "./SectionTitle";
import Section from "./Section";
import Button from "./Button";

export default function ContactSection()
{
    return (
      <Section bgColor="creme">
        <SectionTitle>Infos & Contact</SectionTitle>
        <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center justify-center gap-2">
          <LuClock3 className="text-[#D8973C] text-xl" />
        <span>Ouvert du mardi au dimanche, 9h – 15h</span>
        </div>
        <div className="mt-3 sm:mt-4 lg:mt-5 flex items-center justify-center gap-2">
          <HiPhone className="text-ocre text-xl" />
          <a href="tel:+33612345678" className="hover:underline">+33 6 23 00 04 49</a>
        </div>
        <div className="mt-4 sm:mt-6 lg:mt-8 flex items-center justify-center gap-2">
          <HiOutlineLocationMarker className="text-[#D8973C] text-xl" />
          <span>24 rue des Remparts, Bordeaux</span>
        </div>
        <div className="mt-3 sm:mt-4 lg:mt-5 text-center ">
          <Button href="/contact">Nous écrire</Button>
        </div>
          {/* Carte Google Maps embed (responsive) */}
        <div className="mt-6">
          <iframe
            title="Plan Le Brunch Bordelais"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.315253547927!2d-0.57918!3d44.837789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527fe4e938ff1%3A0xa7fdf5e09d10cfde!2s24%20Rue%20des%20Remparts%2C%2033000%20Bordeaux!5e0!3m2!1sfr!2sfr!4v1629999999999!5m2!1sfr!2sfr"
            width="100%"
            height="250"
            className="rounded-xl border border-[#D8973C]"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Section>
    )
}