import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../logout-component/logOut";
import UserProfile from "../user-profile/userProfile";
export default function Admin() {
  return (
    <>
      <div className="header-admin">
        <Link className="link-hr" to="/AdminHome">
          Dashboard
        </Link>

        <div className="user-profile">Welcome,HR </div>
      </div>
    </>
  );
}
