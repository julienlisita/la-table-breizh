// src/components/common/FloatingInput.jsx

export default function FloatingInput({ label, name, type = "text", required = false }) {
  return (
    <div className="relative z-0 w-full group">
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        placeholder=" "
        className="
          block px-3 pb-2.5 pt-4 w-full text-sm text-terre bg-white
          rounded-md border border-ocre appearance-none 
          focus:outline-none focus:ring-0 focus:border-ocre 
          peer transition
        "
      />
      <label
        htmlFor={name}
        className="
          absolute text-sm text-terre duration-300 transform 
          -translate-y-3 scale-75 top-2 z-10 origin-[0] left-3 
          peer-placeholder-shown:translate-y-4 peer-placeholder-shown:scale-100 
          peer-focus:scale-75 peer-focus:-translate-y-3
        "
      >
        {label}
      </label>
    </div>
  );
}