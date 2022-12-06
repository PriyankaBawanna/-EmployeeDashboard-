import React from "react";
import { useNavigate } from "react-router-dom";
import Add from "../../image/Add.png";
export default function Welcome() {
  let role = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();
  const handleAddNew = () => {
    navigate("/add-employee");
  };

  return (
    <div className="welcome-page">
      <div>
        <h4>Welcome to Dashboard...!</h4>
        <p>You can check the Details of employee</p>
      </div>
      {role == "Admin" && (
        <>
          <button className="add-new-button" onClick={handleAddNew}>
            <img src={Add} />
          </button>
        </>
      )}
    </div>
  );
}
