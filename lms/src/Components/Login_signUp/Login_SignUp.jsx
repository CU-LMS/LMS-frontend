import React, { useState, useEffect } from "react";
import "./login_signUp.css";
import { HiMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import Dashboard from "../Dashbaord/Dashboard";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

export default function Login_SignUp() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [googleAuth, setGoogleAuth] = useState(false);

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const users = [{ username: "", password: "" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
    }
    console.log(localStorage);
  };

  // GOOGLE AUTHENTICATION //

  const clientId =
    "549522418070-9f2edlmcvvuj0guri0hpu2jnd5fnl2vu.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onLoginSuccess = (res) => {
    // console.log("Login Success:", res.profileObj);

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
          ></GoogleLogout>
          <Dashboard />
        </>
      ) : (
        <div className="body">
          <div className="container">
            <input type="checkbox" id="flip" />
            <div className="cover">
              <div className="front">
                <img
                  // style={{ borderRadius: "0 30px 30px 0" }}
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
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                      />
                    </div>
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <HiMail />{" "}
                      </span>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                    <div className="text">
                      <a href="#">Forgot Password</a>
                    </div>
                    <div className="button input-box">
                      {/* <HiMail classname= "i" /> */}
                      <input
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit}
                      />

                      {/* GOOGLE AUTHENTICATION */}
                    </div>
                    or
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Sign In with Google"
                      onSuccess={onLoginSuccess}
                      onFailure={onLoginFailure}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                    />
                    <div className="text login-text">
                      Dont have an account ?{" "}
                      <label htmlFor="flip">SignUp Now</label>{" "}
                    </div>
                  </div>
                </div>
                <div className="signUp-form">
                  <div className="title">Sign Up</div>
                  <div className="input-boxes">
                    <div className="input-box">
                      <span className="i">
                        {" "}
                        <FaUserAlt />{" "}
                      </span>
                      <input
                        type="text"
                        placeholder="Enter your Name"
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
                        <HiMail />{" "}
                      </span>{" "}
                      <input
                        type="text"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="text"></div>
                    <div className="button input-box">
                      {/* <HiMail classname= "i" /> */}
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
