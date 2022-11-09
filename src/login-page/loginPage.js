import React, { useState } from "react";
import { loginEmployee } from "./action-login";
import { useDispatch } from "react-redux";
import { RadioButton } from "../common-component/radio-button/selectRole";

import { useSelector } from "react-redux";
import signIn from "../image/signIn.jpg";
import { Link, useNavigate } from "react-router-dom";
function LoginPage() {
  const [inputDataOfEmployee, setInputDataOfEmployee] = useState({
    email: "",
    password: "",
    role: "",
  });
  const loginData = {
    role: inputDataOfEmployee.role,
    email: inputDataOfEmployee.email,
    password: inputDataOfEmployee.password,
  };

  const radioChangeHandler = (e) => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      role: e.target.value,
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employeeLogin);
  const check = data[0];
  console.log("response ", check);
  if (check === true) {
    console.log("Inside the If condition ");
    navigate("/EmployeeList");
  }
  if (check === false) {
    alert("Error");
  }
  return (
    <div className="login">
      <div className="login-component">
        <div className="image">
          <img src={signIn} />
          <nav>
            <Link to="/Registration" className="account-create">
              Create an account{" "}
            </Link>
          </nav>
        </div>
        <div className="login-filed">
          <h1>Sign up</h1>
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
          <div>
            <input
              className="input-user"
              name={"email"}
              value={inputDataOfEmployee.email}
              type={"text"}
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => {
                setInputDataOfEmployee({
                  ...inputDataOfEmployee,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <div>
            <input
              className="input-user"
              value={inputDataOfEmployee.password}
              type={"text"}
              autoComplete="off"
              placeholder="password"
              onChange={(e) => {
                setInputDataOfEmployee({
                  ...inputDataOfEmployee,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <button
            className="login-button"
            onClick={() => {
              dispatch(loginEmployee({ ...loginData }));
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
