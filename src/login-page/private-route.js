import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};
export default PrivateRoute;
