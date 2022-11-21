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
    password: inputDataOfEmployee.password,
    role: inputDataOfEmployee.role,
    gender: inputDataOfEmployee.gender,
  };

  const radioChangeHandlerForGender = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      gender: e.target.value,
    });
  };

  const radioChangeHandler = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      role: e.target.value,
    });
  };

  return (
    <>
      {role == "HR" && <>HR</>}
      {role == "Admin" && (
        <>
          <Admin />
        </>
      )}

      {role == "Admin" && (
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
          ></input>

          <input
            type="text"
            className="input-user-register"
            placeholder="email"
            value={inputDataOfEmployee.email}
            onChange={(e) => {
              setInputDataOfEmployee({
                ...inputDataOfEmployee,
                email: e.target.value,
              });
            }}
          />
          <div>
            <div className="radio-button-group">
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
        </div>
      )}
      {role == "HR" && (
        <>
          <p>{inputDataOfEmployee.name}</p>
          <p>{inputDataOfEmployee.email}</p>
          <p>{inputDataOfEmployee.gender}</p>
        </>
      )}
      {(role == "HR") | (role == "Admin") && (
        <div>
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
            className="input-user-register"
            value={inputDataOfEmployee.pincode}
          />
        </div>
      )}
      <button
        className="login-button"
        onClick={() => dispatch(updateEmployeeData({ ...userData }))}
      >
        update
      </button>
    </>
  );
}
