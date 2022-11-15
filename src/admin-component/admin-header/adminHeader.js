import React from "react";
import { Link } from "react-router-dom";
import NewRegistration from "../../common-component/registration-page/newRegistration";
function AdminHeader() {
  return (
    <>
      <Link to="/EmployeeList">Dashboard </Link>
      <Link to="/NewRegistration">Add</Link>
    </>
  );
}

export default AdminHeader;
