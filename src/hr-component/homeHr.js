import React from "react";
import { Link } from "react-router-dom";
import EmployeeList from "../common-component/employeeList/EmployeeList";
import HR from "./hr";
function HomePageHr() {
  return (
    <>
      <h1>HR Home Page</h1>
      <HR />
      <EmployeeList />
    </>
  );
}
export default HomePageHr;
