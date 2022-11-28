import React, { useEffect, useState } from "react";

export default function UserEmailError(prop) {
  const [emailError, setEmailError] = useState(false);
  const { value } = prop;
  useEffect(() => {
    let emailValidation = value;
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailValidation)) {
      setEmailError(false);
    } else if (!regEx.test(emailValidation) && emailValidation !== "") {
      setEmailError(true);
    }
  }, [value]);

  return (
    <div>
      {emailError && (
        <>
          <div>Not a valid name</div>
        </>
      )}
    </div>
  );
}
