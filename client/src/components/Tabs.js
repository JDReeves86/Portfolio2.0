import React, { useState } from "react";

function Tabs({ state, project, action }) {
  const [active, setActive] = useState("details");
  return (
    <div className="tabs is-centered is-small is-boxed">
      <ul>
        <li className={`${active === "details" ? "is-active" : ""}`}>
          <a
            onClick={() => {
              state("details");
              setActive("details");
            }}
          >
            Details
          </a>
        </li>
        <li className={`${active === "tech" ? "is-active" : ""}`}>
          <a
            onClick={() => {
              state("tech");
              setActive("tech");
            }}
          >
            Technologies
          </a>
        </li>
        <li>
          <a href={project.GHlink} target="none">
            GitHub Repo
          </a>
        </li>
        <li>
          <a href={project.liveApp} target="none">
            Live App
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              action("home");
            }}
          >
            All Projects
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Tabs;
