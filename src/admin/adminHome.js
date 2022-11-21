import React from "react";
import EmployeeList from "../common-component/employeeList/EmployeeList";
import Admin from "./admin";

export default function AdminHome() {
  return (
    <>
      <Admin />
      <EmployeeList />
    </>
  );
}
{
  /* <h1>Admin home page </h1>
      <Admin />
      <EmployeeList /> */
}
