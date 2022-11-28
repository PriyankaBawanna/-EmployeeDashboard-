import React, { useEffect, useState } from "react";

export default function UserNameError(prop) {
  const [nameError, setNameError] = useState(false);
  const { value } = prop;
  useEffect(() => {
    if (value.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }, [value]);

  return (
    <div>
      {nameError && (
        <>
          <div>Not a valid name</div>
        </>
      )}
    </div>
  );
}
