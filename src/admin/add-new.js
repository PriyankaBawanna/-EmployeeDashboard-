import React from "react";
import NewRegistration from "../common/registration-page/new-registration";
import Admin from "./admin";

export default function AddNew() {
  let role = JSON.parse(localStorage.getItem("userDetails"));
  console.log("update component role ", role);
  return (
    <>
      <div className="add-new">
        {role == "Admin" && (
          <>
            <Admin />
          </>
        )}
        <div className="add-New-label">
          <h3>Add New Employee</h3>
        </div>
        <div className="registration-new">
          <NewRegistration />
        </div>
      </div>
    </>
  );
}
