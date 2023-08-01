import React from "react";
import react from "../images/tool-list/React-icon.svg";
import redux from "../images/tool-list/redux.svg";
import pug from "../images/tool-list/pugjs_logo_icon_170825.png";
import jquery from "../images/tool-list/jquery.png";
import figma from "../images/tool-list/400px-Figma-logo.png";
import tailwind from "../images/tool-list/tailwind.png";
import bootstrap from "../images/tool-list/Bootstrap_logo.png";
import vuejs from "../images/tool-list/Vuejs_Logo_2.png";

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
      name: "redux",
      logoUrl: redux,
    },
    {
      name: "pugjs",
      logoUrl: pug,
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
      name: "tailwind",
      logoUrl: tailwind,
    },
    {
      name: "bootstrap",
      logoUrl: bootstrap,
    },
    {
      name: "vuejs",
      logoUrl: vuejs,
    },
  ];
  const toolsComponent = [];
  tools.map((data, key) => {
    if (key % 3 === 0 && key !== 0) {
      toolsComponent.push(<div className="tool-list__separator"></div>);
    }
    toolsComponent.push(
      <a
        key={key}
        className={`tool-list__wrapper tool-list--${data.name}`}
        href={"https://react.dev/"}
      >
        <img src={data.logoUrl} alt="logo"></img>
        <span>{data.name}</span>
      </a>
    );
    return true;
  });

  return <div className="tool-list">{toolsComponent}</div>;
};

export default Tools;
