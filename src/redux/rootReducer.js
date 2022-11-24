import { combineReducers } from "redux";
import { userData } from "./reducer";
import { employeeData } from "../common-component/employeeList/reducer-employee-list";
import { setEmployeeData } from "../common-component/registration-page/reducer-registration";
import { employeeLogin } from "../login-page/reducer-login";
import { employeeDataUpdate } from "../update-employee/updateReducer";
import { employeeProfileReducer } from "../profile/reducer-Profile";
export default combineReducers({
  userData,
  employeeData,
  setEmployeeData,
  employeeLogin,
  employeeDataUpdate,
  employeeProfileReducer,
});
