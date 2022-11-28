import React from "react";
import RegistrationImage from "./registration-image";
import NewRegistration from "./new-registration";

export default function Registration() {
  return (
    <>
      <div className="registration">
        <div className="registration-page">
          <div>
            <h1>Registration</h1>
            <NewRegistration registerProp={true} />
          </div>
          <div className="registration-image">
            <RegistrationImage />
          </div>
        </div>
      </div>
    </>
  );
}
