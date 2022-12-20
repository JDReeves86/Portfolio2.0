import React from "react";
import Icon from "./Icon";

function IconContainer({ attr, id, children }) {
  return (
    <div className={attr} id={id}>
      {children.map((el, i) => {
        return (
            <Icon attr={el} key={i}/>
        )
      })}
    </div>
  );
}

export default IconContainer; 
