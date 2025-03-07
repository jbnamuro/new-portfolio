import React from "react";
import { motion } from "motion/react";
import { useState } from "react";

const Menu = () => {
  const [menuOn, setMenu] = useState(false);
  return (
    <div>
      <motion.div
        className="menu-open"
        animate={{ top: menuOn ? 0 : "100%" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      ></motion.div>
      <div
        className="bars"
        onClick={() => {
          setMenu(!menuOn);
        }}
      >
        <motion.div
          className="bar"
          animate={{ scaleX: menuOn ? 0 : 1 }}
          transition={{ delay: menuOn ? 0 : 0.2 }}
        ></motion.div>
        <motion.div
          className="bar"
          animate={{ rotate: menuOn ? 45 : 0 }}
          transition={{ delay: menuOn ? 0.2 : 0 }}
        ></motion.div>
        <motion.div
          className="bar"
          animate={{ scaleX: menuOn ? 0 : 1 }}
          transition={{ delay: menuOn ? 0 : 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Menu;
