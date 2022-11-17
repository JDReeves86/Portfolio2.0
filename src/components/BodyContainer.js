import React from "react";
import HeroMd from "./HeroMd";
import About from "./About";
import Projects from "./Projects";

function BodyContainer() {
  return (
    <main className="container is-fluid">
      <HeroMd attr={`hero is-medium`} childAttr={`hero-body`}>
        <About />
      </HeroMd>
      <div className="level is-mobile">
        <Projects />
      </div>
    </main>
  );
}

export default BodyContainer;
