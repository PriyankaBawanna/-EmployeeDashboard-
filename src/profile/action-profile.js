import { GET_USER_PROFILE, SET_USER_PROFILE } from "../redux/constant";
export const employeeProfile = (email) => {
  console.log("email in profile Action ", email);
  return {
    type: GET_USER_PROFILE,
    email,
  };
};

// export const userProfile = () => {
//   return {
//     type: SET_USER_PROFILE,
//   };
// };
