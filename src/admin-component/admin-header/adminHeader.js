import React from "react";
import { Link } from "react-router-dom";
import NewRegistration from "../../common-component/registration-page/newRegistration";
import LogOut from "../../logout-component/logOut";
function AdminHeader(prop) {
  console.log("manager prop", prop.manager);

  return (
    <>
      <Link to="/EmployeeList">Dashboard </Link>
      <Link to="/NewRegistration">Add</Link>

      <LogOut />
    </>
  );
}

export default AdminHeader;
