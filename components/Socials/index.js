import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import myData from "../../personalData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex gap-4`}>
      {myData.socials.map((social, index) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="group"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-effect text-gray-700 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <span className="text-xl group-hover:scale-110 transition-transform duration-200">
              {getIcon(social.title)}
            </span>
            <span className="font-medium">{social.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

const getIcon = (icon) => {
  switch (icon) {
    case "GitHub":
      return <FaGithub />;
    case "LinkedIn":
      return <FaLinkedin />;
    case "Email":
      return <MdEmail />;
    case "Resume":
      return <FaFileDownload />;
    default:
      return <></>;
  }
};

export default Socials;
