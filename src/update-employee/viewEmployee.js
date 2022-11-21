import React from "react";

import { useSelector } from "react-redux";
import Admin from "../admin/admin";

function ViewEmployee() {
  const data = useSelector((state) => state.employeeDataUpdate);
  console.log("data in view component ", data);
  console.log("data in view component", data.name);

  let role = JSON.parse(localStorage.getItem("userDetails"));
  console.log("update component role ", role);

  return (
    <>
      {role == "HR" && <>HR</>}
      {role == "Admin" && (
        <>
          <Admin />
        </>
      )}
      {role == "manger" && <>Manger</>}
      <p>View the user Details </p>
      {data.name}
    </>
  );
}
export default ViewEmployee;
