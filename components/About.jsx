import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
import { motion } from "framer-motion";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <div className="flex-1 w-full flex-col">
      <div className="gradient-bg-about pt-20 flex 3xl:flex-row flex-col w-full md:p-20 justify-center items-center gradient-bg-services">
        <h2 className="text-white text-[1.6rem] md:text-[2.3rem] font-extrabold text-center capitalize mf:text-[4rem] sm:text-[2rem]">
          I Know That Good Design Means Good Business
        </h2>

        <div className="flex justify-center items-center flex-wrap mt-8 ">
          {abouts.map((about, index) => (
            <motion.div
              key={about.title + index}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="w-[230px] p-4 flex white-glassmorphism justify-start items-start flex-col m-8 mf:w-[370px] mf:mt-8 mf:mb-8 mf:ml-[4rem] mf:mr[4rem]"
            >
              <img
                src={urlFor(about.imgUrl)}
                alt={about.title}
                className="w-full h-[170px] mf:h-[320px] object-cover rounded-xl"
              />
              <h2 className="font-bold text-[1rem] text-white text-left mt-2 mb-1">
                {about.title}
              </h2>
              <p className="text-sm text-left text-gray-400">
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
