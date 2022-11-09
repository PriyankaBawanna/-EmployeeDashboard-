import { takeEvery, put } from "redux-saga/effects";
import { REGISTER_EMPLOYEE } from "../../redux/constant";
function* setEmployeeData({ ...userData }) {
  console.log("Post Data API Call Here ", userData);

  const body = { name: userData.userData.name, email: userData.userData.email };
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    yield fetch("http://localhost:8085/register", requestOptions).then(
      (response) => {
        response.json();
        alert("Done");
      }
    );
  } catch {
    alert("error");
  }
}
function* setEmployeeDataSaga() {
  yield takeEvery(REGISTER_EMPLOYEE, setEmployeeData);
}
export default setEmployeeDataSaga;
