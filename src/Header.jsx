import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

const Header = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <div className="header">
      <img src="" alt="logo" />
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
    </div>
  );
};

export default Header;
