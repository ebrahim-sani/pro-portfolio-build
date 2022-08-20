import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { urlFor, client } from "../client";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <div className="flex-1 w-full md:p-20 flex-col gradient-bg-work">
      <h2 className="font-bold md:font-bolder text-center pt-4 text-2xl md:text-4xl text-gray-200">
        My Creative Portfolio
      </h2>
      {/* <br /> Means <span>Good Business</span> */}
      <div className="flex flex-row justify-center items-center flex-wrap m-6 mr-0 ml-0">
        {["All", "UI/UX", "Web App", "Mobile App", "React JS"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`flex items-center justify-center app__work-filter-item p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          ),
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center 3xl:w-[470px] 3xl:p-[1.25rem] 3xl:rounded-md sm:w-full sm:m-4"
      >
        {filterWork.map((work, index) => (
          <div
            className="flex items-center justify-center w-[270px] flex-col m-4 md:m-8 p-4 rounded-lg white-glassmorphism text-gray-400 cursor-pointer transition-all hover:shadow-xl"
            key={index}
          >
            <div className="flex items-center justify-center w-full h-[230px] relative mf:h-[350px]">
              <img
                src={urlFor(work.imgUrl)}
                alt={work.name}
                className="w-full h-full rounded-lg object-cover"
              />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  delayChildren: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover flex items-center justify-center"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex items-center justify-center"
                  >
                    <AiFillEye className="w-[25px] h-[35px] text-white m-2" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex items-center justify-center"
                  >
                    <AiFillGithub className="w-[25px] h-[35px] text-white m-2" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="flex-col w-full relative p-[0.5rem] flex items-center justify-center">
              <h4 className="bold-text text-gray-200 mt-4 mf:mt-[2rem]">
                {work.title}
              </h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="absolute pt-[0.5rem] top-[-25px] text-white blue-glassmorphism rounded-md pb-[0.5rem] pl-[1rem] pr-[1rem] flex items-center justify-center">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Works;
