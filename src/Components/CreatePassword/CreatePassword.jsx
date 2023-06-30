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
  const [confirmpassword, setConfirmpassword] = useState("");
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

    const errorMsg = strCompare(data.password, data.confirmPassword);
    console.log("ErrorLog", errorMsg);
    setRrrorMsg(errorMsg);
    dispatch(createPassword(data.userName, data.password, data.otp));
    // cookies.clear();
  };
  const strCompare = (pass, confpass) => {
    let errMsg = "";
    if (pass !== confpass) {
      errMsg = "Confirm password is not matched";
    } else {
      errMsg = "";
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="create-heading">Create Password</h2>
        <form action="#">
          <label>
            <p>Username</p>
            <input
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
              type="password"
              required
              {...register("password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            <p>Confirm Password:</p>
            <input
              type="text"
              required
              {...register("confirmPassword")}
              value={confirmpassword}
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </label>
          <label>
           <p> OTP:</p>
            <input
              type="text"
              placeholder="Enter OTP"
              required
              {...register("otp")}
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
            />
          </label>
          <p className="text-danger">{errorMsg}</p>
          <div className="footer-in-modal">

          <button className="sure-button" onClick={handleSubmit(onSubmit)}> Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
