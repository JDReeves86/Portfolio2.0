import React, { useState } from "react";
import InputLabel from "./InputLabel";
import Button from "./Button";
import TextLabel from "./TextLabel";
import H1Component from "./H1Component";
import Columns from "./Columns";


function Contact({ attr }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const changeState = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case "Name":
        setName(inputValue);
        break;
      case "Email Address":
        setEmail(inputValue);
        break;
      default:
        setMessage(inputValue);
        break;
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    const submission = {
      name,
      email,
      message,
    };

    setName("");
    setEmail("");
    setMessage("");
    console.log(submission);
  };

  return (
    <form className={attr}>
      <H1Component attr="is-size-3 has-text-centered" value="Contact" />
      <Columns attr="is-centered" childAttr={"is-half"}>
        <InputLabel
          attr="label mt-4"
          childAttr="is-info"
          name="Name"
          value={name}
          change={changeState}
        />
      </Columns>
      <Columns attr="is-centered" childAttr={"is-half"}>
        <InputLabel
          attr="label mt-4"
          childAttr="is-info"
          name="Email Address"
          value={email}
          change={changeState}
        />
      </Columns>
      <Columns attr="is-centered" childAttr={"is-half"}>
        <TextLabel
          attr="label mt-4"
          rows="6"
          name="Message"
          childAttr="is-primary"
          value={message}
          change={changeState}
        />
        <Button
          attr="button is-info mt-4"
          value="Submit"
          clickHandler={submitForm}
        />
      </Columns>
    </form>
  );
}

export default Contact;
