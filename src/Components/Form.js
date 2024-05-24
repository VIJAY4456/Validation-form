import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const emailValidator =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phoneValidator =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const panValidator = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadharValidator = /^\d{12}$/;

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailAddress: "",
    password: "",
    passwordConfirmation: "",
    phoneNo: "",
    country: "",
    city: "",
    panNo: "",
    aadharNo: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formFields = [
      "firstName",
      "lastName",
      "username",
      "emailAddress",
      "password",
      "passwordConfirmation",
      "phoneNo",
      "country",
      "city",
      "panNo",
      "aadharNo",
    ];
    let isValid = true;
    formFields.forEach((field) => {
      isValid = validateField(field) && isValid;
    });
// here doing navigation if details are valid
    if (isValid) {
      navigate("/details", { state: { formData } });
    }
  };

  const validateField = (name) => {
    let isValid = false;
    let error = "";

    switch (name) {
      case "firstName":
        isValid = formData.firstName.trim() !== "";
        error = isValid ? "" : "First Name is required";
        break;
      case "lastName":
        isValid = formData.lastName.trim() !== "";
        error = isValid ? "" : "Last Name is required";
        break;
      case "username":
        isValid = formData.username.trim() !== "";
        error = isValid ? "" : "Username is required";
        break;
      case "emailAddress":
        isValid =
          formData.emailAddress.trim() !== "" &&
          emailValidator.test(formData.emailAddress);
        error = isValid ? "" : "Email is not valid";
        break;
      case "password":
        isValid =
          formData.password.trim() !== "" &&
          passwordValidator.test(formData.password);
        error = isValid
          ? ""
          : "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
        break;
      case "passwordConfirmation":
        isValid = formData.password === formData.passwordConfirmation;
        error = isValid ? "" : "Password does not match Confirmation";
        break;
      case "phoneNo":
        isValid =
          formData.phoneNo.trim() !== "" &&
          phoneValidator.test(formData.phoneNo);
        error = isValid ? "" : "Phone Number is not valid";
        break;
      case "country":
        isValid = formData.country.trim() !== "";
        error = isValid ? "" : "Country is required";
        break;
      case "city":
        isValid = formData.city.trim() !== "";
        error = isValid ? "" : "City is required";
        break;
      case "panNo":
        isValid =
          formData.panNo.trim() !== "" && panValidator.test(formData.panNo);
        error = isValid ? "" : "PAN No. is not valid";
        break;
      case "aadharNo":
        isValid =
          formData.aadharNo.trim() !== "" &&
          aadharValidator.test(formData.aadharNo);
        error = isValid ? "" : "Aadhar No. is not valid";
        break;
      default:
        break;
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return isValid;
  };

  return (
    <div className="main">
      <h3> Forms and Form Validation</h3>
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.firstName && (
            <div className="errorMsg">{formErrors.firstName}</div>
          )}
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.lastName && (
            <div className="errorMsg">{formErrors.lastName}</div>
          )}
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.username && (
            <div className="errorMsg">{formErrors.username}</div>
          )}
          <input
            type="email"
            placeholder="Email Address"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.emailAddress && (
            <div className="errorMsg">{formErrors.emailAddress}</div>
          )}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.password && (
            <div className="errorMsg">{formErrors.password}</div>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirmation"
            value={formData.passwordConfirmation}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.passwordConfirmation && (
            <div className="errorMsg">{formErrors.passwordConfirmation}</div>
          )}
          <input
            type="text"
            placeholder="Phone No."
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.phoneNo && (
            <div className="errorMsg">{formErrors.phoneNo}</div>
          )}
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          <br />
          {formErrors.country && (
            <div className="errorMsg">{formErrors.country}</div>
          )}
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="New York">New York</option>
            <option value="Toronto">Toronto</option>
          </select>
          <br />
          {formErrors.city && <div className="errorMsg">{formErrors.city}</div>}
          <input
            type="text"
            placeholder="PAN No."
            name="panNo"
            value={formData.panNo}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.panNo && (
            <div className="errorMsg">{formErrors.panNo}</div>
          )}
          <input
            type="text"
            placeholder="Aadhar No."
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
          />
          <br />
          {formErrors.aadharNo && (
            <div className="errorMsg">{formErrors.aadharNo}</div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
