import {
  SET_SINGLE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
} from "../redux/constant";
export const updateEmployee = (data) => {
  console.log("action- update Employee ", data);
  return {
    type: UPDATE_EMPLOYEE_DATA,
    data: data,
  };
};

export const updateEmployeeData = ({ ...userData }) => {
  console.log("update action ", userData);
  return {
    type: SET_SINGLE_EMPLOYEE_DATA,
    userData,
  };
};
