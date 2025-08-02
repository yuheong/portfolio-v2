import React from 'react';

const SkillsCard = ({ category, technologies }) => {
  return (
    <div className="bg-white/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-gray-500 to-gray-600 text-white text-sm font-medium rounded-full hover:from-gray-600 hover:to-gray-700 transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard; 