import React from "react";
import { Link } from "react-router-dom";
import { allRoutes } from "../constant/path";
import LogOut from "../logout/log-out";
import Profile from "../profile/profile";

function Managers() {
  return (
    <>
      <div className="header-admin">
        <Link to={allRoutes.mangerHome} className="link-hr">
          Dashboard
        </Link>

        <div className="user-profile">
          <Profile />
        </div>
      </div>
    </>
  );
}
export default Managers;
