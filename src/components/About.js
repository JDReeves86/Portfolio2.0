import React from "react";
import H1Component from "./H1Component";
import PComponent from "./PComponent";
import ULComponent from "./ULComponent";
import Level from "./Level";
import LevelItem from "./LevelItem";
import Picture from "./Picture";
import ProfilePic from "../images/Me-head.webp";
import MERN from "../images/MERN.webp";

const about = [
  "Web and software development is a far cry from nursing, but here I stand. I have spent the past 13 years serving others during their most difficult of times. Over a decade of working with the most vulnerable in a high stakes environment has helped me foster an attitude of constant growth, self reflection and seeking excellence. Spending the last 10 years in critical care, and through the covid pandemic, I have developed an ability to act quickly, think critically, and rapidly adapt to stressful and fluid situations. I now look to blend the past with my future and bring the skills I have developed over the course of my nursing career with my newfound technical abilities. I hope to find a position where I can effectively leverage both of these skill sets to help you solve your business needs while continuing to expand my knowledge and qualifications.",
];

const langs = ["Languages/Applications/Technologies/Skills:"];

const skills = {
  Languages: {
    id: 1,
    text: "HTML5, CSS, JavaScript ES6, SQL",
  },
  Applications: {
    id: 2,
    text: "GitHub, MongoDB Compass, MySQL, Insomnia",
  },
  Tools: {
    id: 3,
    text: "MongoDB, Express.js, React.js, Node.js, Bulma, JQuery, JEST, Sequelize",
  },
  Skills: {
    id: 4,
    text: "REST, Test-Driven Development, Object Oriented Programming, Object Related Mapping, Responsive Web Design.",
  },
};

function About() {
  return (
    <div>
      <Level attr="level-left">
        <LevelItem attr="level-item">
          <Picture
            attr="level-item image profilePic"
            childAttr="is-rounded"
            alt="it's me"
            src={ProfilePic}
          />
        </LevelItem>
        <LevelItem attr="level-item">
          <H1Component value="About Me" attr={`has-text-centered is-size-1`} />
        </LevelItem>
      </Level>

      <PComponent attr={` py-3`} value={about} />
      <PComponent attr={"py-3 has-text-weight-bold"} value={langs} />
      <ULComponent listItems={skills} />
      <Picture
        attr="image pt-4 mern"
        childAttr=""
        alt="MERN"
        src={MERN}
      />
    </div>
  );
}

export default About;
