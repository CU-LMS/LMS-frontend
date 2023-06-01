import React, { useState, useEffect } from "react";
import "./login_signUp.css";
import { HiMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import Dashboard from "../Dashbaord/Dashboard";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import loginUser from "../../api/login";
import { loginSchema } from "../../helpers/schemaValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export default function Login_SignUp() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [googleAuth, setGoogleAuth] = useState(false);

  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const users = [{ username: "", password: "" }];

  

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit = data => console.log(data);
  // const handleSubmit = (e) => {
  //   e.preventDefault();


  //   const account = users.find((user) => user.username === username);
  //   if (account && account.password === password) {
  //     setauthenticated(true);
  //     localStorage.setItem("authenticated", true);
  //   }
    
  //   console.log(localStorage);
  // };

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
                        {...register("userEmail")}
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        
                      />
                      <p>{errors.userEmail?.message}</p>
                    </div>
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
                        onChange={(e) => setpassword(e.target.value)}
                      />
                      <p>{errors.userPassword?.message}</p>
                    </div>
                    <div className="text">
                      <a href="#">Forgot Password</a>
                    </div>
                    <div className="button input-box">
                      {/* <HiMail classname= "i" /> */}
                      <input
                        type="submit"
                        value="Submit"
                        onClick={handleSubmit(onSubmit)}
                      />

                      {/* GOOGLE AUTHENTICATION */}
                    </div>

                    <div className="line-container">
                      <div className="linehr"></div>
                      <p className="or">OR</p>
                      <div className="linehr"></div>

                    </div>
                   
                    <GoogleLogin
                    // style={{ fontWeight: "600", color:"#477c87", fontSize:"16px" }}
                      className="google-button"
                      clientId={clientId}
                      // buttonText="Continue with Google"
                      onSuccess={onLoginSuccess}
                      onFailure={onLoginFailure}
                      cookiePolicy={"single_host_origin"}
                      isSignedIn={true}
                    ><p className="google-button-text">Continue with Google</p></GoogleLogin>
                     

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
