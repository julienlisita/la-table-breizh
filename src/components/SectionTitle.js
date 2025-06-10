// src/components/common/SectionTitle.jsx

export default function SectionTitle({ className, children, id }) {
    return (
      <h2 
        id={id}
        className={`${className}
        mt-8 sm:mt-10 lg:mt-12
        text-xl sm:text-2xl lg:text-3xl 
        font-heading text-center font-semibold
        `}
      >
        {children}
      </h2>
    );
  }