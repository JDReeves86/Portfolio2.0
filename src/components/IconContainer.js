import React from "react";
import Icon from "./Icon";

function IconContainer({ attr, id, children }) {
  return (
    <div className={attr} id={id}>
      {children.map((el) => {
        return (
            <Icon attr={el} />
        )
      })}
    </div>
  );
}

export default IconContainer; 
