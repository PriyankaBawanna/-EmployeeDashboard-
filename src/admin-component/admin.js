import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../logout-component/logOut";
export default function Admin() {
  return (
    <div>
      <Link to="/AdminHome">Dashboard </Link>
      <Link to="/NewRegistration">Add</Link>
      <LogOut />
    </div>
  );
}
