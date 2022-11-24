import React from "react";
import { Link } from "react-router-dom";
import LogOut from "../logout-component/logOut";
import Profile from "../profile/profile";
function Managers() {
  return (
    <>
      <div className="header-admin">
        <Link to="/MangerHome" className="link-hr">
          Dashboard{" "}
        </Link>

        <div className="user-profile">
          <Profile />
        </div>
      </div>
    </>
  );
}
export default Managers;
