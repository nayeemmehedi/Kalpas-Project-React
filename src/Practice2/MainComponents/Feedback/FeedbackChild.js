import React, { useState, useEffect } from "react";
import Options from "./Options";

import PhoneNumber from "./PhoneOption";
import { validate } from "./FormValid";
import FormJsx from "./FormJsx";

const FeedbackChild = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    phone: "",
    countryCode: "",
  };

  const [formInit, setFormInit] = useState(initialValue);
  const [formerror, setFormerror] = useState({});
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const newForm = { ...formInit };
    newForm[e.target.name] = e.target.value;

    setFormInit(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormerror(validate(formInit));

    setSubmit(true);
  };

  useEffect(() => {
    //  console.log("xxx",formInit)

    if (Object.keys(formerror) == 0 && isSubmit) {
      console.log(formInit);
    }
  }, [formerror, formInit, isSubmit]);

  return (
    <div style={{ height: "100%" }}>
      <FormJsx
        formerror={formerror}
        isSubmit={isSubmit}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        Options={Options}
        PhoneNumber={PhoneNumber}
      ></FormJsx>
    </div>
  );
};

export default FeedbackChild;
