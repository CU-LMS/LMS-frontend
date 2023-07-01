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
// import CreatePassword from "./Components/CreatePassword";
import CreatePassword from "./Components/CreatePassword/CreatePassword";
import FAQs from "./Components/FAQs/FAQs";
import StudentSidebar from "./Components/Student/Sidebar";
import StudentHeader from "./Components/Student/Header";
import StudentFooter from "./Components/Student/Footer";
import { useEffect, useState } from "react";
import AdminHeader from "./Components/Admin/Header";
import AdminFooter from "./Components/Admin/Footer";
import AdminSidebar from "./Components/Admin/Sidebar";
import MyCourse from "./Components/Student/MyCourse";
import StudentProtectedRoute from "./hoc/StudentProtectRoute";
import CreateAnnouncement from "./Components/Admin/Announcement/CreateAnnouncement";
import AnnouncementTemplate from "./Components/Admin/Announcement/AnnouncementTemplate";
import EnrolledCourseContent from "./Components/Student/EnrollCourseView/EnrolledCourseContent";
import AdminDashBoard from "./Components/Admin/AdminDashBoard/AdminDashBoard";
import Profile from "./Components/Admin/Profile";
import AddUser from "./Components/Admin/Announcement/AddUserByAdmin/AddUser";
import { Helmet } from "react-helmet";

function App() {
  let userData = JSON.parse(localStorage.getItem("userData"));

  let adminData = JSON.parse(localStorage.getItem("adminData"));
  console.log("Abhayjjjjjjjj", adminData);
  const path = window.location.pathname;
  let roleId = 0;
  roleId = userData == null ? 0 : userData.roleId;
  if (path == "/" || path == "/login") {
    roleId = 0;
  }

  let adminRoleId = 0;
  adminRoleId = adminData == null ? 0 : adminData.roleId;
  if (path == "/" || path == "/login") {
    adminRoleId = 0;
  }

  console.log("userd data  iioioi", userData);

  const [isSidebar, setIsSidebar] = useState(false);

  useEffect(() => {
    if (isSidebar) {
      document.body.classList.add("sidebar-open-body");
    } else {
      document.body.classList.remove("sidebar-open-body");
    }
  }, [isSidebar]);

  return (
    <>
     
      <AuthProvider>
        <SidebarContextProvider>
          {roleId == 5 || roleId == 4 ? (
            <>
              <StudentHeader
                setIsSidebar={setIsSidebar}
                isSidebar={isSidebar}
              />
              <StudentSidebar
                setIsSidebar={setIsSidebar}
                isSidebar={isSidebar}
              />
            </>
          ) : adminRoleId == 1 || adminRoleId == 2 || adminRoleId == 3 ? (
            <>
              <AdminHeader setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
              <AdminSidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
            </>
          ) : (
            <Navbar />
          )}

          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contac />} />

            {/* Student Route */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/mycourses" element={<MyCourse />} /> */}
            <Route
              path="/enrolled-course-content"
              element={<EnrolledCourseContent />}
            />
            <Route
              path="/login"
              element={
                <LoginProtectedRoute>
                  <Login_SignUp />
                </LoginProtectedRoute>
              }
            />

            {/* Start Student Route */}

            <Route
              path="/dashboard"
              element={
                <StudentProtectedRoute>
                  <Dashboard />
                </StudentProtectedRoute>
              }
            />
            <Route
              path="/view-announcement"
              element={
                <StudentProtectedRoute>
                  <AnnouncementTemplate />
                </StudentProtectedRoute>
              }
            />

            <Route
              path="/mycourses"
              element={
                <StudentProtectedRoute>
                  <MyCourse />
                </StudentProtectedRoute>
              }
            />

            {/*start admin route */}

            <Route
              path="/tool"
              element={
                <AdminProtectedRoute>
                  <MiniHeader />
                </AdminProtectedRoute>
              }
            />

            <Route
              path="/create-user"
              element={
                <AdminProtectedRoute>
                  <AddUser />
                </AdminProtectedRoute>
              }
            />

            <Route
              path="/create-announcement"
              element={
                <AdminProtectedRoute>
                  <CreateAnnouncement />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin-dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashBoard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <AdminProtectedRoute>
                  {" "}
                  <Profile />{" "}
                </AdminProtectedRoute>
              }
            />

            {/* <Route path="/create-announcement" element={<CreateAnnouncement />} /> */}
            {/* <Route path="/announcement" element={<AnnouncementTemplate />} /> */}
            <Route path="/addVideo" element={<AddVideo />} />
            <Route path="/addDocs" element={<AddDocs />} />
            <Route path="/view-content" element={<ViewContent />} />
            <Route path="/watch-course" element={<WatchCourseWhenEnrolled />} />
            <Route path="/add-user" element={<AddUserByAdmin />} />
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/FAQ" element={<FAQs />} />
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
