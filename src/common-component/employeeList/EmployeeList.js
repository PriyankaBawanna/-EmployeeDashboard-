import React, { useEffect, useState } from "react";
import { empList } from "./action-employee-List";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AdminHeader from "../../admin-component/admin-header/adminHeader";
import { Link, useNavigate } from "react-router-dom";
import UpdateEmployee from "../../update-employee/updateEmployee";
import { updateEmployee } from "../../update-employee/updateaction";

function EmployeeList() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.employeeData);
  console.warn("data in Emp Component ", data);
  useEffect(() => {
    dispatch(empList());
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <AdminHeader />

      <div>
        <table class="table">
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
            <>
              <tbody>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.pincode}</td>
                  <td>{item.role}</td>
                  <td>{item.gender}</td>

                  <td>
                    <button
                      onClick={() => {
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
                        navigate("/UpdateEmployee");
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
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
                        navigate("/ViewEmployee");
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </div>
    </>
  );
}
export default EmployeeList;
