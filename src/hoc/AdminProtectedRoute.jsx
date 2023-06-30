import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingPage from "./LoadingPage";
import axios from "axios";


const AdminProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));

  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const handleAccessVerification = async (credentials) => {
    try {
      let config = {
        method: "get",
    
        url: `http://43.240.66.78:7265/api/Login/UserValidate?token=${credentials.accessToken}`
         //url: `Login/UserValidate?token=${credentials.accessToken}`
      }

      let response = await axios(config);
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
    } catch (err) {
      window.location.href=("/login");
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
