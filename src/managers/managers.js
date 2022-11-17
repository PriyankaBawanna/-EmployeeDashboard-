import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../logout-component/logOut";
function Managers() {
  return (
    <>
      <Link to="/MangerHome">Dashboard </Link>
      <LogOut />
    </>
  );
}
export default Managers;
