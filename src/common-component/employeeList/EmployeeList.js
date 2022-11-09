import React, { useEffect } from "react";
import { empList } from "./action-employee-List";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function EmployeeList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.employeeData);
  console.warn("data in Emp Component ", data);
  useEffect(() => {
    dispatch(empList());
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <div className="emp-list">
        {data.map((item) => (
          <div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default EmployeeList;
