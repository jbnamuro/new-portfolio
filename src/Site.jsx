import React from "react";

const Site = (props) => {
  return (
    <div className="box-wrapper">
      <div className="site-info">
        <h3>{props.name}</h3>
        <div>
          <p>{props.info}</p>
          <p>
            <b>View site</b>
          </p>
        </div>
      </div>
      <p>arrow</p>
      <div className="line"></div>
    </div>
  );
};

export default Site;
