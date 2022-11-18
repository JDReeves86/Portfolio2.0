import React from "react";
import NavbarItem from "./NavbarItem";

const links = ['Resume', 'LinkedIn', 'GitHub', 'Dinosaurs!']

function NavbarList() {
    return (
        <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">More</a>

        <div className="navbar-dropdown">
            <NavbarItem links={links} />
        </div>
      </div>
    )
}

export default NavbarList