import axios from "axios";
import React, { useState } from "react";

const ProfileTab = () => {
  let localStorageData = JSON.parse(localStorage.getItem("adminData"));
  const [firstName, setFirstName] = useState(localStorageData.firstName);
  const [middleName, setMiddleName] = useState(localStorageData.middleName);
  const [lastName, setLastName] = useState(localStorageData.lastName);
  const [phoneNumber, setPhoneNumber] = useState(localStorageData.phoneNumber);
  const [phoneCode, setPhoneCode] = useState(localStorageData.phoneCode);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(middleName);

    if (firstName === "" || lastName === "" || phoneNumber === "") {
      alert("Please fill all the fields");
    } else {
      let data = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        userId: localStorageData.userId,
      };
      console.log(data);
    }
  };

  return (
    <div className="profile-right-col col-lg-7">
      <h3 className="profile-right-col-title mb-4">Profile Information</h3>
      <div className="profile-right-col-content">
        <form>
          <div className="profile-section">
            <p className="mb-0">
              <strong>First Name</strong>
            </p>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="form-control"
              value={firstName}
            />
          </div>
          <hr />
          <div className="profile-section">
            <p className="mb-0">
              <strong>Middle Name</strong>
            </p>
            <input
              type="text"
              onChange={(e) => setMiddleName(e.target.value)}
              className="form-control"
              value={middleName}
            />
          </div>
          <hr />
          <div className="profile-section">
            <p className="mb-0">
              <strong>Last Name</strong>
            </p>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <hr />
          <div className="profile-section d-flex">
            <div className="d-flex flex-column phone-code me-2">
              <p className="mb-0">
                <strong>Phone Code</strong>
              </p>
              <input
                type="text"
                maxLength={3}
                onChange={(e) => setPhoneCode(e.target.value)}
                className="form-control"
                placeholder="+91"
                value={phoneCode}
              />
            </div>
            <div className="d-flex flex-column w-100">
              <p className="mb-0">
                <strong>Phone Number</strong>
              </p>
              <input
                type="text"
                maxLength={10}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="form-control"
                value={phoneNumber}
              />
            </div>
          </div>
          <hr />
          <div className="profile-section">
            <p className="mb-0">
              <strong>Email</strong>
            </p>
            <input
              type="text"
              className="form-control-plaintext"
              value={localStorageData.userId}
              readOnly
            />
          </div>
          <div className="profile-section">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={handleOnSubmit}
            >
              Update Profile
            </button>
          </div>
        </form>

        <hr />
      </div>
    </div>
  );
};

export default ProfileTab;
