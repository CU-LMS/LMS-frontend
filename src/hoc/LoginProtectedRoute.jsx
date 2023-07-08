import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import http from "./axiosClient";


const LoginProtectedRoute = ({ children }) => {
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
      console.log(response, "aaaaa")
      if (response.data.statusCode === 200) {
        
        if(response.data.data.roleId === 1 || response.data.data.roleId === 2 || response.data.data.roleId === 3 ){
          navigate("/admin-dashboard", {replace: true})
        }
        if(response.data.data.roleId === 5 || response.data.data.roleId === 4){
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
