import React from "react";
import { motion } from "motion/react";
import { useState } from "react";
import { easeOut } from "motion";

const Menu = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <div className="menu-wrapper">
      <motion.div
        className="menu-screen"
        animate={{ left: isToggled ? 0 : "100%" }}
        transition={{ duration: 0.5, ease: easeOut }}
      ></motion.div>
      <div className="header"></div>
      <img src="" alt="logo" id="logo" />
      <div
        className="bars"
        onClick={() => {
          setToggled(!isToggled);
        }}
      >
        <motion.div
          className="bar"
          animate={{ rotate: isToggled ? 45 : 0 }}
        ></motion.div>
        <motion.div
          className="bar"
          animate={{ scale: isToggled ? 0 : 1 }}
        ></motion.div>
        <motion.div
          className="bar"
          animate={{ rotate: isToggled ? -45 : 0 }}
        ></motion.div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Menu;
