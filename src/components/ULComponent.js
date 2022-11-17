import React from "react";
import LiComponent from "./LiComponent";

const skills = {
  Languages: {
    id: 1,
    text: "HTML5, CSS, JavaScript ES6, SQL",
  },
  Applications: {
    id: 2,
    text: "GitHub, MySQL, Insomnia",
  },
  Tools: {
    id: 3,
    text: "Node, Bulma, JQuery, JEST, Sequelize",
  },
  Skills: {
    id: 4,
    text: "REST, Test-driven Development, Object Oriented Programming, Object Related Mapping, responsive web design.",
  },
};

function ULComponent() {
  return (
    <ul>
      <LiComponent values={skills} attr='has-text-weight-bold' />
    </ul>
  );
}

export default ULComponent;
