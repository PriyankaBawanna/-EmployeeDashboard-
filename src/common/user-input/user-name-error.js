import React, { useEffect, useState } from "react";

export default function UserNameError(prop) {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState(false);
  const { value } = prop;

  useEffect(() => {
    if (value.length < 3) {
      setNameError(true);
      setError(true);
    } else {
      setNameError(false);
    }
  }, [value]);

  useEffect(() => {
    let emailValidation = value;
    console.log("EmailValidation ", emailValidation);

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailValidation)) {
      setEmailError(false);
    } else if (!regEx.test(emailValidation) && emailValidation !== "") {
      setEmailError(true);
    }
  }, [value]);

  switch (error) {
    case nameError === true:
      return <>please Enter valid name </>;
    case emailError === true:
      return <>please Enter valid Email </>;
    default:
      <></>;
  }
}
