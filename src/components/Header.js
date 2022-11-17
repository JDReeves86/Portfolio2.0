import React from "react";
import Hero from "./HeroMd";
import HeadShot from "./HeadShot";

function Header() {
  const name = "Jacob Reeves";
  return (
    <Hero attr={`hero is-medium`} childAttr={`hero-body level`} spBackground='mtnBackground'>
      <div className="level-left">
        <HeadShot />
        <h1 className="level-item is-size-1 has-text-weight-bold has-text-light">{name}</h1>
      </div>
    </Hero>
  );
}

export default Header;
