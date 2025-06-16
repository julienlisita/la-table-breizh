// components/ContactForm.jsx

'use client';

import { useState } from "react";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";
import Button from "./Button";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

      return (
        <form className="w-full max-w-2xl bg-creme rounded-2xl p-8 space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <FloatingInput label="Nom" name="name" type="text" required />
          <FloatingInput label="Email" name="email" type="email" required />
          <FloatingTextarea label="Message" name="message" required />
          <div className="text-center">
            <Button 
            type="submit"
            variant="primary"
            >
              Envoyer
            </Button>
          </div>
        </form>
    )
}