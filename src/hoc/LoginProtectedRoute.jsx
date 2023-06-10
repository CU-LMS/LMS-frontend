import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import axios from "axios";


const LoginProtectedRoute = ({ children }) => {
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
      console.log(response, "aaaaa")
      if (response.data.statusCode === 200) {
        if(response.data.data.roleId === 1){
          navigate("/tool", {replace: true})
        }
        if(response.data.data.roleId === 5){
          navigate("/dashboard", {replace: true})
        }
        
      } else {
        setIsAuthenticate(true);
        localStorage.clear("cuchdCsrf")
      }
    } catch (err) {
      setIsAuthenticate(true);
      localStorage.clear("cuchdCsrf")
    }
  };

  useEffect(() => {
    if (credentials === undefined || credentials === null) {
     setIsAuthenticate(true)
     localStorage.clear("cuchdCsrf")
    } else {
      handleAccessVerification(credentials);
    }
  }, []);

  return <>{isAuthenticate ? children : <LoadingPage />}</>;
};

export default LoginProtectedRoute;
