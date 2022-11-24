import React, { useEffect, useState } from "react";
import { addEmployeeData } from "./action-registration";
import { useDispatch } from "react-redux";

import { RadioButton } from "../radio-button/selectRole";

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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [passwordError, setPassWordError] = useState(false);
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

  const handleInputEmail = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      email: e.target.value,
    });
    let emailValidation = e.target.value;
    console.log("email Validation ", emailValidation);
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(emailValidation)) {
      setEmailError(false);
    } else if (!regEx.test(emailValidation) && emailValidation !== "") {
      setEmailError(true);
    }
  };

  const handleInputPinCode = () => {
    if (inputDataOfEmployee.pincode.length == 6) {
      setPinError(true);
    } else {
      setPinError(false);
    }
  };

  function handleInputName() {
    if (inputDataOfEmployee.name.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  }

  const handleInputPassword = (e) => {
    if (e.target.value === " ") {
      setPassWordError(true);
    }
    const regEx = /^[0-9 a-z A-z~`!@#$%^&*()_+<>]{6,20}$/g;
    if (regEx.test(inputDataOfEmployee.password)) {
      setPassWordError(false);
    }
  };
  const validation = () => {
    if (nameError || emailError || passwordError || pinError) {
      setDisable(true);
    }
    if (!nameError && !emailError && !passwordError && !pinError) {
      setDisable(false);
      dispatch(addEmployeeData({ ...userData }));
    }
  };

  return (
    <>
      <div className="registration-fields">
        <div className="user-input">
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
              handleInputName();
            }}
          />
          <div>{nameError && <span>user not valid</span>}</div>
        </div>
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
        <div className="user-input">
          <input
            type="text"
            placeholder="email"
            value={inputDataOfEmployee.email}
            className="input-user-register"
            onChange={(e) => {
              handleInputEmail(e);
            }}
          />
          {emailError && <span>Email not valid</span>}
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
        <div className="user-input">
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
        <div className="user-input">
          <input
            type="text"
            placeholder="Password"
            value={inputDataOfEmployee.password}
            className="input-user-register"
            onChange={(e) => {
              setInputDataOfEmployee({
                ...inputDataOfEmployee,
                password: e.target.value,
              });
              handleInputPassword();
            }}
          />
          {passwordError && (
            <span>Password should be greater than 5 character</span>
          )}
        </div>
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
