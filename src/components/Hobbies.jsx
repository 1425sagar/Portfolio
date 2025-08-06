import React from "react";

const Hobbies = ({ icon, title, description }) => {
  return (
    <div
      className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 
      transition-all duration-300 ease-in-out flex flex-col items-center 
      justify-center gap-3 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105"
    >
      {/* Icon Glow (ONLY icon glows) */}
      <div className="relative">
        {/* Gradient hover ring only around icon */}
        <div className="absolute -inset-1 rounded-full 
          bg-gradient-to-r from-blue-500 to-purple-500 
          opacity-0 group-hover:opacity-50 blur transition duration-300 pointer-events-none"
        ></div>

        {/* Icon Image */}
        <img 
          src={icon} 
          alt={`${title} icon`} 
          className="relative h-16 w-16 md:h-20 md:w-20 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <span className="text-white font-semibold text-lg tracking-wide">
        {title}
      </span>

      {/* Description */}
      <p className="text-slate-300 text-sm text-center">{description}</p>
    </div>
  );
};

export default Hobbies;
