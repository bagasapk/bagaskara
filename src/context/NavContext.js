import React, { createContext, useState } from "react";

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");
  const [barActive, setBarActive] = useState(false);

const setNavbarScroll = (data) => {
    const id = data.toLowerCase();
    if (id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: id === "tools" ? "center" : "start",
        inline: "nearest",
      });
    }

    setBarActive((prev) => (prev = false));
  };

  const providerValue = {
    activeLinkId,
    barActive,
    setActiveLinkId,
    setNavbarScroll,
    setBarActive
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
