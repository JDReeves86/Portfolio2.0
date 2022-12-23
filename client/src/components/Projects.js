import React, { useState } from "react";
import Columns from "./Columns";
import ColumnSolo from "./ColumnSolo";
import LevelItem from "./LevelItem";
import ProjectCard from "./ProjectCard";
import Level from "./Level";
import ProjectDetails from "./ProjectDetails";
import projects from "../data/projects";

function Projects() {
  const keys = Object.keys(projects);
  const [projectState, setProjectState] = useState("home");
  if (projectState === "home") {
    return (
      <Columns attr="is-multiline is-centered">
        {keys.map((el) => {
          return (
            <ColumnSolo attr="is-5">
              <ProjectCard
                values={projects[el]}
                state={el}
                action={setProjectState}
              />
            </ColumnSolo>
          );
        })}
      </Columns>
    );
  } else {
    const selectedProject = keys.filter((el) => {
      console.log(el);
      if (el === projectState) return el;
    });
    return (
      <ProjectDetails
        action={setProjectState}
        values={projects[selectedProject]}
      />
    );
  }
}

export default Projects;
