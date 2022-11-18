import React, { useState } from "react";
import InputLabel from "./InputLabel";
import Button from "./Button";
import TextLabel from "./TextLabel";

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
      <InputLabel
        attr="label mt-4"
        name="Name"
        value={name}
        change={changeState}
      />
      <InputLabel
        attr="label mt-4"
        name="Email Address"
        value={email}
        change={changeState}
      />
      <TextLabel
        attr="label mt-4"
        name="Message"
        value={message}
        change={changeState}
      />
      <Button
        attr="button is-primary mt-4"
        value="Submit"
        clickHandler={submitForm}
      />
    </form>
  );
}

export default Contact;
