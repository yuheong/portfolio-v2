const Button = ({ children, type, onClick }) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className="mob:text-sm laptop:text-base px-4 py-2 rounded-xl text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      className="mob:text-sm laptop:text-base px-4 py-2 rounded-xl flex items-center transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 text-gray-700 font-medium"
    >
      {children}
    </button>
  );
};

export default Button;
