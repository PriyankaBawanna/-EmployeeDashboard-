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
  const [inputDataOfEmployee, setInputDataOfEmployee] = useState({
    name: "",
    age: "",
    pincode: "",
    role: "",
    email: "",
    password: "",
    role: "",
    gender: "",
  });
  const userData = {
    name: inputDataOfEmployee.name,
    age: inputDataOfEmployee.age,
    pincode: inputDataOfEmployee.pincode,
    role: inputDataOfEmployee.role,
    email: inputDataOfEmployee.email,
    password: inputDataOfEmployee.password,
    role: inputDataOfEmployee.role,
    gender: inputDataOfEmployee.gender,
  };
  const dispatch = useDispatch();
  const radioChangeHandler = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      role: e.target.value,
    });
  };
  const radioChangeHandlerForGender = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      gender: e.target.value,
    });
  };

  const inputEmail = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      email: e.target.value,
    });
  };

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
