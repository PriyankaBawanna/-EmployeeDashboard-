import { LOGIN_EMPLOYEE, LOGIN_FAIL, LOGIN_SUCCESS } from "../redux/constant";

export const loginEmployee = ({ ...loginData }) => {
  console.log(" 2 action employee action is called ");
  return {
    type: LOGIN_EMPLOYEE,
    loginData,
  };
};

export const loginFail = (error) => {
  console.log("3 action Login Error", error);
  return {
    type: LOGIN_FAIL,
    error,
  };
};

export const loginSuccess = (response) => {
  console.log("3 action --Login Success", response);
  return {
    type: LOGIN_SUCCESS,
    response,
  };
};
