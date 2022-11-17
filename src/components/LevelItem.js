import React from "react";

function LevelItem({ attr, children }) {
  return <div class={`level-item ${attr}`}>{children}</div>;
}

export default LevelItem;
