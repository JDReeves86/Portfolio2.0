import React, { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navItems = ["About", "Projects", "Contact"];

function Navbar({ setPage }) {
  const [clicked, isClicked] = useState(false);
  return (
    <nav
      className="navbar has-background-light"
      role="navigation"
      aria-label="main navigation"
    >
      {clicked ? (
        <MobileNav
          isClicked={isClicked}
          clicked={clicked}
          links={navItems}
          setPage={setPage}
          active='navbar-burger is-active'
        />
      ) : (
        <DesktopNav
          isClicked={isClicked}
          clicked={clicked}
          links={navItems}
          setPage={setPage}
          inactive="navbar-burger"
        />
      )}
    </nav>
  );
}

export default Navbar;
