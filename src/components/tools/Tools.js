import React from "react";
import react from "../../assets/images/tool-list/React-icon.svg";
import redux from "../../assets/images/tool-list/redux.svg";
import git from "../../assets/images/tool-list/Git-Icon-1788C.png";
import jquery from "../../assets/images/tool-list/jquery.png";
import figma from "../../assets/images/tool-list/400px-Figma-logo.png";
import vuejs from "../../assets/images/tool-list/Vuejs_Logo_2.png";

const Tools = () => {
  /**
   * List of tools that I've used
   * @returns Initialize list of tool
   */
  const tools = [
    {
      name: "react",
      logoUrl: react,
    },
    {
      name: "vue",
      logoUrl: vuejs,
    },
    {
      name: "redux",
      logoUrl: redux,
    },
    {
      name: "jquery",
      logoUrl: jquery,
    },
    {
      name: "figma",
      logoUrl: figma,
    },
    {
      name: "git",
      logoUrl: git,
    },
  ];
  const toolsComponent = [];
  tools.map((data, key) => {
    // if (key % 3 === 0 && key !== 0) {
    //   toolsComponent.push(<div className="tool-list__separator"></div>);
    // }
    toolsComponent.push(
      <div key={key} className="tool-list__item">
        <a
          key={key}
          className={`tool-list__wrapper tool-list--${data.name}`}
          href={"https://react.dev/"}
        >
          <img src={data.logoUrl} alt="logo"></img>
        </a>
        <span>{data.name}</span>
      </div>
    );
    return true;
  });

  return (
    <div id="Tools" className="tool">
      <div className="tool-list">{toolsComponent}</div>
      <div className="tool__desc">
        <h2>Behind the scenes</h2>
        <p>
          <strong>TOOLS</strong> - Experienced with <strong>3+ years</strong>{" "}
          using these tools and <strong>1+ years</strong> using these tools in
          professional environtment. I also used another tools besides this, you
          can find it on <a href="https://github.com/bagasapk">Github</a>.
        </p>
      </div>
    </div>
  );
};

export default Tools;
