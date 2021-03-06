import React from "react";

const Navbar = () => {
  return (
    <div className="navbar is-margin is-flex between align-center is-border-bottom">
      <div className="is-flex align-center">
        {/* <img src={logo} alt="bagasapk"></img> */}
        <a href="/#home" className="logo">
          Bagaskara<span>.</span>
        </a>
      </div>
      <ul className="is-flex around is-null">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="#home">Progress</a>
        </li>
      </ul>
      <a className="chat is-border is-padding is-smallest-rounded" href="#home">
        Let's chat
      </a>
    </div>
  );
};

export default Navbar;
