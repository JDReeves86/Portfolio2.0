import React from "react";
import Hero from "./HeroMd";
import Level from "./Level";
import H1Component from "./H1Component";

function Header() {
  const name = "Jacob Reeves";
  return (
    <Hero attr={`hero is-medium`} childAttr={`hero-body level`} spBackground='mtnBackground'>
      <Level attr="level-left">
        <H1Component attr="level-item is-size-1 has-text-weight-bold has-text-light" value={name} />
      </Level>
    </Hero>
  );
}

export default Header;
