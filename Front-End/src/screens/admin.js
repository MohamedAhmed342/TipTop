
import React from "react";
import {FaCommentDollar,FaShoePrints,FaCodepen,FaPhone} from "react-icons/fa";
import  { useState,useRef } from 'react';


const Admin = () => {
    const [ setAvatarSrc] = useState("https://placekitten.com/150/150");
    const fileInputRef = useRef(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          setAvatarSrc(e.target.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
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
    <>
    <div className="bodyy2" >
    <div className="wrapper"style={{marginTop:"70px"}}>
      <form action="" onSubmit={handleSubmit}>
        <h1>Add Component</h1>
        <div className="input-box">
          <input type="text" name="name" placeholder="Shoes Name"   value={formData.name} onChange={handleInputChange} />
          <p className="error">{errors.name}</p>
          <FaShoePrints className="icon"/>
        </div>
        <div className="input-box">
          <input type="text" name="name" placeholder="Description"   value={formData.name} onChange={handleInputChange} />
          <p className="error">{errors.name}</p>
          <FaCodepen className="icon"/>
        </div>
        <div className="input-box">
          <input type="tel" placeholder="Old Price" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange}/>
          <p className="error">{errors.phoneNumber}</p>
          <FaCommentDollar className="icon"/>
        </div>
        <div className="input-box">
          <input type="tel" placeholder="New Price" name="phoneNumber" required value={formData.phoneNumber} onChange={handleInputChange}/>
          <p className="error">{errors.phoneNumber}</p>
          <FaCommentDollar className="icon"/>
        </div>
        <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button className="avatar-button" style={{marginBottom:"30px"}} onClick={handleButtonClick}>Upload Image</button>
       
        <button type="submit">Add</button>
        
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

export default Admin;
