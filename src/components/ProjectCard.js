import React from "react";
import PComponent from "./PComponent";
import IconContainer from "./IconContainer";

function ProjectCard({ values }) {
  return (
    <div className="cards">
      <div className="cardContent">
        <div className={`cardFront ${values.backgroundImg}`}>
          <div class="cardBack">
            <div class="card-content">
              <PComponent
                attr="card-header is-justify-content-center has-text-light"
                value={[values.title]}
              />
              <IconContainer attr='card-content' id='icons'>
                {values.icons}
              </IconContainer>
              <PComponent
                attr="is-size-5 has-text-weight-semibold pb-3 has-text-light"
                value={[values.description]}
              />
              <a href={values.GHlink} target="none">
                <PComponent value={["GitHub Repository"]} />
              </a>
              <a href={values.liveApp} target="none">
                <PComponent value={["Live App"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
