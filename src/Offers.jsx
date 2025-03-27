import React from "react";
import Offer from "./Offer";

const Offers = () => {
  return (
    <div>
      <h2 id="offers">What I offer</h2>
      <Offer offer="UI Design" text="ui design write more later" />
      <Offer offer="UX Design" text="use this normally" />
      <Offer offer="OTHER THINGS" />
    </div>
  );
};

export default Offers;
