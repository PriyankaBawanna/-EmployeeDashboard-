import React from "react";
import { useNavigate } from "react-router-dom";
function LogOut() {
  const navigate = useNavigate();
  function handleLogOut() {
    localStorage.clear();
    navigate("/", { replace: true });
  }
  return (
    <>
      <button onClick={handleLogOut} className="log-out-btn">
        Logout
      </button>
    </>
  );
}

export default LogOut;
