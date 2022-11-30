import React from "react";

function Anchor({ attr, href, children }) {
  return (
    <a className={attr} href={href}>
      {children}
    </a>
  );
}

export default Anchor;
