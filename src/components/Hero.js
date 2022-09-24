import React from "react";
import me from "../images/06.jpeg";

const Hero = () => {
  return (
    <section id="home" className="home is-margin">
      <div className="desc w-50">
        <h1>
          Hi, I'm Bagaskara
          <p className="is-rounded is-padding wannabe">Frontend Developer</p>
        </h1>
        <p className="w-75">
          Highly motivated and people-oriented. Passionate about{" "}
          <span className="is-bolder">Developing Applications</span> and{" "}
          <span className="is-bolder">Machine Learning</span>.
        </p>
        <p className="is-bolder is-dif-font">
          <q>Be Human to Humanized</q>
        </p>
        <div className="photo">
          <img alt="Bagaskara" src={me}></img>
        </div>
        <div className="detailTop is-flex between">
          <div className="detail">
            <div className="links is-flex between is-margin-block align-center is-smallest-rounded">
              <p>Got a Project?</p>{" "}
              <a
                href="https://www.linkedin.com/in/bagasapk/"
                className="is-bolder is-bigger-padding"
              >Let's Talk</a>
            </div>
            <div className="detailBot is-flex between">
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
          <div className="socmed is-grid end">
            <a href="https://github.com/bagasapk">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/bagasapk/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/bagasapk/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
