// src/components/home/SkillsPreview.jsxcomponents/common/Button.jsx

'use client';

import Link from 'next/link';

export default function Button({ variant = "primary", ...props }) {
  const baseStyles = `
    inline-block 
    px-6 py-3 text-sm                            
    sm:px-5 sm:py-2.5 sm:text-base         
    lg:px-6 lg:py-3 lg:text-lg  
    font-semibold 
    rounded-[15] 
  `;

  const variantStyles = {
    primary: `
      text-white
      bg-ocre
      hover:text-ocre
      hover:bg-creme
      hover:outline-2
      hover:outline-ocre
      active:bg-transparent
      active:text-[#222222]
    `,
    secondary: `
      text-terre
      bg-transparent
      border
      border-terre
      hover:bg-ocre
      hover:text-white
      hover:border-none
      active:bg-transparent
      active:text-[#222222]
    `
  };

  const newProps = {
    ...props,
    className: `${baseStyles} ${variantStyles[variant]} ${props.className || ""}`
  };

  if (props.to) {
    return <Link download={props.download} {...newProps} />;
  }

  return <button {...newProps} />;
}