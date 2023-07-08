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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { gmailSignUp } from "../../redux/slices/authentication/authSliceAction";
import { manualSignIn } from "../../redux/slices/authentication/authSliceAction";
import frontImage from "../../asset/loginpage.jpeg";
import frontImage2 from "../../asset/frontPageCU.jpeg";
import frontImage3 from "../../asset/frontPageCU3.jpg";
import building from "../../asset/Building.png";
import LoadingPage from "../../hoc/LoadingPage";
import Modal from "react-modal";
import "./login_signUp.css";

export default function LoginSignUp() {
  const [user, setUser] = useState({});
  const isAuth = useSelector((state) => state.authenticationState.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [googleAuth, setGoogleAuth] = useState(false);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const addUserLoading = useSelector(
    (state) => state?.courseState?.addUserLoading
  );

  const loadingApi = useSelector((state) => state?.courseState?.lodingApi);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuth === true) {
      navigate("/view-content");
    }
  }, [isAuth]);

  const onSubmit = (data) => {
    console.log("dddddddddddddd", data);
    dispatch(manualSignIn(data.userEmail, data.userPassword));
    // cookies.clear();
  };

  const users = [{ username: "", password: "" }];

  const clientId =
    // "549522418070-9f2edlmcvvuj0guri0hpu2jnd5fnl2vu.apps.googleusercontent.com";
    "1094053124167-fr69k3addid69dikrvnreleq1es47u9j.apps.googleusercontent.com";

  const onLoginSuccess = (res) => {
    dispatch(gmailSignUp(res.profileObj));
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
            render={(renderProps) => (
              <button
                className="action_btn_2"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{ cursor: "pointer" }}
              >
                Sign out
              </button>
            )}
          />

          <Dashboard />
        </>
      ) : (
        <div className="body">
          <div className="containerLogin">
            <input type="checkbox" id="flip" />
            <div className="cover">
              <div className="front">
                <img
                  className="frontImg"
                  id="frontImg"
                  src={building}
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
                    <div className="buttonSubmit">
                      <button
                        className="buttonsubmithandle"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Submit
                      </button>
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

                    >
                      <p className="google-button-text">Continue with Google</p>
                    </GoogleLogin>

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
      <Modal
        isOpen={loadingApi === "loading" ? true : false}
    
        shouldCloseOnOverlayClick={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "90vh",
            overflow: "auto",
            backgroundColor: "transparent",
            borderRadius: "13px",
            border: "none",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
      
        <LoadingPage />
      </Modal>
    </>
  );
}
