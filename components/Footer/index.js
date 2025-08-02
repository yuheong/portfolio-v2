import Socials from "../Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
        <div className="glass-effect rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h1>
          <p className="text-gray-600 mb-8 text-lg">
            I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="flex justify-center">
            <Socials />
          </div>
        </div>
      </div>
      <div className="text-center mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
        <p className="text-gray-500 text-sm">
          Made With ❤ by{" "}
          <span className="text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200">
            Yu-He Ong
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
