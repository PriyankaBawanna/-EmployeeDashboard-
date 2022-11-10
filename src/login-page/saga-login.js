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

  switch (user.role) {
    case "HR":
      try {
        const response = yield getRequest(login, user);
        console.log("user response ", response);
        if (response) {
          localStorage.setItem("userDetails", JSON.stringify(user.role));
          localStorage.setItem("userLoginResponse", JSON.stringify(response));
          yield put(loginSuccess(response));
          console.log("Inside the response");
          alert(response);
        } else {
          yield put(loginFail());
        }
      } catch {
        alert("Error");
      }
      break;

    case "Admin":
      console.log("role is Admin");
      break;
    case "Manger":
      console.log("role is Manger ");
      break;
  }
}
function* loginEmployeeSaga() {
  yield takeEvery(LOGIN_EMPLOYEE, loginEmployee);
}
export default loginEmployeeSaga;
