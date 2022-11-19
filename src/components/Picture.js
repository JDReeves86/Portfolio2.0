import React from "react";


function Picture({ attr, childAttr, alt, src }) {
    return (
        <figure className={attr}>
            <img src={src} alt={alt} className={childAttr}/>
        </figure>
    )
};

export default Picture