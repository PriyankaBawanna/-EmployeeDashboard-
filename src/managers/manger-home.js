import React from "react";
import EmployeeList from "../common/employee-list/employee-list";

import Managers from "./managers";

export default function MangerHome() {
  return (
    <div className="admin">
      <Managers />
      <EmployeeList />
      <div className="footer-f">@copyright</div>
    </div>
  );
}
