import React from "react";

function Contact({ attr }) {
    return (
        <form className={attr}>
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Name"></input>
            </div>
            <label className="label">Email Address</label>
            <div className="control">
                <input className="input" type="text" placeholder="Email Address"></input>
            </div>
            <label className="label">Email Address</label>
            <div className="control">
                <textarea className="textarea" placeholder="Message"></textarea>
            </div>
        </form>
    )
}

export default Contact