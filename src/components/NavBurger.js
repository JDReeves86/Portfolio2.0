import React from "react";
import NavbarItem from "./NavbarItem";

const navItems = ["About", "Projects", "Contact"];

function NavBurger() {
  return (
    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
}

export default NavBurger;
