import React, { useState } from "react";

const RegistrationForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(""); // Correct errors state declaration

  // Destructure formData for easier access
  const { username, email, password } = formData;

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setErrors("Username is required!"); // Set errors message
      } else if (!email) {
        setErrors("Email is required!"); // Set errors message
      }
      else if (!password) {
        setErrors("Password is required!"); // Set errors message
      }
      return;
    }
    setErrors(""); // Clear errorss on successful submission
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      {errors && <p style={{ color: "red" }}>{errors}</p>}{" "}
      {/* Display error message */}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
