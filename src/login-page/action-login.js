import { LOGIN_EMPLOYEE, LOGIN_FAIL, LOGIN_SUCCESS } from "../redux/constant";

export const loginEmployee = ({ ...loginData }) => {
  console.log("employee action is called ");
  return {
    type: LOGIN_EMPLOYEE,
    loginData,
  };
};

export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL,
    error,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};
