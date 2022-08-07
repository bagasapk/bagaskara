import React, { useState } from "react";
import me from "../images/06.jpeg";
import Kolektive from "../images/recent0.png";
import Covid from "../images/recent1.png";
import waktukita from "../images/waktukita.png";
import lnf from "../images/lnf.png";
import mb from "../images/mb.png";
import cuciin from "../images/cuciin.png";
import Popup from "../components/Popup";

const Home = () => {
  const skills = [
    {
      name: "Frontend Developer",
    },
    {
      name: "Machine Learning",
    },
  ];

  const recent = [
    {
      name: "Covid Cough Detection",
      type: "Deep Learning",
      tech: "Tensorflow, Flask",
      desc: "Covid Cough Detection is a website that is intended to fulfill my final project as a student at Padjadjaran University. This website can identify positive and negative covid by real-time testing. Built using the DenseNet201 architectural model and Flask as a microframework",
      image: Covid,
    },
    {
      name: "Kolektive",
      type: "Website",
      tech: "ReactJs, Laravel",
      desc: "Kolektive is a website intended to collect donations. The donation is intended for the organization of the event. Users can be organizers or donors.  This website is built with ReactJs framework and Laravel with agile methods.",
      image: Kolektive,
    },
    {
      name: "Intern Waktukita",
      type: "Website",
      tech: "ReactJs",
      image: waktukita,
    },
    {
      name: "Lost and Found",
      type: "Website",
      tech: "ReactJs,Laravel",
      image: lnf,
    },
    {
      name: "Mipa Bersatu",
      type: "Website",
      tech: "Laravel",
      image: mb,
    },
    {
      name: "Cuciin",
      type: "Website",
      tech: "Laravel",
      image: cuciin,
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const [keyChosen, setKey] = useState("");

  const togglePopup = (key) => {
    setOpen(!isOpen);
    setKey(key);
  };

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
          <div className="photo">
            <img alt="Bagaskara" src={me}></img>
          </div>
          <div className="detailTop is-flex between">
            <div className="detail">
              <div className="links is-flex between is-margin-block align-center is-smallest-rounded">
                <p>Got a Project?</p>{" "}
                {/* <button className="is-smallest-rounded is-bigger-padding button-primary">
                  Talk with Me
                </button> */}
                <a
                  href="https://www.linkedin.com/in/bagasapk/"
                  className="is-bolder is-bigger-padding button-third"
                >
                  Let's Talk
                </a>
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
      <div className="gallery">
        <section className="service is-flex is-padding-inline is-padding-block between">
          <div>
            <h1>Services I Offer</h1>
            <div className="is-flex around">
              <p className="is-margin-inline">___</p>
              <p>Currently learning and growing these skills</p>
            </div>
          </div>
          <div>
            <div className="skills w-bigger">
              {skills.map((data, key) => (
                <div className="is-border-white-top is-flex is-smaller-padding-block">
                  <p className="is-smaller-margin-inline">0{key + 1}/</p>
                  <div className="is-grid h-50">
                    <h2 className="is-null w-50 is-text-left">{data.name}</h2>
                    <div className="is-flex align-center between w-normal">
                      <p className="is-bolder">Explore</p>
                      <a
                        href="#recent"
                        className="is-bolder is-smallest-rounded is-bigger-padding button-primary"
                      >
                        See Projects
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="is-margin">
          <h1 className="is-bottom-null">Latest Project</h1>
          <p>Projects I've done</p>
          <div className="is-flex between flex-wrap">
            {recent.slice(0, recent.length).map((data, key) => (
              <div key={key} id="recent" className="is-grid is-margin-block">
                <div className="is-border-top is-flex align-start between is-smaller-padding-block w-normal">
                  <div className="is-text-left">
                    <h2 className="is-null">{data.name}</h2>
                    <p className="is-bolder">{data.type}</p>
                    <p className="is-dif-font">{data.tech}</p>
                  </div>
                  <button
                    // href="/#home"
                    onClick={() => togglePopup(key)}
                    className="is-bolder is-smallest-rounded is-bigger-padding button-secondary"
                  >
                    Go
                  </button>
                </div>
                <img className="w-small" alt={data.name} src={data.image}></img>
              </div>
            ))}
          </div>
          {/* <div>
            <button className="is-smallest-rounded is-bigger-padding button-primary">
              Load More
            </button>
          </div> */}
        </section>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              {recent
                ? recent.slice(keyChosen, keyChosen + 1).map((data) => (
                    <>
                      <div className="is-border-top is-flex align-start between is-smaller-padding-block w-normal">
                        <div className="is-text-left">
                          <h2 className="is-null">{data.name}</h2>
                          <p className="is-bolder">{data.type}</p>
                          <p className="is-dif-font">{data.tech}</p>
                        </div>
                      </div>
                      <div className="popDesc is-flex center">
                        <img
                          className="w-small"
                          alt={data.name}
                          src={data.image}
                        ></img>
                        <p className="is-smallest-margin is-text-left">
                          {data.desc ? data.desc : "Description not found."}
                        </p>
                      </div>
                    </>
                  ))
                : null}
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default Home;
