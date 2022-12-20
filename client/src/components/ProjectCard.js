import React from "react";
import PComponent from "./PComponent";
import IconContainer from "./IconContainer";

function ProjectCard({ values, action, state }) {
  if (!values.liveApp) {
    return (
      <div className="cards">
        <div className="cardContent">
          <div className={`cardFront ${values.backgroundImg}`}></div>

          <div className="cardBack">
            <a
              onClick={() => {
                action(state)
              }}
            >
              <div className="card-content">
                <PComponent
                  attr="card-header is-justify-content-center has-text-light"
                  value={[values.title]}
                />
                <PComponent
                  attr="is-size-7 is-size-5-tablet has-text-weight-semibold pb-3 has-text-light"
                  value={[values.tagline]}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cards">
        <div className="cardContent">
          <div className={`cardFront ${values.backgroundImg}`}></div>

          <div className="cardBack">
            <a
              onClick={() => {
                action(state)
              }}
            >
              <div className="card-content">
                <PComponent
                  attr="card-header is-justify-content-center has-text-light mb-6"
                  value={[values.title]}
                />

                <PComponent
                  attr="is-size-6 is-size-5-tablet has-text-weight-semibold mt-6 py-3 has-text-light"
                  value={[values.tagline]}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
