import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingPage from "./LoadingPage";
import axios from "axios";


const StudentProtectedRoute = ({ children }) => {
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
        if(response.data.data.roleId === 5 ||response.data.data.roleId === 4){
          setIsAuthenticate(true);
        }else{
          localStorage.clear("cuchdCsrf")
          //navigate("/login")
          window.location.href=("/login");
        }
       
      } else {
        window.location.href=("/login");
        //navigate("/login", { replace: true });
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

export default StudentProtectedRoute;
