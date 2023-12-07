
import React from "react";
import "../../components/auth/signin.css";
import {FaUser,FaLock} from "react-icons/fa";

const SignIn = () => {
  

  return (
    <div className="bodyy">
    <div className="wrapper">
      <form action="">
        <h1>TipTop Store</h1>
        <h4>Login to your account</h4>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
          <FaUser className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required/>
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <a href="#">Forgot password?</a>
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
