import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarList from "./NavbarList";
import NavBurger from "./NavBurger";

const navItems = ["About", "Projects", "Contact"];

function Navbar({ setPage }) {
  return (
    <nav
      className="navbar has-background-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavBurger />
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <NavbarItem links={navItems} setPage={setPage} />
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
