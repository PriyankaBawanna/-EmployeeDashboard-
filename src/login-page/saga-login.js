import { takeEvery, put } from "redux-saga/effects";
import { LOGIN_EMPLOYEE, LOGIN_FAIL } from "../redux/constant";
import axios from "axios";
import { login } from "../constant-api/api";
import { type } from "@testing-library/user-event/dist/type";
import { loginFail, loginSuccess } from "./action-login";
import { getRequest } from "../services/http";

function* loginEmployee({ ...loginData }) {
  const user = {
    email: loginData.loginData.email,
    role: loginData.loginData.role,
    password: loginData.loginData.password,
  };

  try {
    const response = yield getRequest(login, user);
    console.log("user response ", response);
    if (response === true) {
      localStorage.setItem("userDetails", JSON.stringify(user.role));
      localStorage.setItem("userEmail", JSON.stringify(user.email));
      localStorage.setItem("userLoginResponse", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      alert("check your credentials");
      yield put(loginFail());
    }
  } catch {
    alert("Error");
  }
}
function* loginEmployeeSaga() {
  yield takeEvery(LOGIN_EMPLOYEE, loginEmployee);
}
export default loginEmployeeSaga;
