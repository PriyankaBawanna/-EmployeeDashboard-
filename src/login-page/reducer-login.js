import { LOGIN_EMPLOYEE, LOGIN_FAIL } from "../redux/constant";

export const employeeLogin = (data = [], action) => {
  switch (action.type) {
    case LOGIN_EMPLOYEE:
      console.log("employee login reducer  ", action);
      return [action.data];

    case LOGIN_FAIL:
      console.log("error Reducer   ", action);
      return [action.data];

    default:
      //no match case
      return data;
  }
};
