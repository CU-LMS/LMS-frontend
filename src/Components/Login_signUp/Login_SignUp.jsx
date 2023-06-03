
import React, { useState, useEffect } from "react";
import { HiMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import Dashboard from "../Dashbaord/Dashboard";
import loginUser from "../../api/login";
import { loginSchema } from "../../helpers/schemaValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login_signUp.css";

export default function LoginSignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [googleAuth, setGoogleAuth] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => console.log(data);
  const onSubmit2 = (data) => console.log(data);

  const users = [{ username: "", password: "" }];

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const clientId =
    "549522418070-9f2edlmcvvuj0guri0hpu2jnd5fnl2vu.apps.googleusercontent.com";

  const onLoginSuccess = (res) => {
    console.log("Login Success:", res);
    console.log("Login Success:", res.profileObj.name);

    setGoogleAuth(true);
    localStorage.setItem("profile", JSON.stringify(res.profileObj));
    localStorage.setItem("accessToken", JSON.stringify(res.accessToken));
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const logoutSuccess = () => {
    setGoogleAuth(false);
    localStorage.clear();
  };

  return (
    <>
      {authenticated || googleAuth ? (
        <>
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={logoutSuccess}
            // render={(renderProps) => (
            //   <button
            //     className="google-logout"
            //     onClick={renderProps.onClick}
            //     disabled={renderProps.disabled}
            //     style={{ cursor: "pointer" }}
            //   >
            //     Sign out
            //   </button>
            // )}
          />
          <Dashboard />
        </>
      ) : (
        <div className="body">
          <div className="container">
            <input type="checkbox" id="flip" />
            <div className="cover">
              <div className="front">
                <img
                  className="frontImg"
                  id="frontImg"
                  src="https://images.shiksha.com/mediadata/images/1642580468phpQDgPNe.jpeg"
                  alt=""
                />
              </div>
              <div className="back">
                <img
                  className="backImg"
                  id="backImg"
                  src="https://cucet.cuchd.in/cucet-assets/img/loader.png"
                  alt=""
                />
              </div>
            </div>
            <form action="#">
              <div className="form-content">
                <div className="login-form">
                  <div className="title">Login</div>
                  <div className="input-boxes">
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <HiMail />{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                        {...register("userEmail")}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <p className="error-message">{errors.userEmail?.message}</p>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <MdPassword />{" "}
                      </span>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        {...register("userPassword")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <p className="error-message">
                      {errors.userPassword?.message}
                    </p>
                    <div className="text">
                      <a href="#">Forgot Password</a>
                    </div>
                    <div className="button input-box">
                      <input
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit(onSubmit)}
                      />
                    </div>

                    <div className="line-container">
                      <div className="linehr"></div>
                      <p className="or">OR</p>
                      <div className="linehr"></div>
                    </div>

                    <GoogleLogin
                      className="google-button"
                      clientId={clientId}
                      onSuccess={onLoginSuccess}
                      onFailure={onLoginFailure}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                    >
                      <p className="google-button-text">Continue with Google</p>
                    </GoogleLogin>
                    {/* //for signup button is here  */}
                    {/* <div className="text login-text">
                      Dont have an account ?{" "}
                      <label htmlFor="flip">SignUp Now</label>{" "}
                    </div> */}
                  </div>
                </div>
                <div className="signUp-form">
                  <div className="title">Sign Up</div>
                  <div className="input-boxes">
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <FaUserAlt size={12} />{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <HiMail />{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <MdPassword />{" "}
                      </span>{" "}
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="text"></div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                  </div>

                  <div className="text signUp-text">
                    Already have an account ?{" "}
                    <label htmlFor="flip">Login Now</label>{" "}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
