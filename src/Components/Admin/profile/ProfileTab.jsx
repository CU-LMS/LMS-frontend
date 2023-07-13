import React, { useState } from "react";

const ProfileTab = () => {
  let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneCode, setPhoneCode] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "" || phoneNumber === "") {
      alert("Please fill all the fields");
    } else {
      let data = {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phoneNumber: phoneNumber,
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
            <p className="mb-0">First Name</p>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Edit First Name"
              className="form-control"
              value={firstName}
            />
          </div>
          <hr />
          <div className="profile-section">
            <p className="mb-0">Middle Name</p>
            <input
              type="text"
              onChange={(e) => setMiddleName(e.target.value)}
              className="form-control"
              placeholder="Edit Middle Name"
              value={middleName}
            />
          </div>
          <hr />
          <div className="profile-section">
            <p className="mb-0">Last Name</p>
            <input
              type="text"
              placeholder="Edit Last Name"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <hr />
          <div className="profile-section d-flex">
            <div className="d-flex flex-column phone-code me-2">
              <p className="mb-0">Phone Code</p>
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
              <p className="mb-0">Phone Number</p>
              <input
                type="text"
                maxLength={10}
                placeholder="Edit Phone Number"
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
              placeholder="Cannot be changed"
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
