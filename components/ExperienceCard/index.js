const ExperienceCard = ({
  title,
  companyName,
  location,
  description,
  years,
}) => {
  return (
    <div className="w-full p-4 my-5 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105">
      <div className="flex flex-row justify-between mr-4">
        <h1 className="text-xl font-semibold">{title ? title : "Job title"}</h1>
        <h1 className="text-lg text-gray-600 font-medium">
          {years ? years : "Jan 2020 - Jan 2021"}
        </h1>
      </div>
      <h2 className="text-md">
        {companyName}
        {companyName ? ", " : ""}
        {location ? location : "Singapore"}
      </h2>
      <p className="mt-5 opacity-70 text-md">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ExperienceCard;
