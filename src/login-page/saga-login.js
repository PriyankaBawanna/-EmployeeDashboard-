import { takeEvery, put } from "redux-saga/effects";
import { LOGIN_EMPLOYEE, LOGIN_FAIL } from "../redux/constant";
import axios from "axios";
import { login } from "../constant-api/api";

function* loginEmployee({ ...loginData }) {
  const user = {
    email: loginData.loginData.email,
    role: loginData.loginData.role,
    password: loginData.loginData.password,
  };

  switch (user.role) {
    case "HR":
      let checkResponse = true;
      try {
        axios.post(login, user).then((res) => {
          let data = res.data;
          console.log("first execute ");
          if (res.data == true) {
            localStorage.setItem("userDetails", JSON.stringify(user));
          } else {
            alert(res.data.message);
          }
        });
      } catch {
        alert("Error");
      }
      if (checkResponse === true) {
        console.log("Second execute ");
        yield put({ type: LOGIN_EMPLOYEE, checkResponse });
      }
      let data = true;
      if (data === true) {
        yield put({ type: LOGIN_EMPLOYEE, data });
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

// try {
//   axios
//     .post("http://localhost:8085/loginUser/userLogin", user)
//     .then((res) => {
//       if (res.data == true) {
//         localStorage.setItem("userDetails", JSON.stringify(user));
//       } else {
//         alert(res.data.message);
//       }
//     });
// } catch {
//   alert("Error");
// }

// let data = true;
// if (data === true) {
//   yield put({ type: LOGIN_EMPLOYEE, data });
// }
