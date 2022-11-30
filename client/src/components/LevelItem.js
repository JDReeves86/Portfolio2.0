import React from "react";

function LevelItem({ attr, children }) {
  return <div className={attr}>{children}</div>;
}

export default LevelItem;
