import React from "react";
import me from "../images/06.jpeg";

const Home = () => {
  return (
    <div>
      <section id="home" className="home is-flex between is-margin">
        <div className="desc w-50">
          <h1 className="is-dif-font">
            Hi, I'm Bagas. Nice to meet you!{" "}
            <span className="is-rounded is-padding">Frontend Developer</span>
          </h1>
          <p className="w-75">
            Highly motivated and people-oriented. Passionate about{" "}
            <span className="is-bolder">Developing Applications</span> and{" "}
            <span className="is-bolder">Machine Learning</span>.
          </p>
          <div className="links is-flex between w-50 is-margin-block align-center">
            <button className="is-smallest-rounded is-bigger-padding button-primary">
              Talk with Me
            </button>
            <button className="is-smallest-rounded is-bigger-padding button-secondary">
              Experiences
            </button>
          </div>
          <div className="is-flex between w-75">
            <div>
              <h2>5</h2>
              <p>Projects</p>
            </div>
            <div className="is-text-right">
              <h2>Contact</h2>
              <p>anugerahprima07@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="photo">
          <img alt="Bagaskara" src={me}></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
