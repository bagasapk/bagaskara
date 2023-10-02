import React from "react";
import profile from "../../assets/images/profiles/1.png";

const HeroV3 = () => {
  const brands = [
    { brand: "github", link: "https://github.com/bagasapk" },
    { brand: "instagram", link: "https://www.instagram.com/bagasapk/" },
    { brand: "linkedin", link: "https://www.linkedin.com/in/bagasapk/" },
    { brand: "whatsapp", link: "https://wa.me/qr/EIJJK4I54FJGN1" },
  ];
  const brandsComponent = [];
  brands.map((data, key) =>
    brandsComponent.push(
      <a key={key} href={data.link}>
        <i className={`hero__brand fa-brands fa-${data.brand}`}></i>
      </a>
    )
  );

  return (
    <div className="hero">
      <div className="hero__row">
        <div className="hero__desc">
          <h1>
            Hello, <br />I am Bagaskara
          </h1>
          <p>
            Highly motivated and people-oriented. Experienced{" "}
            <strong>Frontend Developer </strong>
            using <strong>ReactJs</strong>, <strong>VueJs</strong>. Currently
            based in <strong>Indonesia</strong>.
          </p>
          <span className="button">See Portfolio</span>
          <div className="hero__icon">
            <i className="fa fa-arrow-down"></i>
            <span>Next - Tools</span>
          </div>
        </div>
      </div>
      <div className="hero__row">
        <div className="hero__img">
          <img src={profile} alt="profile" />
        </div>
        <div className="hero__brands">{brandsComponent}</div>
      </div>
    </div>
  );
};

export default HeroV3;
