import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [barActive, setBarActive] = useState(false);

  /**
   * @returns Initialize hamburger toggle
   */
  const hamburgerToggle = [];
  // Change icon when active
  hamburgerToggle.push(
    <div onClick={() => setBarActive(!barActive)} className="navbar__hamburger">
      {barActive ? <i className="fa fa-close"></i> : <i className="fa fa-bars"></i>}
    </div>
  );

  return (
    <div className={`navbar ${barActive ? "navbar--active" : ""}`}>
      <div className="container navbar__wrapper">
        <div className="is-flex align-center">
          <a href="/#home" className="logo">
            Bagaskara
          </a>
        </div>
        <ul>
          <li>
            <a href="#about" data-name="About">
              About
            </a>
          </li>
          <li>
            <a href="#tools" data-name="Tools">
              Tools
            </a>
          </li>
          <li>
            <a href="#projects" data-name="Project">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" data-name="Contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar__separator"></div>
        <a
          className="navbar__chat"
          href="https://www.linkedin.com/in/bagasapk/"
        >
          <span>Let's chat</span>
          <div className="navbar__connector"></div>
          <i className="fa fa-envelope navbar__chat_icon"></i>
        </a>
        {hamburgerToggle}
      </div>
    </div>
  );
};

export default Navbar;
