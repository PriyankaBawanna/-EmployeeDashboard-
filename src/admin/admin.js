import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../logout/log-out";
import Profile from "../profile/profile";
import UserProfile from "../user-profile/user-profile";
export default function Admin() {
  return (
    <>
      <div className="header-admin">
        <Link className="link-hr" to="/private-route">
          Dashboard
        </Link>

        <div className="user-profile">
          <Profile />
        </div>
      </div>
    </>
  );
}
