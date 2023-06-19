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
// import "./App.css";
import AdminProtectedRoute from "./hoc/AdminProtectedRoute";
// import LoginRedirectRoute from "./hoc/LoginRedirectRoute";
import LoginProtectedRoute from "./hoc/LoginProtectedRoute";
import SidebarContextProvider from "./context/SidebarContext";
import Sidebar from "./Components/Tools/Sidebar";
import AddVideo from "./Components/Tools/AddVideo";
import AddDocs from "./Components/Tools/AddDocs";
import Dashboard from "./Components/Dashbaord/Dashboard";
import WatchCourseWhenEnrolled from "./Components/Dashbaord/WatchCourseWhenEnrolled";
import AddUserByAdmin from "./Components/Tools/AddUserByAdmin";

function App() {
  return (
    <>
      <AuthProvider>
        <SidebarContextProvider>
          <Sidebar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contac />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/login"
              element={
                <LoginProtectedRoute>
                  <Login_SignUp />
                </LoginProtectedRoute>
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

            <Route path="/addVideo" element={<AddVideo />} />
            <Route path="/addDocs" element={<AddDocs />} />
            <Route path="/view-content" element={<ViewContent />} />
            <Route path="/watch-course" element={<WatchCourseWhenEnrolled />} />
            <Route path="/add-user" element={<AddUserByAdmin />} />
            {/* <Route path="/tool" element={<AdministratorTools />} /> */}
            {/* <Route path="/tool" element={<SideNavBar />} /> */}
          </Routes>
          <ToastContainer className="toast-message" />
        </SidebarContextProvider>
      </AuthProvider>
    </>
  );
}
export default App;