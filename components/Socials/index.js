import React from "react";
import Button from "../Button";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import myData from "../../personalData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex`}>
      {myData.socials.map((social, index) => (
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <Button>
            <div className="flex items-baseline">
              <span className="mr-2">{getIcon(social.title)}</span>
              <span className="text-lg">{social.title}</span>
            </div>
          </Button>
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
