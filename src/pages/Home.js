import React, { useState } from "react";
import Kolektive from "../images/recent0.png";
import Covid from "../images/recent1.png";
import waktukita from "../images/waktukita.png";
import lnf from "../images/lnf.png";
import mb from "../images/mb.png";
import cuciin from "../images/cuciin.png";
import Popup from "../components/Popup";
import Hero from "../components/Hero";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  const [keyChosen, setKey] = useState("");

  /**
   * @returns Initialize card of skills
   */
  const skills = [
    {
      name: "Frontend Developer",
    },
  ];
  const skillList = [];
  skills.map((data, key) =>
    skillList.push(
      <>
        <div className="is-border-white-top is-flex is-smaller-padding-block">
          <p className="is-smaller-margin-inline">{`0${key + 1})`}</p>
          <div className="is-grid">
            <h2 className="skills__desc is-null w-50 is-text-left">
              {data.name}
            </h2>
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
      </>
    )
  );

  /**
   * @returns Initialize card of experiences
   */
  const recent = [
    {
      name: "Covid Cough Detection",
      type: "Deep Learning",
      tech: ["Tensorflow", "Flask"],
      desc: "Covid Cough Detection is a website that is intended to fulfill my final project as a student at Padjadjaran University. This website can identify positive and negative covid by real-time testing. Built using the DenseNet201 architectural model and Flask as a microframework.",
      image: Covid,
      role: "Machine Learning Engineer",
    },
    {
      name: "Kolektive",
      type: "Website",
      tech: ["ReactJs", "CSS", "Bootstrap"],
      desc: "Kolektive is a website intended to collect donations. The donation is intended for the organization of the event. Users can be organizers or donors.  This website is built with ReactJs framework and Laravel with agile methods.",
      image: Kolektive,
      role: "Project Manager and Frontend Developer",
    },
    {
      name: "Intern Waktukita",
      type: "Website",
      tech: ["ReactJs", "Bootstrap", "CSS"],
      image: waktukita,
      role: "Frontend Developer",
    },
    {
      name: "Lost and Found",
      type: "Website",
      tech: ["ReactJs", "CSS"],
      image: lnf,
      role: "Project Manager and Frontend Developer",
    },
    {
      name: "Mipa Bersatu",
      type: "Website",
      tech: ["Laravel", "Bootstrap"],
      image: mb,
      role: "Fullstack Developer",
    },
    {
      name: "Cuciin",
      type: "Website",
      tech: ["Laravel", "PHP"],
      image: cuciin,
      role: "Backend Developer",
    },
  ];
  const experienceCard = [];
  recent.map((data, key) =>
    experienceCard.push(
      <div key={key} id="recent" className="recent is-grid">
        <img alt={data.name} src={data.image}></img>
        <h2 className="is-null">{data.name}</h2>
        <div className="is-text-left recent__box">
          <p className="is-bolder">{data.type}</p>
          <p className="is-truncate">{data.desc ? data.desc : "..."}</p>
          <div className="is-flex flex-wrap gap-1">
            {data.tech.map((data2, index) => (
              <p
                key={index}
                className={`is-dif-font datatech datatech${index}`}
              >
                {data2}
              </p>
            ))}
            <button onClick={() => togglePopup(key)}>Go</button>
          </div>
        </div>
      </div>
    )
  );

  /**
   * @returns Initialize popup of experiences
   */
  const openedPopup = [];
  if (experienceCard.length) {
    experienceCard.filter((data) => {
      return openedPopup.push(
        experienceCard.filter((data) => data.key === keyChosen)
      );
    });
  }

  // Open and close Popup
  const togglePopup = (key) => {
    setOpen(!isOpen);
    if (key) {
      setKey(key);
    } else {
      setKey("");
    }
  };

  return (
    <>
      <Hero></Hero>
      <div className="gallery">
        <section className="service is-flex is-padding-inline is-padding-block between">
          <div className="is-text-left sub_service">
            <h2>About Me</h2>
            <div className="is-flex around">
              <p className="is-smaller-margin-inline">_</p>
              <p>
                Computer Science graduate from Padjadjaran University who has
                built several projects such as "Kolektive", "MIPA Bersatu 2021",
                "Covid Cough Detection", and many more. Passionate about
                developing web applications and machine learning. Experienced
                using ReactJs, Agile Scrum Method and became a Project Manager.
                Eager to learn because I like to try something new. Able to work
                either individually or in a team. <br />
                <br />
                Detail-oriented and communicative Frontend Developer that has
                successfully optimized 5+ professional projects in a
                professional environment and delivered 3+ projects on campus.
                Experienced with 2+ years of using ReactJS, also several tools
                such as VueJS, Nuxt 3, Webpack, and many more. Implement the
                fastest and simplest solution with always considering
                requirements and pixel-perfect. Eager to learn something new
                especially related to technology.
              </p>
            </div>
          </div>
          <div className="skills w-bigger">{skillList}</div>
        </section>
        <section className="is-margin">
          <h1 className="is-bottom-null">Latest Project</h1>
          <p>Projects I've done</p>
          <div className="card is-flex between flex-wrap">{experienceCard}</div>
        </section>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              {recent
                ? recent.slice(keyChosen, keyChosen + 1).map((data, key) => (
                    <div key={key} className="popDesc is-flex center">
                      <img alt={data.name} src={data.image}></img>
                      <div className="popText">
                        <h2 className="is-null">{data.name}</h2>
                        <b>{data.role}</b>
                        <p className="desc">
                          {data.desc ? data.desc : "Description not found."}
                        </p>
                        <p>
                          Category: <strong>{data.type}</strong>
                        </p>
                        <p className="is-dif-font">Tools:</p>
                        <div className="is-flex gap-1">
                          {data.tech.map((data2, index) => (
                            <p
                              key={index}
                              className={`is-dif-font datatech datatech${index}`}
                            >
                              {data2}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
};

export default Home;
