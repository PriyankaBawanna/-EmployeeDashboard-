import React, { useState, useEffect, Navigate } from "react";
import { loginEmployee } from "./action-login";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import signIn from "../image/signIn.jpg";
import { employeeProfile } from "../profile/action-profile";
import { Link, useNavigate } from "react-router-dom";
import { allRoutes, userType } from "../constant/path";

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (inputDataOfEmployee.email) {
      console.log("Email ", inputDataOfEmployee.email);
      dispatch(employeeProfile(inputDataOfEmployee.email));
    }
  }, [inputDataOfEmployee.email]);

  const userProfile = useSelector((state) => state.employeeProfileReducer);

  useEffect(() => {
    setInputDataOfEmployee({
      ...inputDataOfEmployee,
      role: userProfile.role,
    });
  }, [userProfile.role]);

  //const data = useSelector((state) => state.employeeLogin);
  // const result = data.result;

  const result = JSON.parse(localStorage.getItem("userLoginResponse"));

  const role = userProfile.role;

  const isLoggedIn = () => {
    dispatch(loginEmployee({ ...loginData }));
    console.log("Result***--", result);
    switch (role && result) {
      case userType.admin === role && result === true:
        return navigate(allRoutes.adminHome);
      case userType.hr === role && result === true:
        return navigate(allRoutes.hrHome);
      case userType.manager === role && result === true:
        return navigate(allRoutes.mangerHome);
      default:
        return navigate("/");
    }
  };

  return (
    <div className="login">
      <div className="login-component">
        <div className="image">
          <img src={signIn} />
          <nav>
            <Link to="/registration" className="account-create">
              Create an account
            </Link>
          </nav>
        </div>
        <div className="login-filed">
          <h1>Sign up</h1>

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
              type={"Password"}
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
              isLoggedIn();
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
