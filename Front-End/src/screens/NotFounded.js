import React from "react";
import "./NotFounded.css";

import logo from "../components/assets/logo.png";
const NotFounded = () => {
  return (
    <div className="not-found-container">
      <img src={logo} alt="Lost astronaut" />

      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you got lost.</p>
    </div>
  );
};

export default NotFounded;
