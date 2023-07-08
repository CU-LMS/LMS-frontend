import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import "./CreatePassword.css";
import "./CreatePassword.css";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { createPassword } from "../../redux/slices/authentication/authSliceAction";

// const CreatePassword = () => {
export default function CreatePassword() {
  const [username, setUsername] = useState("");
  const [otp, setOTP] = useState("");
  const [errorMsg, setRrrorMsg] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Abhay", data);
    console.log("username", data.userName);
    console.log("Password", data.password);
    console.log("ConfPassword", data.confirmPassword);

    const errorMsg = strCompare(data.password, data.confirmPassword);
    if (errorMsg == "Matched") {
      console.log("sending");
      // dispatch(createPassword(data.userName, data.password, data.otp));
      // cookies.clear();
    }
    console.log("Error Message", errorMsg);
    setRrrorMsg(errorMsg);
  };
  const strCompare = (pass, confpass) => {
    let errMsg = "";
    if (pass !== confpass) {
      errMsg = "Passwords do not match";
    } else {
      errMsg = "Matched";
    }
    return errMsg;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Working", e);
    handleSubmit(onSubmit);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="create-heading">Create Password</h2>
        <form className="was-validated" onSubmit={handleFormSubmit}>
          <label>
            <p>Email</p>
            <input
              className="form-control"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              maxLength={45}
              type="text"
              placeholder="Enter your email"
              required
              {...register("userName")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            <p> Password:</p>
            <input
              className="form-control"
              type="password"
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              required
              minLength={6}
              placeholder="Enter new password"
              {...register("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <p>Confirm Password:</p>
            <input
              className="form-control"
              type="password"
              required
              minLength={6}
              pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              placeholder="Confirm new password"
              {...register("confirmPassword")}
              value={confirmPassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </label>
          <label>
            <p> OTP:</p>
            <input
              className="form-control "
              type="text"
              placeholder="Enter OTP"
              required
              pattern="^\d{6}$"
              maxLength={6}
              {...register("otp")}
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </label>
          <p className="text-danger">{errorMsg}</p>
          <div className="footer-in-modal">
            <button type="submit" className="sure-button">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
