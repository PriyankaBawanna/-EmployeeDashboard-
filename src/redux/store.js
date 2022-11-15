import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import employeeSaga from "../common-component/employeeList/saga-employee";
import setEmployeeData from "../common-component/registration-page/saga-register";
import createSagaMiddleware from "redux-saga";
import loginEmployeeSaga from "../login-page/saga-login";
import employeeDataUpdate from "../update-employee/updateSaga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(employeeSaga);
sagaMiddleware.run(setEmployeeData);
sagaMiddleware.run(loginEmployeeSaga);
sagaMiddleware.run(employeeDataUpdate);
export default store;
