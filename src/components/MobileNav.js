import React from "react";
import NavBurger from "./NavBurger";
import NavbarItem from "./NavbarItem";
import NavbarList from "./NavbarList";

function MobileNav({ isClicked, clicked, links, setPage, active }) {
  return [
    <div className="navbar-brand">
      <NavBurger isClicked={isClicked} clicked={clicked} attr={active} />
    </div>,

    <div className="navbar-menu is-active">
      <div className="navbar-start">
        <NavbarItem links={links} setPage={setPage} />
        <NavbarList />
      </div>
    </div>,
  ];
}

export default MobileNav;
