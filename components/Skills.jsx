import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { client, urlFor } from "../client";
import ReactTooltip from "react-tooltip";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    const skillQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className="gradient-bg-skills flex flex-1 w-full flex-col">
      <h2 className="head-text">Skills & Experience</h2>
      <div className="w-full mt-[3rem] flex flex-col md:flex-row lg:w-full p-0 md:p-20 md:pt-0">
        <motion.div className="flex-1 flex flex-wrap justify-start lg:mr-0 lg:items-center lg:flex-center">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center flex-col text-center m-4 transition-all"
              key={skill.name}
            >
              <div
                className="w-24 h-24 rounded-full relative bg-skill-icon 3xl:w-[150px] 3xl:h-[150px]"
                style={{ backgroundColor: skill.bgColo }}
              >
                <img
                  className="w-[50%] h-[50%] absolute top-[24px] left-[22px]"
                  src={urlFor(skill.icon)}
                  alt={skill.name}
                />
              </div>
              <p className="p-text text-gray-400">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="flex flex-1 justify-start items-start flex-col lg:mt-[2rem]">
          {experience?.map((experience) => (
            <motion.div
              className="w-full flex flex-row justify-start items-start"
              key={experience.year}
            >
              <div className="mr-[3rem] sm:mr-2">
                <p className="bold-text text-gray-400">{experience.year}</p>
              </div>

              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-start items-start mb-2 cursor-pointer"
                      key={work.name}
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text text-gray-200">{work.name}</h4>
                      <p className="text-gray-500 font-bold mt-[5px]">
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
