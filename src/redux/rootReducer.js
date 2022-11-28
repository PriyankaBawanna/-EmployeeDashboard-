import { combineReducers } from "redux";

import { employeeData } from "../common/employee-list/reducer-employee-list";
import { setEmployeeData } from "../common/registration-page/reducer-registration";
import { employeeLogin } from "../login-page/reducer-login";
import { employeeDataUpdate } from "../update-employee/update-reducer";
import { employeeProfileReducer } from "../profile/reducer-Profile";
export default combineReducers({
  employeeData,
  setEmployeeData,
  employeeLogin,
  employeeDataUpdate,
  employeeProfileReducer,
});
