import React, { useEffect, useState } from "react";
import { addEmployeeData } from "./action-registration";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import signUp from "../../image/signUp.jpg";
import { RadioButton } from "../radio-button/selectRole";
import { UserEmail } from "../radio-button/inputEmail";
import RegistrationImage from "./registrationImage";
import AdminHeader from "../../admin-component/admin-header/adminHeader";
export default function NewRegistration(prop) {
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

  const registration = prop.registerProp;
  console.log("registerProp", registration);

  return (
    <>
      {registration ? (
        <></>
      ) : (
        <span>
          <AdminHeader />
        </span>
      )}
      <div className="registration-fields">
        <input
          type="text"
          placeholder="name"
          value={inputDataOfEmployee.name}
          className="input-user-register"
          onChange={(e) => {
            setInputDataOfEmployee({
              ...inputDataOfEmployee,
              name: e.target.value,
            });
          }}
        />
        <input
          className="input-user-register"
          type="date"
          id="date-of-birth"
          name="date-of-birth"
          value={inputDataOfEmployee.age}
          onChange={(e) => {
            setInputDataOfEmployee({
              ...inputDataOfEmployee,
              age: e.target.value,
            });
          }}
        ></input>
        <input
          type="text"
          placeholder="email"
          value={inputDataOfEmployee.email}
          className="input-user-register"
          onChange={(e) => {
            setInputDataOfEmployee({
              ...inputDataOfEmployee,
              email: e.target.value,
            });
          }}
        />{" "}
        {/* <UserEmail placeholder="Email" id="1" onChange={inputEmail} /> */}
        <div className="radio-button-group">
          <span>Gender</span>
          <RadioButton
            changed={radioChangeHandlerForGender}
            id="1"
            isSelected={inputDataOfEmployee.gender === "female"}
            label="female"
            value="female"
            className="inputRadio"
          />

          <RadioButton
            changed={radioChangeHandlerForGender}
            id="2"
            isSelected={inputDataOfEmployee.gender === "male"}
            label="male"
            value="male"
          />
        </div>
        <div className="radio-button-group">
          <RadioButton
            changed={radioChangeHandler}
            id="1"
            isSelected={inputDataOfEmployee.role === "Admin"}
            label="Admin"
            value="Admin"
            className="inputRadio"
          />

          <RadioButton
            changed={radioChangeHandler}
            id="2"
            isSelected={inputDataOfEmployee.role === "HR"}
            label="HR"
            value="HR"
          />
          <RadioButton
            changed={radioChangeHandler}
            id="1"
            isSelected={inputDataOfEmployee.role === "Manger"}
            label="Manger"
            value="Manger"
          />
        </div>
        <input
          type="Number"
          placeholder="Pincode"
          value={inputDataOfEmployee.pincode}
          className="input-user-register"
          onChange={(e) => {
            setInputDataOfEmployee({
              ...inputDataOfEmployee,
              pincode: e.target.value,
            });
          }}
        />
        <input
          type="Number"
          placeholder="Password"
          value={inputDataOfEmployee.password}
          className="input-user-register"
          onChange={(e) => {
            setInputDataOfEmployee({
              ...inputDataOfEmployee,
              password: e.target.value,
            });
          }}
        />
        <button
          className="login-button"
          onClick={() => {
            dispatch(addEmployeeData({ ...userData }));
          }}
        >
          Register
        </button>
      </div>
    </>
  );
}
