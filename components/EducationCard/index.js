const EducationCard = ({
  title,
  school,
  years,
  cap,
  specialization,
  grade,
}) => {
  return (
    <div className="w-full p-6 rounded-2xl glass-effect transition-all duration-300 hover:bg-white/90">
      <div className="flex flex-row justify-between items-start mb-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {title ? title : "Bachelor of Underwater Basket Weaving"}
          </h1>
          <h2 className="text-lg text-gray-600 font-medium mb-2">{school ? school : "NUS"}</h2>
          {specialization && (
            <p className="text-sm text-gray-500 mb-2">Specialization: {specialization}</p>
          )}
        </div>
        <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full ml-4">
          {years ? years : "Jan 2020 - Jan 2021"}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {cap && (
          <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
            CAP: {cap}
          </span>
        )}
        {grade && (
          <span className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
            {grade}
          </span>
        )}
      </div>
    </div>
  );
};

export default EducationCard;
