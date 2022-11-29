import { LOGIN_EMPLOYEE, LOGIN_FAIL, LOGIN_SUCCESS } from "../redux/constant";
const initialState = { isFetching: false, result: null };
export const employeeLogin = (data = initialState, action) => {
  console.log("Action ", action.type);
  switch (action.type) {
    case LOGIN_EMPLOYEE:
      console.log("4 reducer employee login reducer  ", action);
      return { isFetching: true };
    case LOGIN_SUCCESS:
      console.log(" 4 reducer Login Success ", action.response);
      return { isFetching: false, result: action };
    // return action.response;

    case LOGIN_FAIL:
      console.log(" 4 reducer error Reducer   ", action);
      return { isFetching: false, result: null };

    default:
      //no match case
      return data;
  }
};
