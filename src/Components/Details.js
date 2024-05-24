import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const { formData } = location.state || {};

  if (!formData) {
    return <div>No data available</div>;
  }

  return (
    <div className="details">
      <h3>Successful Submission</h3>
      <div>First Name: {formData.firstName}</div>
      <div>Last Name: {formData.lastName}</div>
      <div>Username: {formData.username}</div>
      <div>Email Address: {formData.emailAddress}</div>
      <div>Phone Number: {formData.phoneNo}</div>
      <div>Country: {formData.country}</div>
      <div>City: {formData.city}</div>
      <div>PAN No.: {formData.panNo}</div>
      <div>Aadhar No.: {formData.aadharNo}</div>
    </div>
  );
}

export default Details;
