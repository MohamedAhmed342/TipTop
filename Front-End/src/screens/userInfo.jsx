
import React from "react";
import "../screens/userInfo.css";
import {FaUser,FaHome ,FaEnvelope ,FaPhone } from "react-icons/fa";

const userInfo = () => {
  

  return (
    <div className="bodyy">
      <div className="user-profile">
        <div className="avatar-container">
          <img
            src="https://placekitten.com/150/150"
            alt="User Avatar"
            className="avatar"
          />
        </div>
        <div className="user-info">
          <div className="info-row">
            <FaUser className="icon" />
            <h2 className="username">John Doe</h2>
          </div>
          <div className="info-row">
            <FaEnvelope className="icon" />
            <p className="email">john.doe@example.com</p>
          </div>
          <div className="info-row">
            <FaHome className="icon" />
            <p className="address">67-momt st</p>
          </div>
          <div className="info-row">
            <FaPhone className="icon" />
            <p className="phone">20 01287123555</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userInfo;
