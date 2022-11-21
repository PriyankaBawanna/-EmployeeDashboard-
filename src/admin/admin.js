import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../logout-component/logOut";
import UserProfile from "../user-profile/userProfile";
export default function Admin() {
  return (
    <>
      <div className="header-admin">
        <div className="link-section">
          <Link className="link" to="/AdminHome">
            Dashboard
          </Link>
          <Link to="/NewRegistration" className="link">
            Add New Employee
          </Link>
        </div>
        <div className="user-profile">Welcome,HR </div>
      </div>
    </>
  );
}
