import React from "react";
import TextControl from "./TextControl";

function TextLabel({ attr, name, value, change, childAttr, rows }) {
  return (
    <div>
      <label className={attr}>{name}</label>
      <TextControl
        attr={childAttr}
        rows={rows}
        value={value}
        name={name}
        change={change}
      />
    </div>
  );
}

export default TextLabel; 
