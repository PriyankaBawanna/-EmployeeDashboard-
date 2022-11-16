import { takeEvery, put } from "redux-saga/effects";
import { SET_SINGLE_EMPLOYEE_DATA } from "../redux/constant";
import { userData } from "../redux/reducer";
import axios from "axios";
function* updateData({ ...userData }) {
  const body = {
    id: userData.userData.id,
    name: userData.userData.name,
    age: userData.userData.age,
    pincode: userData.userData.pincode,
    email: userData.userData.email,
    role: userData.userData.role,
    password: userData.userData.password,
    gender: userData.userData.gender,
  };

  let userID = body.id;

  axios
    .put(
      `http://localhost:3005/employeeRegister/employeeUpdate/${userID}`,
      body
    )
    .then((res) => {
      alert(res.data.message);
    });
  alert("called");
}

function* updateEmployeeInformation() {
  yield takeEvery(SET_SINGLE_EMPLOYEE_DATA, updateData);
}
export default updateEmployeeInformation;
