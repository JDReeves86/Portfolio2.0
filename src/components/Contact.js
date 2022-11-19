import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import TextLabel from "./TextLabel";
import H1Component from "./H1Component";
import Columns from "./Columns";


function Contact({ attr }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [validEmail, setValid] = useState("")

  const changeState = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case "Name":
        setName(inputValue);
        break;
      case "Email Address":
        const regex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}", "g") /* eslint-disable-line */
        regex.test(inputValue) ? setValid("") : setValid("Please enter a valid e-mail address")
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
        <InputField
          attr="label mt-4"
          childAttr="is-info"
          name="Name"
          value={name}
          change={changeState}
          help={['']}
        />
      </Columns>
      <Columns attr="is-centered" childAttr={"is-half"}>
        <InputField
          attr="label mt-4"
          childAttr="is-info"
          type='email'
          name="Email Address"
          value={email}
          change={changeState}
          help={[validEmail]}
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
