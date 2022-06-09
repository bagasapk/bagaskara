import React from "react";
import me from "../images/06.jpeg";

const Home = () => {
  return (
    <div>
      <section id="home" className="home is-flex between is-margin">
        <div className="desc w-50">
          <h1 className="is-dif-font">
            Hi, I'm Bagaskara
            <p className="is-rounded is-padding wannabe">Frontend Developer</p>
          </h1>
          <p className="w-75">
            Highly motivated and people-oriented. Passionate about{" "}
            <span className="is-bolder">Developing Applications</span> and{" "}
            <span className="is-bolder">Machine Learning</span>.
          </p>
          <div className="is-flex between">
            <div className="detail">
              <div className="links is-flex between is-margin-block align-center is-smallest-rounded">
                <p>Got a Project?</p>{" "}
                {/* <button className="is-smallest-rounded is-bigger-padding button-primary">
                  Talk with Me
                </button> */}
                <a
                  href="/#home"
                  className="is-bolder is-bigger-padding button-secondary"
                >
                  Let's Talk
                </a>
              </div>
              <div className="is-flex between">
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
        <div className="photo">
          <img alt="Bagaskara" src={me}></img>
        </div>
      </section>
    </div>
  );
};

export default Home;
