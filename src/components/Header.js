// src/components/common/Header.jsx

'use client';

import Link from 'next/link';
import { Menu, X } from "lucide-react"; 
import useToggle from "../hooks/useToggle";

export default function Header() {
  const { state: isOpen, toggleState } = useToggle(false);

  return (
    <header className="w-full h-14 sm:h-16 lg:h-20 flex items-center justify-between px-4 bg-creme fixed top-0 z-50">
      {/* Logo à gauche */}
      <div>
        <img src="/images/logo1.png" alt="Logo du restaurant" className="h-14 sm:h-16 lg:h-20 w-auto" />
      </div>

      {/* Nom (centré en tablette & desktop) */}
      <div className="hidden sm:block sm:text-lg lg:text-xl font-semibold font-heading text-terre bg-clip-text">
        Le brunch bordelais
      </div>

      {/* Menu desktop */}
      <nav className="hidden lg:flex space-x-6 text-terre font-bold">
        <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-terre" href="/">Accueil</Link>
        <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-terre" href="/menu">Menu</Link>
        <Link className="border-b-2 border-transparent hover:border-b-2 hover:border-terre" href="/contact">Contact</Link>
      </nav>

      {/* Burger menu mobile/tablette */}
      <button
        className="lg:hidden relative"
        onClick={toggleState}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X 
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-terre duration-300"
          />
        ) : (
          <Menu
            className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-terre duration-300"
          />
        )}
      </button>

      {/* Menu mobile/tablette déroulant */}
      <div className={[
        "absolute top-full left-0 w-full bg-terre text-gray-100 flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 lg:hidden",
        isOpen ? "max-h-96 opacity-100 translate-y-0 py-4" : "max-h-0 opacity-0 -translate-y-2 py-0"
      ]
        .filter(Boolean)
        .join(" ")}>
        <Link href="/" onClick={toggleState} className="hover:bg-creme hover:text-terre w-full px-4 py-2 rounded-md text-center transition-all duration-300">Accueil</Link>
        <Link href="/menu" onClick={toggleState} className="hover:bg-creme hover:text-terre w-full px-4 py-2 rounded-md text-center transition-all duration-300">Menu</Link>
        <Link href="/contact" onClick={toggleState} className="hover:bg-creme hover:text-terre w-full px-4 py-2 rounded-md text-center transition-all duration-300">Contact</Link>
      </div>
    </header>
  );
}