// src/components/SectionTitle.js

const resolveColor = (color) => {
      if (
        color.startsWith("#") ||
        color.startsWith("rgb") ||
        color.startsWith("hsl")
      ) {
        return color;
      }
      return `var(--color-${color})`;
    };

export default function Section({className, bgColor="transparent", children}) {
  return (
    <section 
      className={`${className} px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12`}
      style={{ backgroundColor: resolveColor(bgColor) }}
    >
        {children}
    </section>
  );
}