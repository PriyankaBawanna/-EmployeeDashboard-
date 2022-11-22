import { RadioButton } from "../common-component/radio-button/selectRole";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { updateEmployeeData } from "./updateaction";
import HR from "../hr-component/hr";
import Admin from "../admin/admin";

export default function UpdateEmployee() {
  const [inputDataOfEmployee, setInputDataOfEmployee] = useState({
    id: "",
    name: "",
    age: "",
    pincode: "",
    role: "",
    email: "",
    password: "",
    role: "",
    gender: "",
  });

  const dispatch = useDispatch();

  const data = useSelector((state) => state.employeeDataUpdate);
  console.log("data in main component ", data);

  let role = JSON.parse(localStorage.getItem("userDetails"));
  console.log("update component role ", role);

  useEffect(() => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      id: data.id,
      name: data.name,
      age: data.age,
      email: data.email,
      pincode: data.pincode,
      role: data.role,
      gender: data.gender,
    });
  }, [data]);
  const userData = {
    id: inputDataOfEmployee.id,
    name: inputDataOfEmployee.name,
    age: inputDataOfEmployee.age,
    pincode: inputDataOfEmployee.pincode,
    role: inputDataOfEmployee.role,
    email: inputDataOfEmployee.email,
    role: inputDataOfEmployee.role,
    gender: inputDataOfEmployee.gender,
  };

  const radioChangeHandlerForGender = (e) => {
    if (role == "Admin") {
      setInputDataOfEmployee({
        ...inputDataOfEmployee,
        gender: e.target.value,
      });
    }
  };

  const radioChangeHandler = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      role: e.target.value,
    });
  };

  const handleInputName = (e) => {
    if (role == "Admin") {
      setInputDataOfEmployee({
        ...inputDataOfEmployee,
        name: e.target.value,
      });
    }
  };

  const handleInputEmail = (e) => {
    if (role == "Admin") {
      setInputDataOfEmployee({
        ...inputDataOfEmployee,
        email: e.target.value,
      });
    }
  };

  const handleInputAge = (e) => {
    if (role == "Admin") {
      setInputDataOfEmployee({
        ...inputDataOfEmployee,
        age: e.target.value,
      });
    }
  };

  return (
    <>
      <div className="update-employee">
        <div className="header-update-employee">
          {role == "HR" && (
            <>
              <HR />
            </>
          )}
          {role == "Admin" && (
            <>
              <Admin />
            </>
          )}
        </div>
        <div className="update-employee-form">
          <div className="update-form-fields">
            <div className="user-input">
              <input
                type="text"
                placeholder="name"
                value={inputDataOfEmployee.name}
                className="input-user-register"
                onChange={(e) => {
                  handleInputName(e);
                }}
              />
            </div>
            <input
              className="input-user-register"
              type="date"
              id="date-of-birth"
              name="date-of-birth"
              value={inputDataOfEmployee.age}
              onChange={(e) => {
                handleInputAge(e);
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
                }}
              />
            </div>

            <button
              className="login-button"
              onClick={() => dispatch(updateEmployeeData({ ...userData }))}
            >
              update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
