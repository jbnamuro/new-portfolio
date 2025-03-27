import React from "react";
import Sites from "./Sites";
import Offers from "./Offers";
import Menu from "./Menu";
import LandContent from "./LandContent";

const App = () => {
  return (
    <div>
      <Menu />
      <LandContent />
      <Sites />
      <Offers />
    </div>
  );
};

export default App;
