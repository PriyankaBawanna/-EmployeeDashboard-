import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HR from "../hr-component/HR";

function ViewEmployee() {
  const data = useSelector((state) => state.employeeDataUpdate);
  console.warn("data in view component ", data);

  return (
    <>
      <HR />
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
