import { useState } from "react";

export const UserInput = (props) => {
  const { changed, id, value, placeholder } = props;
  const [emailError, setEmailError] = useState("");

  return (
    <div className="UserInput">
      <input
        className="input-user-register"
        id={id}
        onChange={changed}
        value={value}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};
