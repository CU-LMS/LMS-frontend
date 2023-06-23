import { toast } from "react-toastify";
import { handleApiError, handleLoding, handleIsAuth } from "./authSlice";
import axios from "axios";
import http from "../../../hoc/axiosClient";
import { responsiveFontSizes } from "@mui/material";
// import { handleIsAuth } from "./authSlice";
import swal from "sweetalert";

export const manualSignIn = (userEmail, userPassword) => async (disaptch) => {
  try {
    disaptch(handleLoding("loading"));
    let data = {
      userId: userEmail,
      password: userPassword,
    };
    let config = {
      method: "post",
      url: "login/userLogin",
      data,
    };

    let apiResponse = await http(config);
    console.log("response", apiResponse);

    if (apiResponse?.data?.statusCode === 200) {
      let config = {
        method: "get",
       // url: `http://43.240.66.78:7265/api/Login/UserValidate?token=${apiResponse?.data?.data?.token}`
         url: `Login/UserValidate?token=${apiResponse?.data?.data?.token}`
      }
      let response = await http(config);
      console.log(response, "aaaaa")
      if(response.data.statusCode === 200){
        toast.success("Logged In Success", {
          autoClose: "5000",
        });
        let localStorageObj = {
          accessToken: apiResponse?.data?.data?.token,
          isAdmin: true,
          roleId: response.data.data.roleId,
          userId: response.data.data.userId,
          userName: `${response.data.data.firstName} ${response.data.data.lastname}`
        };
        localStorage.setItem(
          "cuchdCsrf",
          JSON.stringify(localStorageObj)
        );
        if(response.data.data.roleId === 1){
          window.location.href = "/tool";
        }
        if(response.data.data.roleId === 5){
          window.location.href = "/dashboard";
        }
      } 
      disaptch(handleLoding("idle"));
      
    } else {
      toast.error("Invalid Login Credentials");
    }
  } catch (err) {
    toast.error("Error While Logging In", { autoClose: 2000 });
  }
};

export const gmailSignUp = (userData) => async (dispatch) => {
  try {
    dispatch(handleLoding("loading"));
    let data = {
      userId: userData.email,
      roleId: 5,
      firstName: userData.givenName,
      middleName: "",
      lastName: "",
      gender: "",
      phoneCode: "91",
      phoneNumber: "",
      password: "Culms@123",
      ipAddress: "89898",
      provider: "g",
      googleId: userData.googleId,
      imageUrl: userData.imageUrl,
    };
    let config = {
      method: "post",
      url: "login/CreateUserPassword",
      data,
    };
    let response = await http(config);
    console.log(response, "RRRRRRRRRRR")
    if( response?.data?.data != null) {
      dispatch(manualSignIn(data.userId, 'Culms@123'));
    }
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};


export const createPassword = (userName, password,otp) => async (dispatch) => {
  try {
    dispatch(handleLoding("loading"));
    let data = {
      userId: userName,
      password: password,
      otp:otp
    };
    let config = {
      method: "post",
      url: "login/CreatePassword",
      data,
    };

    let apiResponse = await http(config);
    console.log("response", apiResponse);

    if(apiResponse.data.data!=null)
      {
        swal({
          title: "Password Created!",
          text: "Password Created Successfully.",
          icon: "success",
          button: "Close",
          
        });

        window.location.href = "/login";
      }
      else
      {
        swal({
          title: "Warning",
          text: apiResponse.data.message,
          icon: "warning",
          button: "Close",
          
        });
      }
      
      dispatch(handleLoding("idle"));      
     
  } catch (err) {
    toast.error("Error While Logging In", { autoClose: 2000 });
    dispatch(handleLoding("idle"));
      
  }
};