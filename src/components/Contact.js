import React from "react";
import InputLabel from "./InputLabel";
import InputControl from "./InputControl";
import TextLabel from "./TextLabel";

const inputFields = ['Name', 'Email Address'];
const textFields = ['Message']

function Contact({ attr }) {
    return (
        <form className={attr}>
            <InputLabel attr="label p-2" values={inputFields}/>
            <TextLabel attr="label p-2" values={textFields}/>
        </form>
    )
}

export default Contact