import "./App.css";
import me from "./images/06.jpeg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section id="home" className="home is-flex between is-margin">
        <div className="desc">
          <h1 className="is-dif-font">
            Hi, I'm Bagas. Nice to meet you!{" "}
            <span className="is-rounded is-padding">Frontend Developer</span>
          </h1>
          <p>
            Highly motivated and people-oriented. Passionate about{" "}
            <span className="is-bolder">Developing Applications</span> and{" "}
            <span className="is-bolder">Machine Learning</span>.
          </p>
          <div className="links is-flex between w-75 is-margin-block align-center">
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
        <div>
          <img alt="Bagaskara" src={me}></img>
        </div>
      </section>
      <section className="project is-flex align-center is-padding-block ">
        <div className="is-margin is-text-left">
          <h2>My Projects</h2>
          <button className="button-primary is-padding is-smallest-rounded">
            Discover More
          </button>
        </div>
        <div className="bar">
          <div className="is-flex between is-border-bottom-black">
            <p>ReactJs</p>
            <p>1</p>
          </div>
          <div className="is-flex between is-border-bottom-black">
            <p>Laravel</p>
            <p>1</p>
          </div>
          <div className="is-flex between is-border-bottom-black">
            <p>Flask</p>
            <p>1</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
