
import React from "react";
import "../../components/auth/signin.css";
import {FaUser,FaLock} from "react-icons/fa";
import { useState } from 'react';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const usersData = [
    // This data should come from the Sign-Up process or your server
    { username: 'salah', password: '1234' },
    { username: 'hima', password: '12345' },
    // Add more user data as needed
  ];

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { username: '', password: '' };

    // Validate username
    const user = usersData.find((user) => user.username === formData.username);
    if (!user) {
      updatedErrors.username = 'Username not found';
      isValid = false;
    }

    // Validate password
    if (user && formData.password !== user.password) {
      updatedErrors.password = 'Incorrect password';
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPassword = () => {
    const user = usersData.find((user) => user.username === formData.username);
    if (user) {
      // Implement logic to send a password reset email or show a modal for password recovery
      console.log(`Forgot password for user ${formData.username}.`);
    } else {
      setErrors({ ...errors, username: 'Username not found' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Process the sign-in logic (e.g., redirect, authenticate user)
      console.log('Sign-In successful:', formData);
    } else {
      console.log('Sign-In failed');
    }
  };

  return (
    <div className="bodyy">
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
        <h1>TipTop Store</h1>
        <h4>Login to your account</h4>
        <div className="input-box">
          <input type="text" placeholder="Username" name="username" required value={formData.username} onChange={handleInputChange}/>
          <p className="error">{errors.username}</p>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password"  name="password" required value={formData.password} onChange={handleInputChange}/>
          <p className="error">{errors.password}</p>
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <button className="reset-pass" onClick={handleForgotPassword}>Reset Password</button>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
         <p>Don't have an account ? <a href="./SignUp">Register</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
