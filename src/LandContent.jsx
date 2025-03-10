import React from "react";

const LandContent = () => {
  return (
    <div className="land-wrapper">
      <div>
        <h1 id="name">
          Jabari <br />
          Namuro
        </h1>
        <h2 id="slogan">
          Making <b>your</b> next website
        </h2>
      </div>
      <div className="info">
        <a href="" id="work">
          <div className="work-with">
            <p>Work with me</p>
          </div>
        </a>
        <div className="scroll">
          <p>
            {"{"} scroll for more {"}"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandContent;
