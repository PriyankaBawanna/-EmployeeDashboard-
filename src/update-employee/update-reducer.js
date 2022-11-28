import {
  SET_SINGLE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
} from "../redux/constant";

export const employeeDataUpdate = (data = [], action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE_DATA:
      console.log("reducer -  employee Data for Update  ", action.data);
      return action.data;

    // case SET_SINGLE_EMPLOYEE_DATA:
    //   console.log("reducer - update data");
    //   return [...action.data, data];
    default:
      return data;
  }
};
