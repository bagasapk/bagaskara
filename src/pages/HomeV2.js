import React from "react";
import BoxContent from "../components/BoxContent";
import Tools from "../components/Tools";

const HomeV2 = () => {
  return (
    <div className="home_v2">
      <div className="about container">
        <p className="about__title">
          Nice to <strong>e-meet</strong> you!
        </p>
        <BoxContent
          className="about"
          title="About"
          index="01"
          content={`
            <strong>Detail-oriented</strong> and <strong>communicative</strong>
            Frontend Developer
            `}
        ></BoxContent>
      </div>
      <div className="tools container">
        <BoxContent
          className="tools"
          title="Tools"
          index="02"
          content={`Experienced with <strong>2+ years</strong> of using <strong>ReactJS</strong>, also several other tools
            `}
        ></BoxContent>
        <Tools></Tools>
      </div>
      <BoxContent
        className="projects"
        title="Projects"
        index="03"
        content={`<p>
            <strong>Detail-oriented</strong> and <strong>communicative</strong>
            Frontend Developer
          </p>`}
      ></BoxContent>
      <BoxContent
        className="contact"
        title="Contact"
        index="04"
        content={`<p>
            <strong>Detail-oriented</strong> and <strong>communicative</strong>
            Frontend Developer
          </p>`}
      ></BoxContent>
    </div>
  );
};

export default HomeV2;
