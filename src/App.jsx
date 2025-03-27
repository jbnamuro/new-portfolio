import React from "react";
import Sites from "./Sites";
import Offers from "./Offers";
import Menu from "./Menu";
import LandContent from "./LandContent";
import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Menu />
      <LandContent />
      <Sites />
      <Offers />
      <Contact />
    </div>
  );
};

export default App;
