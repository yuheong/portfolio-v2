import React from "react";
import Button from "../Button";

import myData from "../../personalData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex`}>
      {myData.socials.map((social, index) => (
        <a href={social.link} target="_blank">
          <Button key={index}>
            <span className="text-lg">{social.title}</span>
          </Button>
        </a>
      ))}
    </div>
  );
};

export default Socials;
