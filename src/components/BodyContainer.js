import React from "react";
import HeroMd from "./HeroMd";
import About from "./About";
import Projects from "./Projects";
import H1Component from "./H1Component";
import Contact from "./Contact";

function BodyContainer() {
  return (
    <main className="container is-fluid">
      <HeroMd attr={`hero is-medium`} childAttr={`hero-body`}>
        <About />
      </HeroMd>
      <section>
        <H1Component attr="has-text-centered is-size-1 mb-5" value="Projects" />
        <Projects />
      </section>
      <Contact attr="py-6 mb-6 field" />
    </main>
  );
}

export default BodyContainer;
