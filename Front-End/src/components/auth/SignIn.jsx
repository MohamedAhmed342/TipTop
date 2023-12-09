
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
    { username: 'gedo', password: '12345' },
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
    <>
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
    
    <footer>
          <div class="footer_main">
            <div class="tag">
              <h1>Contact</h1>
              <a href="#">
                <i class="fa-solid fa-house"></i>123/Colombo/Sri Lanka
              </a>
              <a href="#">
                <i class="fa-solid fa-phone"></i>+94 12 345 6789
              </a>
              <a href="#">
                <i class="fa-solid fa-envelope"></i>contact@gmail.com
              </a>
            </div>

            <div class="tag">
              <h1>Get Help</h1>
              <a href="#" class="center">
                FAQ
              </a>
              <a href="#" class="center">
                Shipping
              </a>
              <a href="#" class="center">
                Returns
              </a>
              <a href="#" class="center">
                Payment Options
              </a>
            </div>

            <div class="tag">
              <h1>Our Stores</h1>
              <a class="center">
                Sri Lanka
              </a>
              <a class="center">
                USA
              </a>
              <a  class="center">
                India
              </a>
              <a  class="center">
                Japan
              </a>
            </div>

            <div class="tag">
              <h1>Follow Us</h1>
              <div class="social_link">
                <a href="#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            
          </div>
        </footer>
  </>
  );
};

export default SignIn;
