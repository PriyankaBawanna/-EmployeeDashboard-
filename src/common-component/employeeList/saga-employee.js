import { takeEvery, put } from "redux-saga/effects";
import { EMPLOYEE_LIST, SET_EMPLOYEE_LIST } from "../../redux/constant";
function* getEmployeeData() {
  console.log("Api calling");
  let data = yield fetch("http://localhost:8085/getDetails");
  data = yield data.json();
  console.log("Api response ", data);
  yield put({ type: SET_EMPLOYEE_LIST, data });
}
function* employeeSaga() {
  yield takeEvery(EMPLOYEE_LIST, getEmployeeData);
}
export default employeeSaga;
