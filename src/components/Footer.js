import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__list">
        <div className="footer__logo">
          <a href="/#home">Bagaskara</a>
          <p>Portfolio</p>
        </div>
        <div className="footer__bar">
          <h4>Tools</h4>
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
        <div className="footer__socmeds">
          <h4>Discover More</h4>
          <div className="footer__socmed">
            <a href="https://github.com/bagasapk">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/bagasapk/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/bagasapk/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://wa.me/qr/EIJJK4I54FJGN1">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="is-null">
          ©2023 Created by <strong>Bagaskara</strong>
        </p>
        {/* <img src={logo} alt="bagasapk" className="logo"></img> */}
      </div>
    </section>
  );
};

export default Footer;
