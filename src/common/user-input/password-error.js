import React, { useState, useEffect } from "react";

export default function PassWordError(prop) {
  const { value } = prop;
  const [passwordErrorLength, setPassWordErrorLength] = useState(false);
  const [passwordErrorNumber, setPassWordErrorNumber] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [specialSymbol, setSpecialSymbol] = useState(false);
  useEffect(() => {
    let passwordValidation = value;
    if (value.length > 5) {
      setPassWordErrorLength(true);
    }

    const regEx = /[0-9]/;
    if (regEx.test(passwordValidation)) {
      setPassWordErrorNumber(false);
    } else if (!regEx.test(passwordValidation) && passwordValidation !== "") {
      setPassWordErrorNumber(true);
    }

    const regExLowerCase = /[a-z]/;
    if (regExLowerCase.test(passwordValidation)) {
      setLowerCase(false);
    } else if (
      !regExLowerCase.test(passwordValidation) &&
      passwordValidation !== ""
    ) {
      setLowerCase(true);
    }

    const regExUpperCase = /[A-Z]/;
    if (regExUpperCase.test(passwordValidation)) {
      setUpperCase(false);
    } else if (
      !regExUpperCase.test(passwordValidation) &&
      passwordValidation !== ""
    ) {
      setUpperCase(true);
    }
    const regSymbol = /[!@#$%^&**()_+?></]/;
    if (regSymbol.test(passwordValidation)) {
      setSpecialSymbol(false);
    } else if (
      !regSymbol.test(passwordValidation) &&
      passwordValidation !== ""
    ) {
      setSpecialSymbol(true);
    }
  }, [value]);
  return (
    <div>
      {passwordErrorLength && <>Password Length should be grater than 8</>}
      {passwordErrorNumber && <>one Number Necessary</>}
      {lowerCase && <>at least on lower case latter </>}
      {upperCase && <>at least one upper case </>}
      {specialSymbol && <>at least one Special Character</>}
    </div>
  );
}
