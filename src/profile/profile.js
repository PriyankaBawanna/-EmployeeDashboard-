import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogOut from "../logout/log-out";
import { employeeProfile } from "./action-profile";
import { FaChevronDown } from "react-icons/fa";
export default function Profile() {
  const data = useSelector((state) => state.employeeProfileReducer);
  console.log("Data in Profile Component ", data);

  const name = data.name;

  const dispatch = useDispatch();
  let email = JSON.parse(localStorage.getItem("userEmail"));
  console.log("email in Profile ", email);
  useEffect(() => {
    dispatch(employeeProfile(email));
  }, []);
  return (
    <>
      <div class="dropdown">
        <div className="heading-name">
          <span>Welcome</span>
          <button class="dropbtn">
            <FaChevronDown />
          </button>
        </div>
        <div className="dropdown-content">
          <div className="name-circle">
            <div className="circle-profile">
              <h2>U</h2>
            </div>
            <b>{name}</b>
            <span>{data.email}</span>
          </div>
          <div className="employee-info">
            <span>Role : {data.role}</span>
            <span>Pincode :{data.pincode}</span>
            <span>Age : {data.age}</span>
            <span>Gender :{data.gender}</span>
          </div>
          <div className="log-out-section">
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
}
