import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "../admin-component/admin-header/adminHeader";
function ViewEmployee() {
  const data = useSelector((state) => state.employeeDataUpdate);
  console.warn("data in view component ", data);
  const navigate = useNavigate();
  return (
    <>
      <AdminHeader />
      <p>name {data.name}</p>
      <p>age {data.age}</p>

      <p>{data.pincode}</p>
      <p>{data.role}</p>
      <p>{data.email}</p>
      <p>{data.gender}</p>

      <button
        onClick={() => {
          navigate("/UpdateEmployee");
        }}
      >
        Edit
      </button>
    </>
  );
}
export default ViewEmployee;
