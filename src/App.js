import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contac from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Login_SignUp from "./Components/Login_signUp/Login_SignUp";
import MiniHeader from "./Components/Tools/MiniHeader";
import { AuthProvider } from "./AuthManagement/AuthContext";
import ViewContent from "./Components/Dashbaord/ViewContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AdminProtectedRoute from "./hoc/AdminProtectedRoute";
import LoginRedirectRoute from "./hoc/LoginRedirectRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contac />} />
          <Route
            path="/login"
            element={
              <LoginRedirectRoute>
                <Login_SignUp />
              </LoginRedirectRoute>
            }
          />
          <Route
            path="/tool"
            element={
              <AdminProtectedRoute>
                <MiniHeader />
              </AdminProtectedRoute>
            }
          />
          <Route path="/view-content" element={<ViewContent />} />
          {/* <Route path="/tool" element={<AdministratorTools />} /> */}
          {/* <Route path="/tool" element={<SideNavBar />} /> */}
        </Routes>
        <ToastContainer  className="toast-message" />
      </AuthProvider>
    </>
  );
}

export default App;
