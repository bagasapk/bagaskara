import React from "react";

const Navbar = () => {
  return (
    <div className="navbar is-margin is-flex between align-center">
      <div className="is-flex align-center">
        {/* <img src={logo} alt="bagasapk"></img> */}
        <a href="/#home" className="logo">
          Bagaskara<span>.</span>
        </a>
      </div>
      <a
        className="chat is-padding"
        href="https://www.linkedin.com/in/bagasapk/"
      >
        Let's chat
      </a>
    </div>
  );
};

export default Navbar;
