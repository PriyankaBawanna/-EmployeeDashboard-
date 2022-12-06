import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeeProfile } from "../profile/action-profile";
import { Link, useNavigate } from "react-router-dom";
import AdminHome from "../admin/admin-home";

const PrivateRoute = ({ Children }) => {
  let userLoginResponse = JSON.parse(localStorage.getItem("userLoginResponse"));
  alert("PRivate route repsonse is trr");
  if (!userLoginResponse) {
    return <Navigate to="/" replace />;
  }
  if (userLoginResponse) {
    return Children;
  }
};
export default PrivateRoute;

{
  /* <Routes>
<Route {...rest} element={component} />
</Routes> */
}
