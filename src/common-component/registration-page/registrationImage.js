import React from "react";
import signUp from "../../image/signUp.jpg";
import { Link } from "react-router-dom";
function RegistrationImage() {
  return (
    <>
      <div className="image">
        <img src={signUp} />
        <nav>
          <Link to="/" className="account-create">
            already we have account
          </Link>
        </nav>
      </div>
    </>
  );
}
export default RegistrationImage;
