import { LOGIN_EMPLOYEE, LOGIN_FAIL } from "../redux/constant";

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
