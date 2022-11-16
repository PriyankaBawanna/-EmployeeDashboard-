import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
function ViewEmployee() {
  const data = useSelector((state) => state.employeeDataUpdate);
  console.warn("data in view component ", data);
  return (
    <>
      <p>name {data.name}</p>
      <p>age {data.age}</p>

      <p>{data.pincode}</p>
      <p>{data.role}</p>
      <p>{data.email}</p>
      <p>{data.gender}</p>
    </>
  );
}
export default ViewEmployee;
