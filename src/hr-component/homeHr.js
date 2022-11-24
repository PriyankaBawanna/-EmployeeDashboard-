import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeList from "../common-component/employeeList/EmployeeList";
import LogOut from "../logout-component/logOut";
import HR from "./hr";
function HomePageHr() {
  const role = "HR";
  return (
    <>
      <div className="admin">
        <HR />
        <EmployeeList hr={role} />
        <div className="footer-f">@copyright</div>
      </div>
    </>
  );
}
export default HomePageHr;
