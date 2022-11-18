import React from "react";
import TextControl from "./TextControl";

function TextLabel({ attr, name, value, change }) {

    return (
      <div>
        <label className={attr}>{name}</label>
        <TextControl value={value} name={name} change={change}/>
      </div>
    );

}

export default TextLabel;