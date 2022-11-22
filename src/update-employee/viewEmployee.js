import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Admin from "../admin/admin";
import HR from "../hr-component/hr";
import Managers from "../managers/managers";

function ViewEmployee() {
  const data = useSelector((state) => state.employeeDataUpdate);
  console.log("data in view component ", data);
  console.log("data in view component", data.name);

  let role = JSON.parse(localStorage.getItem("userDetails"));
  console.log("update component role ", role);
  const navigate = useNavigate();
  const backToHomePage = () => {
    if (role == "Admin") {
      navigate("/AdminHome");
    }
    if (role == "HR") {
      navigate("/HomePageHr");
    }
    if (role == "Manger") {
      navigate("/MangerHome");
    }
  };
  const goToEditPage = () => {
    navigate("/UpdateEmployee");
  };
  return (
    <>
      <div className="view-employee-details">
        <div className="header">
          <div>
            {role == "HR" && (
              <>
                <HR />
              </>
            )}
            {role == "Admin" && (
              <>
                <Admin />
              </>
            )}
            {role == "Manger" && (
              <>
                <Managers />
              </>
            )}
          </div>
        </div>
        <div className="intro-user">
          <h4>{data.name}'s Details</h4>
          <span>You can check the details of {data.name}.....!</span>
        </div>
        <div className="user-info">
          <div>
            <span className="details">Name</span>:
            <span className="data">{data.name}</span>
          </div>
          <div>
            <span className="details">Age</span>:
            <span className="data">{data.age}</span>
          </div>

          <div>
            <span className="details">Email</span>:
            <span className="data">{data.email}</span>
          </div>
          <div>
            <span className="details">Role</span>:
            <span className="data">{data.role}</span>
          </div>
          <div>
            <span className="details">Pincode </span>:
            <span className="data">{data.pincode}</span>
          </div>
        </div>
        <div className="btn-group">
          <button className="login-button" onClick={backToHomePage}>
            Back
          </button>

          {role == "HR" ||
            (role == "Admin" && (
              <>
                <button className="login-button" onClick={goToEditPage}>
                  Edit
                </button>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
export default ViewEmployee;
