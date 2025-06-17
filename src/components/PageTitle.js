// src/components/PageTitle.jsx

export default function PageTitle({ className, children,  color="terre"  }) {
  
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
    <h1 className={`${className}
      pt-12 sm:pt-16 lg:pt-24
      text-2xl sm:text-3xl lg:text-5xl
      font-heading font-bold
      text-center
      `}
      style={{ color: resolveColor(color) }}
    >
    {children}
    </h1>
  );
}