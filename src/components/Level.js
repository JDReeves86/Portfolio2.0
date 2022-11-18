import React from "react";

function Level({ attr, children }) {
  return <div className={attr}>{children}</div>;
}

export default Level;