import React from "react";

function PComponent({ value, attr }) {
    return(
        value.map((el, i) => {
            return <p key={i} className={attr}>{el}</p>
        })
    )    
};

export default PComponent