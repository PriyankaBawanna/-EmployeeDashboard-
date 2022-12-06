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
import { allRoutes, userType } from "../constant/path";

function Home() {
  const data = useSelector((state) => state.employeeLogin);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path={allRoutes.registrationPage} element={<Registration />} />
          <Route
            path={allRoutes.newRegistrationPage}
            element={<NewRegistration />}
          />

          <Route
            path={allRoutes.adminHome}
            element={
              <Protected userRole={[userType.admin]}>
                <AdminHome />
              </Protected>
            }
          />
          <Route
            path={allRoutes.hrHome}
            element={
              <Protected userRole={[userType.hr]}>
                <HomePageHr />
              </Protected>
            }
          />
          <Route
            path={allRoutes.mangerHome}
            element={
              <Protected userRole={[userType.manager]}>
                <MangerHome />
              </Protected>
            }
          />
          <Route
            path={allRoutes.updateEmployeePath}
            element={
              <Protected userRole={[userType.admin, userType.hr]}>
                <UpdateEmployee />
              </Protected>
            }
          />
          <Route
            path={allRoutes.addNewEmployeeDetails}
            element={
              <Protected userRole={[userType.admin]}>
                <AddNew />
              </Protected>
            }
          />

          <Route
            path={allRoutes.viewPresentEmployee}
            element={
              <Protected
                userRole={[userType.admin, userType.hr, userType.manager]}
              >
                <ViewEmployee />
              </Protected>
            }
          />

          <Route path="*" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
