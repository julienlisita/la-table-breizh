// src/components/PageTitle.jsx

export default function PageTitle({ className, children }) {
    return (
      <h1 className={`${className}
        mt-12 sm:mt-16 lg:mt-24
        text-2xl sm:text-3xl lg:text-5xl
        font-heading font-bold
        text-center
        `}>
        {children}
      </h1>
    );
  }