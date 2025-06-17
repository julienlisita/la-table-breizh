// src/app/contact/page.js

import ContactForm from "@/components/ContactForm";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
         
      {/* Formulaire de contact*/}
      <Section bgColor="white">
        <p className="text-left max-w-2xl mx-auto ">
          Une demande spéciale, une question ou une idée ? Écrivez-nous ici, on vous répond rapidement.
        </p>
        <div className="w-full flex justify-center mt-3 sm:mt-4 lg:mt-5">
          <ContactForm/>
        </div>
      </Section>  
    </>
  );
}