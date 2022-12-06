import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Error from "../error/error";

function Protected({ userRole, children }) {
  const userProfile = useSelector((state) => state.employeeProfileReducer);
  const roleUser = userProfile.role;

  const roleOfCurrentUser = userRole.includes(roleUser);
  console.log("roleOfCurrentUser ", roleOfCurrentUser);

  //check user login

  const data = useSelector((state) => state.employeeLogin);
  const response = data.result;
  console.log("Response ", response);

  if (!response && roleOfCurrentUser === null) {
    return <Navigate to="/" replace />;
  }
  if (response && roleOfCurrentUser) {
    return children;
  }
  if (response === null && !roleOfCurrentUser) {
    return <Error />;
  }
}
export default Protected;
