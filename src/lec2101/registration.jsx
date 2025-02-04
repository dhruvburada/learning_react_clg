import React, { useState } from "react";
import "./style.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    cricketerName: "",
    gender: "",
    email: "",
    matches: [],
    state: "",
    dob: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        matches: checked
          ? [...prev.matches, value]
          : prev.matches.filter((match) => match !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.cricketerName.length < 10) {
      alert("Cricketer Name should be at least 10 characters long.");
      return;
    }

    setSubmittedData(formData);
    setFormData({
      cricketerName: "",
      gender: "",
      email: "",
      matches: [],
      state: "",
      dob: "",
    });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2>Cricketer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Cricketer Name */}
        <div>
          <label htmlFor="cricketerName">Cricketer Name:</label>
          <input
            type="text"
            id="cricketerName"
            name="cricketerName"
            value={formData.cricketerName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Matches Played */}
        <div>
          <label>Types of Matches Played:</label>
          {["ODI", "TEST", "T20", "Domestic"].map((match) => (
            <label key={match}>
              <input
                type="checkbox"
                name="matches"
                value={match}
                checked={formData.matches.includes(match)}
                onChange={handleChange}
              />{" "}
              {match}
            </label>
          ))}
        </div>

        {/* State */}
        <div>
          <label htmlFor="state">State:</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">--Select State--</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Punjab">Punjab</option>
          </select>
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>

      {/* Display Submitted Data */}
      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Registration Details</h3>
          <p><strong>Cricketer Name:</strong> {submittedData.cricketerName}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Matches Played:</strong> {submittedData.matches.join(", ")}</p>
          <p><strong>State:</strong> {submittedData.state}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import RegistrationForm from './lec2101/registration'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <RegistrationForm/>
//   </StrictMode>,
// )
