import React from "react";

function NavbarItem({ links }) {
  return links.map((el) => {
    return <a className="navbar-item" href={`./${el}`}>{el}</a>;
  });
}

export default NavbarItem;
