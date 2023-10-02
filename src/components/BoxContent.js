import React from "react";

const BoxContent = (props) => {
  /**
   * @returns links on number button
   */
  const link = ["about", "tools", "projects", "contact"];
  const links = [];
  for (let index = 1; index <= 4; index++) {
    if (index !== +props.index) {
      links.push(
        <a
        key={index}
          href={`#${link[index - 1]}`}
          className={`link link--${link[index - 1]}`}
          data-name={link[index - 1]}
        >{`0${index}`}</a>
      );
    }
  }

  return (
    <div id={props.className} className={`box box--${props.className}`}>
      <div className="box__title">
        <h2>{props.title}</h2>
      </div>
      <div>
        <p
          className="box__content"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></p>
        <span className="box__see-more">See more</span>
      </div>
      <p className="box__number">{props.index}</p>
      <div className="box__buttons">
        {links}
      </div>
    </div>
  );
};

export default BoxContent;
