import { Link, useLocation } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "../admin-component/admin";
import AdminHome from "../admin-component/adminHome";
import EmployeeList from "../common-component/employeeList/EmployeeList";
import NewRegistration from "../common-component/registration-page/newRegistration";
import Registration from "../common-component/registration-page/registration";

import HomePageHr from "../hr-component/homeHr";

import LoginPage from "../login-page/loginPage";
import Managers from "../managers/managers";
import MangerHome from "../managers/MangerHome";
import UpdateEmployee from "../update-employee/updateEmployee";
import ViewEmployee from "../update-employee/viewEmployee";
function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/NewRegistration" element={<NewRegistration />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/HomePageHr" element={<HomePageHr />} />
          <Route path="/AdminHome" element={<AdminHome />} />

          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/UpdateEmployee" element={<UpdateEmployee />} />
          <Route path="/ViewEmployee" element={<ViewEmployee />} />
          <Route path="/MangerHome" element={<MangerHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
