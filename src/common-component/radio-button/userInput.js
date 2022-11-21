import { useState } from "react";

export const UserInput = (props) => {
  const { value, label, name, placeholder, type, onChange } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="UserInput">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};
