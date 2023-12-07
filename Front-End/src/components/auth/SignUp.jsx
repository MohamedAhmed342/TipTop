
import React from "react";
// import "../../components/auth/SignUp.css";
import {FaUser,FaLock,FaLocationArrow,FaPhone} from "react-icons/fa";

const SignUp = () => {
  

  return (
    
    <div className="bodyy">
    <div className="wrapper">
      <form action="">
        {/* <h1>TipTop Store</h1> */}
        <h1>Sign Up</h1>
        <div className="input-box">
          <input type="text" placeholder="Full Name" required/>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="tel" placeholder="Phone Number" required/>
          <FaPhone className="icon"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Address" required/>
          <FaLocationArrow className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
          <FaLock className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required/>
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
