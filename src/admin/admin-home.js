import React from "react";
import EmployeeList from "../common/employee-list/employee-list";
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
