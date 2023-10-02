import React from "react";
import Kolektive from "../../assets/images/projects/recent0_copy.png";
import Covid from "../../assets/images/projects/recent1_copy.png";
import waktukita from "../../assets/images/projects/waktukita_copy.png";
import lnf from "../../assets/images/projects/lnf_copy.png";
import mb from "../../assets/images/projects/mb_copy.png";
import cuciin from "../../assets/images/projects/cuciin_copy.png";
import Card from "../card/Card";

const Projects = () => {
  const recentProject = [
    {
      name: "Covid Cough Detection",
      type: "Deep Learning",
      tech: ["Tensorflow", "Flask"],
      desc: "Covid Cough Detection is a website that is intended to fulfill my final project as a student at Padjadjaran University. This website can identify positive and negative covid by real-time testing. Built using the DenseNet201 architectural model and Flask as a microframework.",
      image: Covid,
      role: "Machine Learning Engineer",
      link: "https://github.com/bagasapk/covid-cough-detection",
    },
    {
      name: "Kolektive",
      type: "Website",
      tech: ["ReactJs", "CSS", "Bootstrap"],
      desc: "Kolektive is a website intended to collect donations. The donation is intended for the organization of the event. Users can be organizers or donors.  This website is built with ReactJs framework and Laravel with agile methods.",
      image: Kolektive,
      role: "Project Manager and Frontend Developer",
      link: "https://github.com/bagasapk/kolektive",
    },
    {
      name: "Intern Waktukita",
      type: "Website",
      tech: ["ReactJs", "Bootstrap", "CSS"],
      image: waktukita,
      role: "Frontend Developer",
      link: "https://github.com/bagasapk/landing-page-waktukita",
    },
    {
      name: "Lost and Found",
      type: "Website",
      tech: ["ReactJs", "CSS"],
      image: lnf,
      role: "Project Manager and Frontend Developer",
      link: "https://github.com/hadizazz/Lost-and-Found",
    },
    {
      name: "Mipa Bersatu",
      type: "Website",
      tech: ["Blade", "Bootstrap"],
      image: mb,
      role: "Fullstack Developer",
      link: "https://github.com/bagasapk/mipaBersatu",
    },
    {
      name: "Cuciin",
      type: "Website",
      tech: ["Blade", "PHP"],
      image: cuciin,
      role: "Backend Developer",
      link: "https://github.com/bagasapk/cuciin",
    },
  ];
  const experienceCard = [];
  recentProject.map((data, key) =>
    experienceCard.push(<Card key={key} data={data}></Card>)
  );

  return (
    <div id="Projects" className="projects">
      <h2>Selected Project</h2>
      <p>
        <strong>Projects</strong> - Selected projects showcase, Let's discuss to
        know more about my projects. You can contact me <a href="mailto: anugerahprima07@gmail.com">here</a>!
      </p>
      <div className="cards">{experienceCard}</div>
    </div>
  );
};

export default Projects;
