import React from "react";
import me from "../images/06.jpeg";
import other from "../images/logo.png";

const HeroV2 = () => {
  return (
    <div className="heroV2">
      <div className="container heroV2__wrapper">
        <div className="heroV2__display">
          <div className="heroV2__text">
            <h1>Hi, I'm Bagaskara</h1>
            <p>Frontend Developer</p>
          </div>
          <div className="heroV2__photo">
            <img alt="Bagaskara" src={me}></img>
          </div>
          <img className="heroV2__other" src={other} alt="additional"></img>
        </div>
        <div className="heroV2__button">
          <a href="/#projects">See Projects<span className="fa fa-external-link"></span></a>
        </div>
      </div>
    </div>
  );
};

export default HeroV2;
