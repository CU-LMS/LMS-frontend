import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLoding } from "../redux/slices/Common/dashboardSlice";
import LoadingPage from "./LoadingPage";
import { useDispatch } from "react-redux";
import http from "./axiosClient"


const AdminProtectedRoute = ({ children }) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));

  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const handleAccessVerification = async (credentials) => {
    try {
      dispatch(handleLoding("loading"));
      let config = {
        method: "get",
         url: `Login/UserValidate?token=${credentials.accessToken}`
      }

      let response = await http(config);
      console.log(response)
      if (response.data.statusCode === 200) {
        if(response.data.data.roleId === 1 || response.data.data.roleId === 2 || response.data.data.roleId === 3){
          setIsAuthenticate(true);
        }else{
          localStorage.clear("cuchdCsrf")
          window.location.href=("/login");
          //navigate("/login")
        }
       
      } else {
        //navigate("/login", { replace: true });
        window.location.href=("/login");
      }
      dispatch(handleLoding("idle"));
    } catch (err) {
      window.location.href=("/login");
      dispatch(handleLoding("idle"));
      //navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    if (credentials === undefined || credentials === null) {
      navigate("/login", { replace: true });
    } else {
      handleAccessVerification(credentials);
    }
  }, []);

  return <>{isAuthenticate ? children : <LoadingPage />}</>;
};

export default AdminProtectedRoute;
