import React, { useState } from "react";

const Card = (props) => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div id="card" className="card">
      <img alt={data.name} src={data.image}></img>
      <div className="card__box">
        <p className="card__type">{data.type}</p>
        <h3>{data.name}</h3>
        <p className={`${isOpen && "is-truncate"} card__desc`}>
          {data.desc ? data.desc : "..."}
        </p>
        <span onClick={() => setIsOpen((prev) => !prev)} className="card__show">
          Show {isOpen ? "more" : "less"}
        </span>
        <p className={`card__datatech`}>
          Developed with:
          {data.tech.map((data2,key) => (
            <span key={key}>{data2}</span>
          ))}
        </p>
        <a className="button button--secondary card__button" href={data.link}>
          Visit
        </a>
      </div>
    </div>
  );
};

export default Card;
