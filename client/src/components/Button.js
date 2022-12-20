import React from "react";

function Button({ attr, action, children }) {
    return(
        <button className={`button ${attr}`} onClick={action} >{children}</button>
    )
}
 export default Button 