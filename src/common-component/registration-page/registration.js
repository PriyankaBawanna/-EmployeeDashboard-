import React, { useEffect, useState } from "react";
import { addEmployeeData } from "./action-registration";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import signUp from "../../image/signUp.jpg";
export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const userData = { name, email, mobileNo };
  const dispatch = useDispatch();
  return (
    <>
      <div className="login">
        <div className="login-component">
          <div className="register-filed">
            <h1>Register</h1>
            <input
              type="text"
              placeholder="name"
              value={name}
              className="input-user"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              value={email}
              className="input-user"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              type="Number"
              placeholder="mobile"
              value={mobileNo}
              className="input-user"
              onChange={(event) => {
                setMobileNo(event.target.value);
              }}
            />

            <button
              className="login-button"
              onClick={() => {
                dispatch(addEmployeeData({ ...userData }));
              }}
            ></button>
          </div>
          <div className="image">
            <img src={signUp} />
            <nav>
              <Link to="/" className="account-create">
                already we have account
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <h1>Registration</h1>
<p>{userData.name}</p>
<input
  type="text"
  placeholder="name"
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
<input
  type="text"
  placeholder="email"
  value={email}
  onChange={(event) => {
    setEmail(event.target.value);
  }}
/>
<input
  type="Number"
  placeholder="mobile"
  value={mobileNo}
  onChange={(event) => {
    setMobileNo(event.target.value);
  }}
/>

<button
  onClick={() => {
    dispatch(addEmployeeData({ ...userData }));
  }}
>
  Add
</button>
<nav>
  <Link to="/">Login </Link>
</nav> */
}
