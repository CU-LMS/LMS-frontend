import { toast } from "react-toastify";
import { handleApiError, handleLoding, handleIsAuth } from "./authSlice";
import axios from "axios";
import http from "../../../hoc/axiosClient"

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
    console.log("response", apiResponse.data);

    if (apiResponse.status === 200) {
      toast.success("Logged In Success", { autoClose: 6000 });
      let localStorageObj = {
        accessToken: apiResponse?.data?.data?.token,
        isAdmin: true,
       
       
      };
      // let authResponse = await http(authConfig);



      localStorage.setItem(
        "cuchd-accessToken",
        JSON.stringify(localStorageObj)
      );
    }
    disaptch(handleLoding("idle"));
    window.location.href = "/tool"
    // disaptch(handleIsAuth(true));
  } catch (err) {
    toast.error("Error While Logging In", { autoClose: 2000 });
  }
};
