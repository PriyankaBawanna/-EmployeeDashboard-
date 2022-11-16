import React, { useEffect, useState } from "react";
import { addEmployeeData } from "./action-registration";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import signUp from "../../image/signUp.jpg";
import { RadioButton } from "../radio-button/selectRole";
import { UserEmail } from "../radio-button/inputEmail";
import RegistrationImage from "./registrationImage";
import NewRegistration from "./newRegistration";
export default function Registration() {
  return (
    <>
      <div className="registration">
        <div className="registration-page">
          <div className="registration-fields">
            <h1>Registration</h1>
            <NewRegistration registerProp={true} />
          </div>
          <div className="registration-image">
            <RegistrationImage />
          </div>
        </div>
      </div>
    </>
  );
}
