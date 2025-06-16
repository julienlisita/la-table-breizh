// src/app/page.js

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

import { Inter, Playfair_Display, Pacifico } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pacifico',
  display: 'swap',
})

export const metadata = {
  title: "Le Brunch Bordelais",
  description: "Restaurant de brunch à Bordeaux",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full w-full">
      <body className="h-full w-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 mt-14 sm:mt-16 lg:mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
