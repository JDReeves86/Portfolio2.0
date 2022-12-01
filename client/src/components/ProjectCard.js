import React from "react";
import PComponent from "./PComponent";
import IconContainer from "./IconContainer";

function ProjectCard({ values }) {
  if (!values.liveApp) {
    return (
      <div className="cards">
        <div className="cardContent">
          <div className={`cardFront ${values.backgroundImg}`}></div>
          <div className="cardBack">
            <div className="card-content">
              <PComponent
                attr="card-header is-justify-content-center has-text-light"
                value={[values.title]}
              />
              <IconContainer attr="" id="icons">
                {values.icons}
              </IconContainer>
              <PComponent
                attr="is-size-6 is-size-5-tablet has-text-weight-semibold pb-3 has-text-light"
                value={[values.tagline]}
              />
              <PComponent
                attr="is-size-6 is-size-5-tablet has-text-weight-semibold pb-3 has-text-light"
                value={[values.description]}
              />
              <a href={values.GHlink} target="none">
                <PComponent
                  attr="has-text-weight-bold"
                  value={["GitHub Repository"]}
                />
              </a>
              <PComponent attr="has-text-weight-bold" value={["No live app available."]} />
            </div>
          </div>
        </div>
      </div>
  )}
  else {
    return (
      <div className="cards">
        <div className="cardContent">
          <div className={`cardFront ${values.backgroundImg}`}></div>
          <div className="cardBack">
            <div className="card-content">
              <PComponent
                attr="card-header is-justify-content-center has-text-light"
                value={[values.title]}
              />
              <IconContainer attr="card-content" id="icons">
                {values.icons}
              </IconContainer>
              <PComponent
                attr="is-size-6 is-size-5-tablet has-text-weight-semibold pb-3 has-text-light"
                value={[values.tagline]}
              />
              <PComponent
                attr="is-size-6 is-size-5-tablet has-text-weight-semibold pb-3 has-text-light"
                value={[values.description]}
              />
              <a href={values.GHlink} target="none">
                <PComponent
                  attr="has-text-weight-bold"
                  value={["GitHub Repository"]}
                />
              </a>
              <a href={values.liveApp} target="none">
                <PComponent attr="has-text-weight-bold" value={["Live App"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
