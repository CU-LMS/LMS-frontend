import { useEffect, useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { verifyAccessToken } from "../services/verifyAccessToken";
import LoadingPage from "./LoadingPage";

const AdminProtectedRoute = ({ children }) => {
  //   const location = useLocation();
  const navigate = useNavigate();
  let credentials = JSON.parse(localStorage?.getItem("cuchd-accessToken"));

  const [isAuthenticate, setIsAuthenticate] = useState(false);

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
      navigate("/login", { replace: true });
    } else {
      if (credentials?.isAdmin) {
        setIsAuthenticate(true);
      } else {
        navigate("/login", { replace: true });
      }
    }
  }, []);

  return <>{isAuthenticate ? children : <LoadingPage />}</>;
};

export default AdminProtectedRoute;
