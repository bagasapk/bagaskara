import React, { useState } from "react";

const NavbarV3 = () => {
  const [navbarActive, setNavbarActive] = useState("Portfolio");
  const [barActive, setBarActive] = useState(false);
  const navbarItem = ["Portfolio", "Tools", "Projects"];
  const navbarItemComponent = [];
  navbarItem.map((data, key) =>
    navbarItemComponent.push(
      <li
        key={key}
        className={`navbar__list_item ${navbarActive === data && "active"}`}
        onClick={() => setNavbarActive((prev) => (prev = data))}
      >
        <a href={`#${data === "Portfolio" ? "" : data}`}>{data}</a>
      </li>
    )
  );

  return (
    <div className="navbar">
      <a href="/" className="navbar__logo">
        Bagaskara
      </a>
      <ul className={`navbar__list ${barActive && "active"}`}>
        {navbarItemComponent}
      </ul>
      <i
        onClick={() => setBarActive((prev) => !prev)}
        className="fa-solid fa-bars"
      ></i>
    </div>
  );
};

export default NavbarV3;
