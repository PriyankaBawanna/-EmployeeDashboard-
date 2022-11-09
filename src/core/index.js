import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "../common-component/employeeList/EmployeeList";
import Registration from "../common-component/registration-page/registration";

import LoginPage from "../login-page/loginPage";
function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
