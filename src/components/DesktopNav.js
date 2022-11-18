import React from "react";
import NavBurger from "./NavBurger";
import NavbarItem from "./NavbarItem";
import NavbarList from "./NavbarList";

function DesktopNav({ isClicked, clicked, links, setPage }) {
  return [
    <div className="navbar-brand">
      <NavBurger isClicked={isClicked} clicked={clicked} />
    </div>,

    <div className="navbar-menu">
      <div className="navbar-start">
        <NavbarItem links={links} setPage={setPage} />
        <NavbarList />
      </div>
    </div>,
  ];
}

export default DesktopNav;
