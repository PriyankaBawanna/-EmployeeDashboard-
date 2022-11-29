import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddNew from "../admin/add-new";
import AdminHome from "../admin/admin-home";
import EmployeeList from "../common/employee-list/employee-list";
import NewRegistration from "../common/registration-page/new-registration";
import Registration from "../common/registration-page/registration";
import HomePageHr from "../hr-component/home-hr";

import LoginPage from "../login-page/login-page";

import MangerHome from "../managers/manger-home";
import PrivateRoute from "../routes/private-route";
import UpdateEmployee from "../update-employee/update-employee";
import ViewEmployee from "../update-employee/view-employee";

import { useSelector } from "react-redux";
import Protected from "../routes/protected-route";

function Home() {
  const data = useSelector((state) => state.employeeLogin);
  console.log("user login in Index page ", data);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Registration" element={<Registration />} />
          <Route path="/NewRegistration" element={<NewRegistration />} />
          <Route
            path="/private-route"
            element={
              <Protected>
                <AdminHome />
              </Protected>
            }
          />
          <Route
            path="/private-route"
            element={
              <Protected>
                <HomePageHr />
              </Protected>
            }
          />
          <Route
            path="/private-route"
            element={
              <Protected>
                <MangerHome />
              </Protected>
            }
          />

          <Route path="/UpdateEmployee" element={<UpdateEmployee />} />
          <Route path="/ViewEmployee" element={<ViewEmployee />} />
          <Route path="/AddNew" element={<AddNew />} />

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
