// src/components/SpecialityCard.js

import Image from 'next/image';
import React from "react";

const SpecialityCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl overflow-hidden transition hover:scale-105 hover:shadow-lg">
     <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#3B2F2F]">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default SpecialityCard;