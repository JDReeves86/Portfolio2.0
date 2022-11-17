import React from "react";
import ProfilePic from '../images/Me-head.jpg'

function HeadShot() {
    return (
        <figure className="level-item image is-128x128">
            <img src={ProfilePic} alt="it's me" className="is-rounded"/>
        </figure>
    )
};

export default HeadShot