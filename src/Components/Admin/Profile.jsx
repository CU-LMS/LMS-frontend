import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { FaCamera } from "react-icons/fa";
import ProfileTab from "./profile/ProfileTab";
import MessagesTab from "./profile/MessagesTab";
import MyActivityTab from "./profile/MyActivityTab";

import "./Profile.css";
import ChangePasswordTab from "./profile/ChangePasswordTab";

const Profile = () => {
  let localStorageData = JSON.parse(localStorage.getItem("adminData"));

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="profile">
      <div className="profile-header">
        <h3 className="mb-0 text-white">Profile</h3>
      </div>
      <div className="profile-tabs d-flex">
        <div
          className={`profile-tab ${
            activeTab === "profile" ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <p className="mb-0">Profile</p>
        </div>
        <div
          className={`profile-tab ${
            activeTab === "messages" ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab("messages")}
        >
          <p className="mb-0">Messages</p>
        </div>
        <div
          className={`profile-tab ${
            activeTab === "myActivity" ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab("myActivity")}
        >
          <p className="mb-0">My Activity</p>
        </div>
        <div
          className={`profile-tab ${
            activeTab === "changePassword" ? "active-tab" : ""
          }`}
          onClick={() => setActiveTab("changePassword")}
        >
          <p className="mb-0">Change Password</p>
        </div>
      </div>
      <div className="profile-content row p-0">
        <div className="profile-left-col col-lg-2">
          <div className="profile-picture mb-3">
            <RxAvatar className="avatar-icon" />
            <button className="camera-icon-btn">
              <FaCamera className="camera-icon" />
            </button>
          </div>

          <p className="mb-3 profile-name">{localStorageData.firstName}</p>

          <div className="profile-section">
            <p className="mb-0">
              <strong>Username</strong>
            </p>
            <p className="make-ellipses"></p>
          </div>
          <div className="profile-section">
            <p className="mb-0">
              <strong>Email</strong>
            </p>
            <p className="make-ellipses">{localStorageData.lastName}</p>
          </div>
          <div className="profile-section">
            <p className="mb-0">
              <strong>Department</strong>
            </p>
            <p>IDOL</p>
          </div>
        </div>
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "messages" && <MessagesTab />}
        {activeTab === "myActivity" && <MyActivityTab />}
        {activeTab === "changePassword" && <ChangePasswordTab />}
      </div>
    </div>
  );
};

export default Profile;
