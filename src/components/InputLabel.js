import React from "react";
import InputControl from "./InputControl";

function InputLabel({ attr, name, value, change }) {

    return (
      <div>
        <label className={attr}>{name}</label>
        <InputControl value={value} name={name} change={change}/>
      </div>
    );

}

export default InputLabel;
