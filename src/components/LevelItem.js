import React from "react";

function LevelItem({ attr, children }) {
  return <div className={`level-item ${attr}`}>{children}</div>;
}

export default LevelItem;
