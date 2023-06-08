import { useEffect, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { verifyAccessToken } from "../services/verifyAccessToken";
import LoadingPage from "./LoadingPage";

const LoginRedirectRoute = ({ children }) => {
  //   const location = useLocation();
  const navigate = useNavigate();
  let credentials = JSON.parse(localStorage?.getItem("cuchd-accessToken"));

  const [isNotLoggedIn, setIsNotLoggedIn] = useState(false);

  //   const handleAccessVerification = async (accessToken) => {
  //     try {
  //       let response = await verifyAccessToken(accessToken);
  //       if (response.status === 200) {
  //         setIsAuthenticate(true);
  //       } else {
  //         navigate("/signin", { replace: true });
  //       }
  //     } catch (err) {
  //       navigate("/signin", { replace: true });
  //     }
  //   };

  useEffect(() => {
    if (credentials === undefined || credentials === null) {
      
        setIsNotLoggedIn(true)
    }else{
        if(credentials?.isAdmin){
            navigate("/tool")
        }
    }
  }, []);

  return <>{isNotLoggedIn ? children : <LoadingPage />}</>;
};

export default LoginRedirectRoute;
