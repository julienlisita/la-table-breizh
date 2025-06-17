// src/app/menu/page.js

import { menuItems, tagIcons } from "@/data/menuData";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";

const IconInline = ({ icon: Icon, label }) => (
  <Icon className="inline-block ml-1 text-[#7A9E7E]" title={label} />
);

const IconLabel = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-1 text-sm text-[#7A9E7E]" title={label}>
    <Icon className="text-[#7A9E7E]" />
    <span>{label}</span>
  </div>
);

export default function MenuPage() {
  const grouped = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <>
      <PageTitle>Notre menu brunch</PageTitle>
      <Section>
        <div className="bg-creme px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12 max-w-4xl mx-auto rounded-xl">
          {Object.entries(grouped).map(([category, items], index) => (
            <section key={category} className="my-6">
              <SectionTitle>{category}</SectionTitle>
              <div className={index > 0 ? "mt-4 sm:mt-6 lg:mt-8" : ""}>
                {items.map((item, i) => (
                  <div key={i} className="flex justify-between items-start mt-4">
                    <div>
                      <p className="flex items-center font-medium text-terre">
                        {item.name}
                        {item.tags.map((tag) => {
                          const Tag = tagIcons[tag];
                          return Tag ? (
                            <IconInline key={tag} icon={Tag.icon} label={Tag.label} />
                          ) : null;
                        })}
                      </p>
                      {item.description && (
                        <p className="text-sm text-[#7A9E7E]">{item.description}</p>
                      )}
                    </div>
                    <span className="font-semibold text-[#D8973C]">{item.price}</span>
                  </div>
                ))}
              </div>
              <hr className="border-t border-terre/40 border-[0.5px] mx-auto w-24 mt-8 sm:mt-10 lg:mt-12"/>
            </section>
          ))}

          {/* Légende */}
          <div className="mt-10 pt-6 border-t border-terre/40 text-sm text-[#7A9E7E] flex flex-wrap gap-6 justify-center">
            {Object.entries(tagIcons).map(([key, { icon, label }]) => (
              <IconLabel key={key} icon={icon} label={label} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}