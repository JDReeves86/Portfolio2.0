import React from "react";

function NavbarItem({ links, setPage }) {
  const resumeDl = async () => {
    const resume = await fetch("Resume.pdf");
    let alink = document.createElement("a");
    alink.href = resume.url;
    alink.download = "JRResume.pdf";
    alink.click();
  };
  const dinosaurs = async () => {
    const resume = await fetch("Dinosaurs.pdf");
    let alink = document.createElement("a");
    alink.href = resume.url;
    alink.download = "Dinosaurs!.pdf";
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
          <a
            key={i}
            className="navbar-item"
            href={`https://docs.google.com/document/d/1lZ0oq_g1BTosezgiiM0GG5BTYMFUDMLd/edit?usp=sharing&ouid=105025530709824252770&rtpof=true&sd=true`}
            target="none"
          >
            {el}
          </a>
        );
      case "Download Dinosaurs!":
        return (
          <a key={i} className="navbar-item" onClick={dinosaurs} target="none">
            {el}
          </a>
        );
      default: {
        return (
          <a
            key={i}
            className="navbar-item"
            onClick={() => {
              setPage(el);
            }}
          >
            {el}
          </a>
        );
      }
    }
  });
}

export default NavbarItem;
