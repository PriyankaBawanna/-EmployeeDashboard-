import { RadioButton } from "../common-component/radio-button/selectRole";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { updateEmployee } from "./updateaction";
import { UserEmail } from "../common-component/radio-button/inputEmail";
export default function UpdateEmployee() {
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

  const dispatch = useDispatch();

  const data = useSelector((state) => state.employeeDataUpdate);
  useEffect(() => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      name: data.name,
      age: data.age,
      email: data.email,
      pincode: data.pincode,
      role: data.role,
      gender: data.gender,
    });
  }, [data]);

  const radioChangeHandlerForGender = (e) => {
    // setInputDataOfEmployee({
    //   //   ...inputDataOfEmployee,
    //   //   gender: e.target.value,
    // });
  };

  const radioChangeHandler = (e) => {
    // setInputDataOfEmployee({
    //   //   ...inputDataOfEmployee,
    //   //   role: e.target.value,
    // });
  };

  return (
    <>
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

        <div className="radio-button-group">
          <span>Gender</span>
          <RadioButton
            changed={radioChangeHandlerForGender}
            id="1"
            // isSelected={inputDataOfEmployee.gender === "female"}
            label="female"
            value="female"
            className="inputRadio"
          />

          <RadioButton
            changed={radioChangeHandlerForGender}
            id="2"
            // isSelected={inputDataOfEmployee.gender === "male"}
            label="male"
            value="male"
          />
        </div>
        <div className="radio-button-group">
          <RadioButton
            changed={radioChangeHandler}
            // id="1"
            // isSelected={inputDataOfEmployee.role === "Admin"}
            label="Admin"
            value="Admin"
            className="inputRadio"
          />

          <RadioButton
            changed={radioChangeHandler}
            id="2"
            // isSelected={inputDataOfEmployee.role === "HR"}
            label="HR"
            value="HR"
          />
          <RadioButton
            changed={radioChangeHandler}
            id="1"
            // isSelected={inputDataOfEmployee.role === "Manger"}
            label="Manger"
            value="Manger"
          />
        </div>
        <input
          type="Number"
          placeholder="Pincode"
          className="input-user-register"
        />
        <input
          type="Number"
          placeholder="Password"
          className="input-user-register"
        />
        <button
          className="login-button"
          onClick={() => dispatch(updateEmployee())}
        >
          update
        </button>
      </div>
    </>
  );
}
