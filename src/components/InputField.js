import React from "react";
import InputControl from "./InputControl";
import PComponent from "./PComponent";

function InputField({ attr, name, value, change, childAttr, type, help }) {

    return (
      <div className="field">
        <label className={attr}>{name}</label>
        <InputControl attr={childAttr} value={value} name={name} change={change} type={type}/>
        <PComponent attr="help is-danger" value={help} />
      </div>
    );

}

export default InputField;
