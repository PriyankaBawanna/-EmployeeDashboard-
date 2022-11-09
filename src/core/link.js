import React from "react";
import Home from ".";
import { Link, useLocation } from "react-router-dom";
export default function Link() {
  const location = useLocation();
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/LoginPage">LoginPage</Link>
      </div>
    </>
  );
}
