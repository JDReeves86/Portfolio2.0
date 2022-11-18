import React from "react";
import App from "../App";

function NavbarItem({ links, setPage }) {
  const resumeDl = async () => {
    const resume = await fetch("Resume.pdf");
    let alink = document.createElement("a");
    alink.href = resume.url;
    alink.download = "SamplePDF.pdf";
    alink.click();
  };
  return links.map((el, i) => {
    switch (el) {
      case "GitHub":
        return (
          <a
            key={i}
            className="navbar-item"
            href={`https://github.com/JDReeves86`}
            target="none"
          >
            {el}
          </a>
        );
      case "LinkedIn":
        return (
          <a
            key={i}
            className="navbar-item"
            href={`https://www.linkedin.com/in/jacob-reeves-4237a9238/`}
            target="none"
          >
            {el}
          </a>
        );
      case "Resume":
        return (
          <a key={i} className="navbar-item" onClick={resumeDl} target="none">
            {el}
          </a>
        );
      default: {
        return (
          <a key={i} className="navbar-item" onClick={() => setPage(el)}>
            {el}
          </a>
        );
      }
    }
  });
}

export default NavbarItem;
