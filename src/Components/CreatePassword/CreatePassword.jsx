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
let isSubmit=false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => { 

    const errorMsg = strCompare(data.password, data.confirmPassword);  
     if(isSubmit)
     {
       dispatch(createPassword(data.userName, data.password, data.otp));
     }
    setRrrorMsg(errorMsg);
  };
  const strCompare = (pass, confpass) => {
    let errMsg = "";
    if (pass !== confpass) {
      isSubmit=false;
      errMsg = "Passwords do not match";
    } else {
      isSubmit=true;
      errMsg = "Matched";
    }
    return errMsg;
  };

  

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2 className="create-heading">Create Password</h2>
        <form className="was-validated">
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
              pattern="^\d{4}$"
              maxLength={6}
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
