import React, { use } from "react";
import Menu from "./Menu";
import { motion } from "motion/react";
import { useState } from "react";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Menu />
      <h1 id="name">JABARI NAMURO</h1>
      <h2 id="slogan">
        MAKING <b>YOUR</b> NEXT WEBSITE
      </h2>

      <motion.div className="work-with">
        <div className="work-arrow"></div>
        <h3>Work with me</h3>

        <svg
          width="20"
          height="15"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6274 1.6863C24.6274 1.13402 24.1797 0.686303 23.6274 0.686302L14.6274 0.686302C14.0751 0.686302 13.6274 1.13402 13.6274 1.6863C13.6274 2.23859 14.0751 2.6863 14.6274 2.6863L22.6274 2.6863L22.6274 10.6863C22.6274 11.2386 23.0751 11.6863 23.6274 11.6863C24.1797 11.6863 24.6274 11.2386 24.6274 10.6863L24.6274 1.6863ZM1.70711 25.0208L24.3345 2.39341L22.9203 0.979195L0.292893 23.6066L1.70711 25.0208Z"
            fill="white"
          />
        </svg>
      </motion.div>

      <h2 id="creating">We're always creating</h2>
    </div>
  );
};

export default Home;
