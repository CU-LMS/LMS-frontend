import { red } from "@mui/material/colors";
import React, { useState } from "react";

const ChangePasswordTab = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (newPassword != confirmPassword) {
      alert("Passwords do not match. Please check again");
    } else {
      let data = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      console.log(data);
    }
  };
  return (
    <div className="profile-right-col col-lg-10 d-flex">
      <div className="profile-right-col-content w-100">
        <h3 className="profile-right-col-title mb-4">Change Password</h3>
        <p className="mb-0">
        Old Password
        </p>
        <input
          onChange={(e) => setOldPassword(e.target.value)}
          type="password"
          className="form-control"
          value={oldPassword}
        />
        <form className="was-validated">
          <div className="profile-section"></div>
          <hr />
          <div className="profile-section">
            <p className="mb-0">
            New Password
            </p>
            <input
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              type="password"
              required
              maxLength={30}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              value={newPassword}
            />
          </div>
          <hr />
          <div className="profile-section">
            <p className="mb-0">
            Confirm new password
            </p>
            <input
              type="password"
              className="form-control"
              required
              maxLength={30}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <hr />
          <button
            type="button"
            class="btn btn-secondary"
            // onClick={handleOnSubmit}
          >
            Change Password
          </button>
        </form>

        <hr />
      </div>
      <div className="profile-right-col-content w-30 ms-4 d-flex-col ">
        <p className="rules-password mb-3">
          <span className="text-danger ">*</span>
          Rules for password
        </p>
        <ul class="list-group">
          <li class="list-group-item">Use a minimum of 8 characters.</li>
          <li class="list-group-item">
            Include a combination of uppercase and lowercase letters.
          </li>
          <li class="list-group-item">
            Include at least one number (e.g., 0-9).
          </li>
          <li class="list-group-item">
            Include at least one special character (e.g., @, $, %).
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChangePasswordTab;
