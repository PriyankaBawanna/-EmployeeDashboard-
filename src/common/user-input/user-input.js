import React, { useState } from "react";
import UserNameError from "./user-name-error";
export default function FormInput(props) {
  const { placeholder, type, name, value, onChange } = props;
  const [error, setError] = useState(false);

  return (
    <div>
      <input
        placeholder={placeholder}
        className="input-user-register"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
