import React, { useEffect, useState } from "react";
import { addEmployeeData } from "./action-registration";
import { useDispatch } from "react-redux";

import { RadioButton } from "../user-input/selectRole";
import FormInput from "../user-input/user-input";

import { validationUserData } from "../../validation/validation";
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
  const [fromErrors, setFormsErrors] = useState({});

  const [disable, setDisable] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

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
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    console.log("fromErros ", fromErrors);
    if (Object.keys(fromErrors).length === 0 && isSubmit == true) {
      console.log("Form Values ", inputDataOfEmployee);
    }
  }, [fromErrors]);

  const handleUserChange = (event) => {
    const updatedForm = { ...inputDataOfEmployee };

    updatedForm[event.target.name] = event.target.value;

    console.log("Form changed: ", updatedForm);

    setInputDataOfEmployee(updatedForm);
    setFormsErrors(validationUserData(updatedForm));
  };

  return (
    <>
      <div className="input-fields">
        <FormInput
          type="text"
          lassName="input-user-register"
          placeholder="Name"
          name="name"
          value={inputDataOfEmployee.name}
          onChange={handleUserChange}
        />
        <span className="errorMessage">{fromErrors.name}</span>
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
        <span className="errorMessage">{fromErrors.email}</span>
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
          }}
        />
        <span className="errorMessage">{fromErrors.pincode}</span>
      </div>
      <div className="input-fields">
        <FormInput
          placeholder="Password"
          name="password"
          type="password"
          value={inputDataOfEmployee.password}
          onChange={handleUserChange}
        />
        <span className="errorMessage">{fromErrors.password}</span>
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
