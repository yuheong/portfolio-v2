import React from "react";

const WorkCard = ({ img, name, description, url }) => {
  return (
    <div className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0">
      <div className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-95 mob:h-60 laptop:h-[400px]">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img alt={name} className="h-full w-full object-contain" src={img} />
        </a>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
