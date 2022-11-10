import React, { useEffect, useState } from "react";
import { addEmployeeData } from "./action-registration";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import signUp from "../../image/signUp.jpg";
import { RadioButton } from "../radio-button/selectRole";
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

  return (
    <>
      <div className="login">
        <div className="login-component">
          <div className="register-filed">
            <h1>Register</h1>

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
            />
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
          <div className="image">
            <img src={signUp} />
            <nav>
              <Link to="/" className="account-create">
                already we have account
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
