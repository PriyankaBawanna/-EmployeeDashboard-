import React from "react";
import { Link } from "react-router-dom";
import Profile from "../profile/profile";
export default function HR() {
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
