import React, { useEffect, useState } from "react";
import { addEmployeeData } from "./action-registration";
import { useDispatch } from "react-redux";

import { RadioButton } from "../user-input/selectRole";
import FormInput from "../user-input/user-input";
import UserNameError from "../user-input/user-name-error";
import UserEmailError from "../user-input/user-email-error";
import PassWordError from "../user-input/password-error";

export default function NewRegistration() {
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

  const [pinError, setPinError] = useState(false);

  const [disable, setDisable] = useState(0);

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

  const handleInputPinCode = () => {
    if (inputDataOfEmployee.pincode.length == 6) {
      setPinError(true);
    } else {
      setPinError(false);
    }
  };

  const validation = () => {
    if (
      !inputDataOfEmployee.email ||
      !inputDataOfEmployee.password ||
      !inputDataOfEmployee.name ||
      !inputDataOfEmployee.pincode ||
      !inputDataOfEmployee.age ||
      !inputDataOfEmployee.gender ||
      !inputDataOfEmployee.role
    ) {
      setDisable(true);
    } else {
      setDisable(false);
      dispatch(addEmployeeData({ ...userData }));
    }
  };

  const handleUserChange = (event) => {
    const updatedForm = { ...inputDataOfEmployee };

    updatedForm[event.target.name] = event.target.value;

    console.log("Form changed: ", updatedForm);

    setInputDataOfEmployee(updatedForm);
  };
  return (
    <>
      <div className="input-fields">
        <FormInput
          placeholder="Name"
          name="name"
          value={inputDataOfEmployee.name}
          onChange={handleUserChange}
        />

        {inputDataOfEmployee.name && (
          <>
            <UserNameError value={inputDataOfEmployee.name} />
          </>
        )}
      </div>
      <div className="input-fields">
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
      </div>
      <div className="input-fields">
        <FormInput
          placeholder="email"
          name="email"
          value={inputDataOfEmployee.email}
          onChange={handleUserChange}
        />
        {inputDataOfEmployee.email && (
          <>
            <UserEmailError value={inputDataOfEmployee.email} />
          </>
        )}
      </div>
      <div className="radio-button-registration ">
        <div className="radio-button">
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
      </div>
      <div className="radio-button-registration ">
        <div className="radio-button">
          <div>Role</div>
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
      </div>
      <div className="input-fields">
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
            handleInputPinCode();
          }}
        />
        {pinError && <span>Please Enter the valid pin</span>}
      </div>
      <div className="input-fields">
        <FormInput
          placeholder="Password"
          name="password"
          type="password"
          value={inputDataOfEmployee.password}
          onChange={handleUserChange}
        />
        {inputDataOfEmployee.password && (
          <>
            <PassWordError value={inputDataOfEmployee.password} />
          </>
        )}
      </div>
      <div className="input-fields">
        <button
          disabled={disable}
          className="login-button"
          onClick={() => {
            validation();
          }}
        >
          Register
        </button>
      </div>
    </>
  );
}
