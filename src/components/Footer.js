import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="Footer is-flex around align-center is-border-white">
      <p className="is-null">©2022 Created by Anugerah Prima Bagaskara.</p>
      <img src={logo} alt="bagasapk" className="logo"></img>
    </div>
  );
};

export default Footer;
