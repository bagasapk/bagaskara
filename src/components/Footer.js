import React from "react";

const Footer = () => {
  return (
    <section className="project is-padding-block is-smaller-margin-top is-padding-inline">
      <div className="list is-flex between">
        <div className="logo">
          <a href="/#home" className="logo">
            Bagaskara<span>.</span>
          </a>
          <p>Portfolio</p>
        </div>
        <div className="bar">
          <h2>Tools</h2>
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
        <div className="socmedFooter is-text-left">
          <h2>Discover More</h2>
          <div className="socmed is-flex between flex-wrap gap-1">
            <a href="https://github.com/bagasapk">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/bagasapk/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/bagasapk/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/qr/EIJJK4I54FJGN1">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="Footer">
        <p className="is-null">©2022 Created by Anugerah P. Bagaskara.</p>
        {/* <img src={logo} alt="bagasapk" className="logo"></img> */}
      </div>
    </section>
  );
};

export default Footer;
