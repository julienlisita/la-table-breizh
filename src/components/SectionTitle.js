// src/components/common/SectionTitle.jsx

export default function SectionTitle({ className, children, id, color="black" }) {
    
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

    return (
      <h2 
        id={id}
        className={`${className}
        text-xl sm:text-2xl lg:text-3xl 
        font-heading text-center font-semibold
        `}
        style={{ color: resolveColor(color) }}
      >
        {children}
      </h2>
    );
  }