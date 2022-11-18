import React from "react";
import LevelItem from "./LevelItem";
import ProjectCard from "./ProjectCard";
import Level from "./Level";
import projects from "../data/projects";

function Projects() {
  const keys = Object.keys(projects);
  return keys.map((el) => {
    return (
      <Level attr="level is-mobile">
        <LevelItem>
          <ProjectCard values={projects[el]} />
        </LevelItem>
      </Level>
    );
  });
}

export default Projects;
