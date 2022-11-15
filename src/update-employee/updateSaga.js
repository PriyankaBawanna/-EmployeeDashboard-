import { takeEvery, put } from "redux-saga/effects";
import {
  UPDATE_EMPLOYEE_DATA,
  SET_SINGLE_EMPLOYEE_DATA,
} from "../redux/constant";

function* updateEmployeeData(data) {
  const employeeID = data.data;
  console.log("saga - Here update Employee action Will be called ", employeeID);
  let dataEmp = yield fetch(
    `http://localhost:3005/getSingleEmployee/${employeeID}`
  );
  dataEmp = yield dataEmp.json();
  console.log("Api response saga update  ", dataEmp);
  yield put({ type: SET_SINGLE_EMPLOYEE_DATA, dataEmp });
}

function* employeeDataUpdate() {
  yield takeEvery(UPDATE_EMPLOYEE_DATA, updateEmployeeData);
}

export default employeeDataUpdate;
