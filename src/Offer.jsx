import React, { useState } from "react";
import { motion } from "motion/react";
import SplitType from "split-type";

const Offer = (props) => {
  const [collapseOn, chaneCollapse] = useState(false);
  const textSplit = new SplitType("#target", { types: "words" });
  const collapse = () => {
    chaneCollapse(!collapseOn);
  };
  return (
    <div>
      <div className="expandable" onClick={collapse}>
        <div className="space">
          <img src="" alt="plus" />
          <h3>{props.offer}</h3>
        </div>
        <motion.div
          className="hidden"
          animate={{ maxHeight: collapseOn ? 100 : 0 }}
        >
          <p id="target">{props.text}</p>
        </motion.div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Offer;
