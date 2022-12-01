import React from "react";

function Button({ attr, value, clickHandler }) {
    return(
        <button className={attr} onClick={clickHandler}>{value}</button>
    )
}
 export default Button 