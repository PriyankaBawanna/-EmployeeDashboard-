import { takeEvery, put } from "redux-saga/effects";
import { REGISTER_EMPLOYEE } from "../../redux/constant";
import { register } from "../../constant-api/api";
import axios from "axios";
function* setEmployeeData({ ...userData }) {
  const body = {
    name: userData.userData.name,
    age: userData.userData.age,
    pincode: userData.userData.pincode,
    email: userData.userData.email,
    role: userData.userData.role,
    password: userData.userData.password,
    gender: userData.userData.gender,
  };
  console.log("Saga Registration ", body);
  try {
    axios
      .post("http://localhost:3005/employeeRegister/register", body)
      .then((res) => {
        alert(res.data.message);
      });
  } catch {}
}
function* setEmployeeDataSaga() {
  yield takeEvery(REGISTER_EMPLOYEE, setEmployeeData);
}
export default setEmployeeDataSaga;
