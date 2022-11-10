import { LOGIN_EMPLOYEE, LOGIN_FAIL, LOGIN_SUCCESS } from "../redux/constant";
const initialState = { isFetching: false, result: null };
export const employeeLogin = (data = initialState, action) => {
  switch (action.type) {
    case LOGIN_EMPLOYEE:
      console.log("employee login reducer  ", action);
      return { isFetching: true };
    case LOGIN_SUCCESS:
      console.log("LOGIN SUCCESS");
      return { isFetching: false, result: action.payload };

    case LOGIN_FAIL:
      console.log("error Reducer   ", action);
      return { isFetching: false, result: null };

    default:
      //no match case
      return data;
  }
};
