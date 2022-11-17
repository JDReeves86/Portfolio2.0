import React from "react";

function NavbarItem({ links }) {
  return links.map((el, i) => {
    return <a key={i} className="navbar-item" href={`./${el}`}>{el}</a>;
  });
}

export default NavbarItem;
