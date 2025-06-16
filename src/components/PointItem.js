// src/components/PointItem.js

export default function PointItem({bgColor, icon:Icon, iconColor, title, titleColor, description, descriptionColor})
{
  const resolveColor = (color) => {
  if (
    color.startsWith("#") ||
    color.startsWith("rgb") ||
    color.startsWith("hsl")
  ) {
    return color;
  }

  // Sinon, on suppose que c'est un nom de variable
  return `var(--color-${color})`;
};
    return (
    <li
      className="flex flex-col items-center text-center p-4 rounded-lg"
      style={{ backgroundColor: resolveColor(bgColor) }}
    >
      <Icon className="w-10 h-10 mb-2" style={{ color: resolveColor(iconColor) }} />
      <div className="font-semibold" style={{ color: resolveColor(titleColor) }}>
        {title}
      </div>
      {description && (
        <p className="text-sm mt-1 max-w-xs" style={{ color: resolveColor(descriptionColor) }}>
          {description}
        </p>
      )}
    </li>
    )
}