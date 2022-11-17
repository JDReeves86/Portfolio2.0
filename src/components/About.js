import React from "react";
import H1Component from "./H1Component";
import PComponent from "./PComponent";
import ULComponent from "./ULComponent";

const about = ["Web and software development is a far cry from nursing, but here I stand. I have spent the past 13 years serving others during their most difficult of times. Over a decade of working with the most vulnerable in a high stakes environment has helped me foster an attitude of constant growth, self reflection and seeking excellence. Spending the last 10 years in critical care, and through the covid pandemic, I have developed an ability to act quickly, think critically, and rapidly adapt to stressful and fluid situations. I now look to blend the past with my future and bring the skills I have developed over the course of my nursing career with my newfound technical abilities. I hope to find a job where I can effectively leverage both of these skill sets to enact change while continuing to expand my knowledge and qualifications."]
const langs = ["Languages/Applications/Technologies/Skills:"]

function About() {
  return (
    <div>
      <H1Component value="About Me" attr={`has-text-centered is-size-1`} />
      <PComponent
        attr={`has-text-centered py-3`}
        value= {about}
      />
      <PComponent attr={'py-3'} value={langs} />
      <ULComponent />
    </div>
  );
}

export default About;
