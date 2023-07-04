import React from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import {
  MdOndemandVideo,
  MdStorage,
  MdOutlinePoll,
  MdLogout,
} from "react-icons/md";
import { BsBriefcaseFill, BsNewspaper, BsCalendarWeek } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { AuthContext } from "../../AuthManagement/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./Sidebar.css";

const Sidebar = ({ isSidebar, setIsSidebar }) => {
  let userData = JSON.parse(localStorage.getItem("adminData"));
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { authenticated, logout } = useContext(AuthContext);
  const [toggle, seTtoggle] = React.useState("dropdown_menu");
  const [icon, setIcon] = React.useState(true);
  const [hideNav, setHideNav] = React.useState("navheader");
  const [googleAuth, setGoogleAuth] = useState();
  let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));

  function toggleFunc() {
    setIcon(!icon);
    seTtoggle("dropdown_menu");
  }

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
    }
  }, []);

  const logUserOut = (event) => {
    event.preventDefault();
    setGoogleAuth(false);
    localStorage.clear("cuchd-accessToken");
    localStorage.removeItem("cuchdCsrf");
    localStorage.removeItem("userData");
    localStorage.clear();
    window.location.href = "/";
    Cookies.remove();
  };

  const loginUserClear = () => {
    setGoogleAuth(false);
    localStorage.removeItem("cuchdCsrf");
  };

  function hidemenu() {
    setIcon(!icon);
    seTtoggle("dropdown_menu");
  }

  function ham() {
    seTtoggle("dropdown_menu open");
    setIcon(!icon);
  }

  const handleNavigate = () => {
    setIsSidebar(false);
  };

  return (
    <div className={`sidebar ${isSidebar && "sidebar-open"}`}>
      <div className="sidebar-content">
        <div className="sidebar-item d-flex align-items-center py-4">
          <FaUserCircle className="sidebar-icon me-3" />
          <p className="mb-0 user-title">
            <i>You are logged in as</i> <br />{" "}
            <strong className="loginUser">{userData?.firstName}</strong>{" "}
          </p>
        </div>
        <Link
          to="/admin-dashboard"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="dashboard"
          onClick={handleNavigate}
        >
          <RiDashboardFill className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Dashboard</p>
        </Link>
        <Link
          to="/admin-courses"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="catalog"
          onClick={handleNavigate}
        >
          <MdStorage className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Courses</p>
        </Link>
        <Link
          to="/catalog"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="catalog"
          onClick={handleNavigate}
        >
          <MdStorage className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Users</p>
        </Link>

        <Link
          to="/create-announcement"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="announcement"
          onClick={handleNavigate}
        >
          <BsNewspaper className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Announcements</p>
        </Link>
        <Link
          to="/discussion-forum"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="announcement"
          onClick={handleNavigate}
        >
          <BsNewspaper className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Discussion Form</p>
        </Link>

        <Link
          to="/create-user"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="announcement"
          onClick={handleNavigate}
        >
          <BsNewspaper className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Add User</p>
        </Link>

        <Link
          to="/calendar"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="calendar"
          onClick={handleNavigate}
        >
          <BsCalendarWeek className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Calendar</p>
        </Link>
        <Link
          to="/profile"
          className="sidebar-item d-flex align-items-center py-3"
          data-value="profile"
          onClick={handleNavigate}
        >
          <FaUserEdit className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title">Profile</p>
        </Link>
        <div className="sidebar-item d-flex align-items-center py-3">
          <MdLogout className="sidebar-icon me-3" />
          <p className="mb-0 sidebar-item-title" onClick={logUserOut}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
