const EducationCard = ({
  title,
  school,
  years,
  cap,
  specialization,
  grade,
}) => {
  return (
    <div className="w-full p-4 my-5 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105">
      <div className="flex flex-row justify-between mr-4">
        <h1 className="text-xl font-semibold">
          {title ? title : "Bachelor of Underwater Basket Weaving"}
        </h1>
        <h1 className="text-lg text-gray-600 font-medium">
          {years ? years : "Jan 2020 - Jan 2021"}
        </h1>
      </div>
      <h2 className="text-md">{school ? school : "NUS"}</h2>
      {cap ? (
        <p className="mt-2 opacity-70 text-sm">
          Cumulative Average Point (CAP): {cap}
        </p>
      ) : (
        <></>
      )}
      {grade ? (
        <p className="mt-2 opacity-70 text-sm">Grade: {grade}</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default EducationCard;
