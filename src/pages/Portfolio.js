import React from "react";
import HeroV3 from "../components/hero/HeroV3";
import Tools from "../components/tools/Tools";
import Projects from "../components/projects/Projects";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <HeroV3></HeroV3>
      <Tools></Tools>
      <Projects></Projects>
    </div>
  );
};

export default Portfolio;
