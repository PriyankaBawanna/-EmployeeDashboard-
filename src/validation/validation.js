import {
  regEx,
  noRegEx,
  regExLowerCase,
  regExUpperCase,
  regSymbol,
} from "../constant/path";
export const validationUserData = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "user name is required ";
  } else if (values.name.length < 3) {
    errors.name = "please enter valid name  ";
  }

  if (!values.email) {
    errors.email = "Email is required ";
  } else if (!regEx.test(values.email)) {
    errors.email = "Not a valid Email  ";
  }
  if (!values.password) {
    errors.password = "Password  is required ";
  } else if (!noRegEx(values.password)) {
    errors.password = "One Numeric value should be include ";
  } else if (!regExLowerCase(values.password)) {
    errors.password = "at least one lower case latter should be present ";
  } else if (!regExUpperCase(values.password)) {
    errors.password = "at least one lower case latter should be present ";
  } else if (!regSymbol(values.password)) {
    errors.password = "at least one lower case latter should be present ";
  }
  if (!values.pincode) {
    console.log("Pincode ", values.pincode);
    errors.pincode = "pincode is required ";
  } else if (values.pincode.length === 6) {
    errors.pincode = "pincode length should be equal to 6 digit ";
  }
  return errors;
};
