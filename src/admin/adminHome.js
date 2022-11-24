import React from "react";
import EmployeeList from "../common-component/employeeList/EmployeeList";
import Admin from "./admin";

export default function AdminHome() {
  return (
    <>
      <div className="admin">
        <Admin />
        <EmployeeList />
        <div className="footer-f">@copyright</div>
      </div>
    </>
  );
}
