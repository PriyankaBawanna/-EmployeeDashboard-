import { REGISTER_EMPLOYEE } from "../../redux/constant";

export const addEmployeeData = ({ ...userData }) => {
  console.log("user Data ", userData);
  return {
    type: REGISTER_EMPLOYEE,
    userData,
  };
};
