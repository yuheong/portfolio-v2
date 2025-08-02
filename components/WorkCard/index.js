import React from "react";

const WorkCard = ({ img, name, description, url }) => {
  return (
    <div className="overflow-hidden rounded-lg p-4 mob:p-2 laptop:p-4 bg-white/80 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
      <div className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 h-48">
        <a
          {...(url ? { href: url } : "")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt={name} className="h-full w-full object-cover" src={img} />
        </a>
      </div>
      <h1 className="mt-4 text-xl font-medium text-gray-800">
        {name ? name : "Project Name"}
      </h1>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {description ? description : "Description"}
      </p>
    </div>
  );
};

export default WorkCard;
