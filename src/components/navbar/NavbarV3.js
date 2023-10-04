import React, { useContext } from "react";
import { NavContext } from "../../context/NavContext";

const NavbarV3 = () => {
  const { activeLinkId, setNavbarScroll, barActive, setBarActive } =
    useContext(NavContext);

  const navbarItem = ["Portfolio", "Tools", "Projects"];
  const navbarItemComponent = [];
  navbarItem.map((data, key) =>
    navbarItemComponent.push(
      <li
        key={key}
        className={`navbar__list_item ${
          activeLinkId === data.toLowerCase() && "active"
        }`}
      >
        <span onClick={() => setNavbarScroll(data)}>{data}</span>
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
