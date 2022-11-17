import React from "react";
import EmployeeList from "../common-component/employeeList/EmployeeList";

import Managers from "./managers";

export default function MangerHome() {
  return (
    <div>
      <Managers />
      <EmployeeList editEmployee={true} />
    </div>
  );
}
