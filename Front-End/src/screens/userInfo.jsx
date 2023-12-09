import React, { useState, useRef } from "react";
import "../screens/userInfo.css";
import { FaUser, FaHome, FaEnvelope, FaPhone } from "react-icons/fa";

const UserInfo = () => {
  const [avatarSrc, setAvatarSrc] = useState("https://placekitten.com/150/150");
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

  return (
    <div className="bodyy">
      <div className="user-profile">
        <div className="avatar-container">
          <img
            src={avatarSrc}
            alt="User Avatar"
            className="avatar"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            ref={fileInputRef}
          />
          <button className="avatar-button" onClick={handleButtonClick}>Select Avatar</button>
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

export default UserInfo;
