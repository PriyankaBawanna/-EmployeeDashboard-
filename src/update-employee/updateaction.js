import {
  SET_SINGLE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
} from "../redux/constant";
export const updateEmployee = (data) => {
  console.log("action- update Employee ", data, data.name);
  return {
    type: UPDATE_EMPLOYEE_DATA,
    data: data,
  };
};

export const setSingleEmployeeData = () => {
  return {
    type: SET_SINGLE_EMPLOYEE_DATA,
  };
};
