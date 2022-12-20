import React, { useState } from "react";
import LevelItem from "./LevelItem";
import ProjectCard from "./ProjectCard";
import Level from "./Level";
import ProjectDetails from "./ProjectDetails";
import projects from "../data/projects";

function Projects() {
  const keys = Object.keys(projects);
  const [projectState, setProjectState] = useState("home")
  if (projectState == "home") {
    return keys.map((el) => {
      return (
        <Level attr="level is-mobile">
          <LevelItem attr="level-item">
            <ProjectCard values={projects[el]} state={el} action={setProjectState}/>
          </LevelItem>
        </Level>
      );
    });
  }
  else {
    const selectedProject = keys.filter((el) => {
      console.log(el)
      if (el === projectState) return el
    })
    return (
      <ProjectDetails action={setProjectState} values = {projects[selectedProject]}/>
    )
  }

}

export default Projects; 