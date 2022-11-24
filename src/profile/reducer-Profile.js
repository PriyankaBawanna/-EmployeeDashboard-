import { SET_USER_PROFILE } from "../redux/constant";
export const employeeProfileReducer = (data = [], action) => {
  console.log("reducer employee profile ", action);
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...action.data };
    default:
      //no case match
      return data;
  }
};
