import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarList from "./NavbarList";

const navItems = ["About", "Projects"];

function Navbar() {
  return (
    <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavbarItem links={navItems} />
          <NavbarList />
        </div>

        {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
