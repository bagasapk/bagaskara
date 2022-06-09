import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <section className="project is-flex align-center is-padding-block between is-smaller-margin-top is-padding-inline">
      <div className="list is-flex between">
        <div className="is-text-left">
          <h2>My Projects</h2>
          <button className="button-primary is-padding is-smallest-rounded">
            Discover More
          </button>
        </div>
        <div className="bar">
          <div className="is-flex between is-border-bottom-black">
            <p>ReactJs</p>
            <p>4</p>
          </div>
          <div className="is-flex between is-border-bottom-black">
            <p>Laravel</p>
            <p>4</p>
          </div>
          <div className="is-flex between is-border-bottom-black">
            <p>Flask</p>
            <p>1</p>
          </div>
          <div className="is-flex between is-border-bottom-black">
            <p>CodeIgniter</p>
            <p>1</p>
          </div>
        </div>
      </div>
      <div className="Footer is-flex around align-center">
        <p className="is-null">©2022 Created by Anugerah Prima Bagaskara.</p>
        <img src={logo} alt="bagasapk" className="logo"></img>
      </div>
    </section>
  );
};

export default Footer;
