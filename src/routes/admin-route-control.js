import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../admin/admin-home";

export default function AdminRouteControl() {
  return (
    <Routes>
      <Route path="/AdminHome" element={<AdminHome />} />
    </Routes>
  );
}
