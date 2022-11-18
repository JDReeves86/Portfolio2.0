import React from "react";
import InputControl from "./InputControl";

function InputLabel({ attr, name, value, change, childAttr }) {

    return (
      <div>
        <label className={attr}>{name}</label>
        <InputControl attr={childAttr} value={value} name={name} change={change}/>
      </div>
    );

}

export default InputLabel;
