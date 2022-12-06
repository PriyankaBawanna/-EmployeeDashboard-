export const allRoutes = {
  adminHome: "/admin/home",
  hrHome: "/hr/home",
  mangerHome: "/manager/home",
  updateEmployeePath: "/update-employee",
  addNewEmployeeDetails: "/add-employee",
  viewPresentEmployee: "/view-employee",
  registrationPage: "/registration",
  newRegistrationPage: "/new-registration",
};
export const userType = { admin: "Admin", hr: "HR", manager: "Manger" };
export const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
export const noRegEx = /[0-9]/;
export const regExLowerCase = /[a-z]/;
export const regExUpperCase = /[A-Z]/;
export const regSymbol = /[!@#$%^&**()_+?></]/;
