import React from "react";
import Sites from "./Sites";
import Offers from "./Offers";
import Menu from "./Menu";
import LandContent from "./LandContent";
import Contact from "./Contact";
import Lenis from "lenis";

const App = () => {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  lenis.on("scroll", (e) => {
    // console.log(e);
  });
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
