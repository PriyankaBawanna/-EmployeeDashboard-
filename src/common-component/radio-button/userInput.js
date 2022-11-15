import { useState } from "react";

export const UserInput = (props) => {
  const { changed, id, isSelected, label, value, placeholder } = props;
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="UserInput">
      <input
        className="input-user-register"
        id={id}
        onChange={changed}
        value={value}
        type="text"
        checked={isSelected}
        placeholder={placeholder}
      />
    </div>
  );
};
