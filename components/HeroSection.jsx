import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/Hero.module.scss";
import { client } from "../client";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  // const [image, setImage] = useState({});

  // useEffect(() => {
  //   const query = '*[_type == "profileImage"]';

  //   client.fetch(query).then((data) => {
  //     // console.log(data);
  //     setImage(data);
  //   });
  // }, []);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="lg:flex justify-start items-start justify-between p-20 px-4">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="flex justify-start items-start lg:items-end mt-14 flex-col w-full">
            <div className="white-glassmorphism sm:ml-[-1.25rem] ml-5 md:ml-[-1.15rem] flex items-center justify-center pt-4 pb-4 px-8 py-8 rounded-xl flex-row w-auto shadow-md hero-text">
              <span className="">👋</span>
              <div className="ml-4">
                <p className="text-white text-sm left 2xl:text-2xl">
                  Hello, I am
                </p>
                <h1 className="text-lg text-white font-extrabold text-center capitalize 2xl:text-6xl sm:text-3xl">
                  Ibrahim
                </h1>
              </div>
            </div>

            <div className="white-glassmorphism flex items-center justify-center mt-3 pt-4 pb-4 px-8 py-8 rounded-xl flex-col w-auto shadow-md">
              <p className="text-white text-sm left 2xl:text-2xl">
                Frontend Developer
              </p>
              <p className="text-white text-sm left 2xl:text-2xl w-full text-right">
                Freelance
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="h-full relative"
        >
          <img
            src="/profile.png"
            alt=""
            className="w-full h-[80%] object-contain"
          />
        </motion.div>

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className={`${styles.hero__icons} mt-14`}
        >
          <div className="white-glassmorphism">
            <img className="w-[60%] h-[60%]" src="/sass.png" alt="" />
          </div>

          <div className="white-glassmorphism">
            <img className="w-[60%] h-[60%] " src="/redux.png" alt="" />
          </div>

          <div className="white-glassmorphism">
            <img className="w-[60%] h-[60%]  " src="/react.png" alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
