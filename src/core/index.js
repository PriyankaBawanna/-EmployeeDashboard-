import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNew from "../admin/add-new";
import AdminHome from "../admin/admin-home";
import EmployeeList from "../common/employee-list/employee-list";
import NewRegistration from "../common/registration-page/new-registration";
import Registration from "../common/registration-page/registration";
import HomePageHr from "../hr-component/home-hr";

import LoginPage from "../login-page/login-page";
import PrivateRoute from "../login-page/private-route";
import MangerHome from "../managers/manger-home";
import UpdateEmployee from "../update-employee/update-employee";
import ViewEmployee from "../update-employee/view-employee";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/NewRegistration" element={<NewRegistration />} />
          <Route path="/EmployeeList" element={<EmployeeList />} />

          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/UpdateEmployee" element={<UpdateEmployee />} />

          <Route path="/ViewEmployee" element={<ViewEmployee />} />

          <Route path="/AddNew" element={<AddNew />} />
          <Route path="*" element={<LoginPage />} />
          <Route path="/PrivateRoute" element={<PrivateRoute />}>
            <Route path="MangerHome" element={<MangerHome />} />
            <Route path="HomePageHr" element={<HomePageHr />} />
            <Route path="AdminHome" element={<AdminHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
