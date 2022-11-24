import { EMPLOYEE_LIST, SET_EMPLOYEE_LIST } from "../../redux/constant";
export const employeeData = (data = [], action) => {
  console.log("reducer -list is called ", action);
  switch (action.type) {
    case SET_EMPLOYEE_LIST:
      return [...action.data];
    default:
      //no case match
      return data;
  }
};
