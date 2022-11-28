import { REGISTER_EMPLOYEE } from "../../redux/constant";
export const setEmployeeData = (data = [], action) => {
  switch (action.type) {
    case REGISTER_EMPLOYEE:
      console.log("case - employee register ", action);
      return [action.data];
    default:
      //no case match
      return data;
  }
};
