const ExperienceCard = ({
  title,
  companyName,
  location,
  description,
  years,
}) => {
  return (
    <div className="w-full p-6 rounded-2xl glass-effect transition-all duration-300 hover:bg-white/90">
      <div className="flex flex-row justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{title ? title : "Job title"}</h1>
          <h2 className="text-lg text-gray-600 font-medium">
            {companyName}
            {companyName ? ", " : ""}
            {location ? location : "Singapore"}
          </h2>
        </div>
        <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
          {years ? years : "Jan 2020 - Jan 2021"}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ExperienceCard;
