import { GET_USER_PROFILE } from "../redux/constant";
export const employeeProfile = (email) => {
  console.log("email in profile Action ", email.email);
  return {
    type: GET_USER_PROFILE,
    email,
  };
};
