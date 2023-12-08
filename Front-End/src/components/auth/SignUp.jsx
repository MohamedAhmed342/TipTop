
import React from "react";
// import "../../components/auth/SignUp.css";
import {FaUser,FaLock,FaLocationArrow,FaPhone} from "react-icons/fa";
import  { useState } from 'react';


const SignUp = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { name: '', phoneNumber: '', password: '', confirmPassword: '' };

    // Validate name
    const nameRegex = /^[A-Za-z]+$/;
    if (!formData.name.trim() || !nameRegex.test(formData.name)) {
      updatedErrors.name = 'Name must contain only letters';
      isValid = false;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
      updatedErrors.phoneNumber = 'Enter a valid 10-digit phone number';
      isValid = false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!formData.password.trim() || !passwordRegex.test(formData.password)) {
      updatedErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    // Validate confirm password
    if (formData.password !== formData.confirmPassword) {
      updatedErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the form data (e.g., send it to the server)
      console.log('Form is valid:', formData);
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    
    <div className="bodyy">
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
        {/* <h1>TipTop Store</h1> */}
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name"   value={formData.name} onChange={handleInputChange} />
          <p className="error">{errors.name}</p>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="tel" placeholder="Phone Number" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange}/>
          <p className="error">{errors.phoneNumber}</p>
          <FaPhone className="icon"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Address" required/>
          <FaLocationArrow className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" name="password" requiredvalue={formData.password} onChange={handleInputChange}/>

          <p className="error">{errors.password}</p>
          <FaLock className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange}/>
          <p className="error">{errors.confirmPassword}</p>
          <FaLock className="icon"/>
        </div>
        <button type="submit">Sign Up</button>
        <div className="register-link">
         <p>Already have an account ? <a href="./SignIn">Login</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignUp;
