import {
  SET_SINGLE_EMPLOYEE_DATA,
  UPDATE_EMPLOYEE_DATA,
} from "../redux/constant";

// export const employeeDataUpdate = (data = [], action) => {
//   switch (action.type) {
//     case UPDATE_EMPLOYEE_DATA:
//       console.log("reducer -  employee Data for Update  ", action.data);
//       return action.data;
//     default:
//       //no case match
//       return data;
//   }
// };

export const employeeDataUpdate = (data = [], action) => {
  switch (action.type) {
    case SET_SINGLE_EMPLOYEE_DATA:
      console.log("single Employee data reducer ", action.dataEmp);
      return action.dataEmp;
    default:
      //no case match
      return data;
  }
};
