import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoadingPage from "./LoadingPage";
import http from "./axiosClient";



const StudentProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));

  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const handleAccessVerification = async (credentials) => {
    try {
      let config = {
        method: "get",
         url: `Login/UserValidate?token=${credentials.accessToken}`
      }

      let response = await http(config);
      console.log(response)
      if (response.data.statusCode === 200) {
        if(response.data.data.roleId === 5 ||response.data.data.roleId === 4){
          setIsAuthenticate(true);
        }else{
          console.log("FIRST")
          localStorage.clear("cuchdCsrf")
          window.location.href=("/login");
        }
       
      } else {
        console.log("SECOND")
        window.location.href=("/login");
      }
    } catch (err) {
        window.location.href=("/login");
    }
  };

  useEffect(() => {
    console.log("THIRD")
    if (credentials === undefined || credentials === null) {
      navigate("/login", { replace: true });
    } else {
      handleAccessVerification(credentials);
    }
  }, []);

  return <>{isAuthenticate ? children : <LoadingPage />}</>;
};

export default StudentProtectedRoute;
