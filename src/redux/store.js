import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import employeeSaga from "../common/employee-list/saga-employee";
import setEmployeeData from "../common/registration-page/saga-register";
import createSagaMiddleware from "redux-saga";
import loginEmployeeSaga from "../login-page/saga-login";
import updateEmployeeInformation from "../update-employee/update-saga";
import employeeProfileData from "../profile/saga-profile";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(employeeSaga);
sagaMiddleware.run(setEmployeeData);
sagaMiddleware.run(loginEmployeeSaga);
sagaMiddleware.run(updateEmployeeInformation);
sagaMiddleware.run(employeeProfileData);
export default store;
