// import { Link, useNavigate } from "react-router-dom";

// export const handleLogin = () => {
//   let role = JSON.parse(localStorage.getItem("userDetails"));
//   let userLoginResponse = JSON.parse(localStorage.getItem("userLoginResponse"));
//   if (userLoginResponse && role == "Manger") {
//     clearStorage();
//     navigate("/MangerHome");
//   }
//   if (userLoginResponse && role == "HR") {
//     clearStorage();
//     navigate("/HomePageHr");
//   }
//   if (userLoginResponse && role == "Admin") {
//     clearStorage();
//     navigate("/AdminHome");
//   }
//   const clearStorage = () => {
//     setTimeout(function () {
//       //let setDetails = localStorage.setItem("userDetails", JSON.stringify(""));
//       let setRole = localStorage.setItem(
//         "userLoginResponse",
//         JSON.stringify(false)
//       );
//       console.log("clear Storage", setRole);
//     }, 5000);
//   };
// };
