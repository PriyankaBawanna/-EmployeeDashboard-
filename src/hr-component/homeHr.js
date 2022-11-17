import React from "react";
import { Link } from "react-router-dom";
import EmployeeList from "../common-component/employeeList/EmployeeList";
import HR from "./HR";
function HomePageHr() {
  return (
    <>
      <HR />
      <EmployeeList />
    </>
  );
}
export default HomePageHr;
