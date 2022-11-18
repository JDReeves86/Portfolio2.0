import React from "react";
import HeroMd from "./HeroMd";
import About from "./About";
import Projects from "./Projects";
import H1Component from "./H1Component";
import Contact from "./Contact";

function BodyContainer({ source }) {
  switch (source) {
    case "Projects":
      return (
        <section>
          <H1Component
            attr="has-text-centered is-size-1 mb-5"
            value="Projects"
          />
          <Projects />
        </section>
      );
    case "Contact":
      return <Contact attr="py-6 mb-6 field" />;
    default:
      return (
        <HeroMd attr={`hero is-medium`} childAttr={`hero-body`}>
          <About />
        </HeroMd>
      );
  }
}

export default BodyContainer;
