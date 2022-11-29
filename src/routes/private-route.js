import React, { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { employeeProfile } from "../profile/action-profile";
import { Link, useNavigate } from "react-router-dom";
import AdminHome from "../admin/admin-home";

const PrivateRoute = (props) => {
  const { Component } = props;
  const isLoggedIn = true;
  let email = JSON.parse(localStorage.getItem("userEmail"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(employeeProfile(email));
  }, []);

  const navigate = useNavigate();
  const data = useSelector((state) => state.employeeProfileReducer);
  const role = data.role;
  console.log("Data in PrivateRoute Component ", role);

  return <>Private Route</>;
};
export default PrivateRoute;

{
  /* <Routes>
<Route {...rest} element={component} />
</Routes> */
}
