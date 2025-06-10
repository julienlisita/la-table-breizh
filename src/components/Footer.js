// src/components/common/Footer.jsx

'use client';

import Link from 'next/link';
import { Facebook, Instagram } from "lucide-react"; 

export default function Footer()
{
    return (       
        <footer className="relative bg-terre px-4 py-3 flex flex-col items-center">
            {/* Bloc central centré dans la page */}
            <div className="text-center text-white">
                <nav className="text-sm flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-6 mb-1">
                <Link className="hover:underline" href="/about">À propos</Link>
                <Link className="hover:underline" href="/legal">Mentions légales</Link>
                </nav>
                <p className="text-xs text-gray-400">© 2025 Le Brunch Bordelais.</p>
            </div>

            {/* Réseaux sociaux positionnés à droite sur desktop */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-7 text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-7 text-white" />
                </a>
            </div>

            {/* Réseaux sociaux en colonne sur mobile */}
            <div className="mt-4 flex sm:hidden space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-7 text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-7 text-white" />
                </a>
            </div>
        </footer>
    )
}