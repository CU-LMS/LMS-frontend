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
        url: `http://43.240.66.78:7263/api/Login/UserValidate?token=${credentials.accessToken}`
      }

      let response = await axios(config);
      console.log(response)
      if (response.data.statusCode === 200) {
        if(response.data.data.roleId === 1){
          setIsAuthenticate(true);
        }else{
          localStorage.clear("cuchdCsrf")
          navigate("/login")
        }
       
      } else {
        navigate("/login", { replace: true });
      }
    } catch (err) {
      navigate("/login", { replace: true });
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
