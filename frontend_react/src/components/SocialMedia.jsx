import React from "react";
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
    </div>
  );
};

export default SocialMedia;
