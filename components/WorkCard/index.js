import React from "react";
import Image from "next/image";

const WorkCard = ({ img, name, description, url }) => {
  return (
    <div className="overflow-hidden rounded-lg p-4 mob:p-2 laptop:p-4 bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 w-full hover:scale-105 hover:-translate-y-1">
      <div className="overflow-hidden rounded-lg transition-all ease-out duration-300 h-64 relative">
        <a
          {...(url ? { href: url } : "")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image 
            alt={name} 
            src={img.startsWith('/') ? img : `/${img}`}
            fill
            className="object-contain"
          />
        </a>
      </div>
      <h1 className="mt-6 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
