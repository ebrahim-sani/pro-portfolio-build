import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <SiUpwork />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
