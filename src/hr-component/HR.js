import React from "react";
import { Link } from "react-router-dom";
export default function HR() {
  return (
    <>
      <div className="header-admin">
        <Link className="link-hr" to="/HomePageHr">
          Home
        </Link>

        <div className="user-profile">Welcome,HR </div>
      </div>
    </>
  );
}
