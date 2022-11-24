import { put, takeEvery } from "redux-saga/effects";
import { GET_USER_PROFILE, SET_USER_PROFILE } from "../redux/constant";

function* getEmployeeProfile(email) {
  console.log("APi call Here for user Profile");
  const employeeEmail = email.email;
  console.log("email in profile saga ", email.type, employeeEmail);
  let data = yield fetch(
    `http://localhost:3005/getSingleEmployee/${employeeEmail}`
  );
  data = yield data.json();
  console.log("Api response in profile", data);
  yield put({ type: SET_USER_PROFILE, data });
}
function* employeeProfileData() {
  yield takeEvery(GET_USER_PROFILE, getEmployeeProfile);
}
export default employeeProfileData;
