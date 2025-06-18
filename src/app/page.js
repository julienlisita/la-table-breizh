// src/app/page.js

'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import SpecialitiesSection from "@/components/SpecialitiesSection";
import HeroSection from "@/components/HeroSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import ConceptSection from "@/components/ConceptSection";
import AmbianceSection from "@/components/AmbianceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Image from 'next/image';

export default function HomePage() {
  
  const contactTriggerRef = useRef(null);
  const [showBrunchImage, setShowBrunchImage] = useState(false);

  const handleIntersection = useCallback(([entry]) => {
    setShowBrunchImage(prev => {
      if (prev !== entry.isIntersecting) {
        return entry.isIntersecting;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px 0px 200px 0px', 
      threshold: 0,
    });

    const target = contactTriggerRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [handleIntersection]);

  return (
    <main className="relative">
      {/* Image de fond dynamique */}
      <div className="fixed inset-0 -z-20">
         <Image
          src={showBrunchImage ? "/images/secondary-bg.avif" : "/images/hero-bg.avif"}
          alt="Fond de page"
          layout="fill"
          objectFit="cover"
          priority={!showBrunchImage} 
          />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Section Hero */}
      <HeroSection />

      {/* Section Concept */}
      <ConceptSection />

      {/* Section spécialités */}
      <SpecialitiesSection />

      {/* Section Engagement */}
      <CommitmentsSection />

      {/* Section Ambiance */}
      <AmbianceSection />

      {/* Section Témoignages */}
      <TestimonialsSection />

      {/* Bandeau de transition */}
      <div ref={contactTriggerRef}  className="relative h-48 z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-10" />
      </div>

      {/* Section Infos & Contact */}
      <ContactSection />
    </main>
  );
}