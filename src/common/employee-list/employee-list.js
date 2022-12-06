import React, { useEffect, useState } from "react";
import { empList } from "./action-employee-List";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateEmployee } from "../../update-employee/update-action";
import { RiBallPenLine } from "react-icons/ri";
import { SlEye } from "react-icons/sl";
import Welcome from "./welcome";

function EmployeeList(prop) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.employeeData);
  console.warn("data in Emp Component ", data);
  useEffect(() => {
    dispatch(empList());
  }, []);

  const navigate = useNavigate();

  const role = useSelector((state) => state.employeeProfileReducer);
  const emp = role.role;
  console.log("Data in Profile Component ", emp);

  const dispatchInfo = (item) => {
    dispatch(
      updateEmployee({
        id: item._id,
        name: item.name,
        age: item.age,
        email: item.email,
        pincode: item.pincode,
        role: item.role,
        gender: item.gender,
      })
    );
  };

  const viewOperation = () => {
    navigate("/view-employee");
  };

  const updateOperation = () => {
    navigate("/update-employee");
  };

  return (
    <div className="employee-list">
      <div className="employee-welcome">
        <Welcome />
      </div>
      <div className="employee-table">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name </th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Pincode</th>
              <th scope="col">Role</th>

              <th scope="col">Gender</th>
              <th> Operation </th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody>
              <tr>
                <td data-label="Name">{item.name}</td>
                <td data-label="Email"> {item.email}</td>
                <td data-label="Age">{item.age}</td>
                <td data-label="Pincode">{item.pincode}</td>
                <td data-label="Role">{item.role}</td>
                <td data-label="Gender">{item.gender}</td>
                <td data-label="Operation">
                  <button
                    className="operation-button"
                    onClick={() => {
                      viewOperation(item);
                      dispatchInfo(item);
                    }}
                  >
                    <SlEye />
                  </button>

                  {emp === "Manger" ? (
                    <></>
                  ) : (
                    <button
                      className="operation-button"
                      onClick={() => {
                        updateOperation(item);
                        dispatchInfo(item);
                      }}
                    >
                      <RiBallPenLine />
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
export default EmployeeList;
