import { FaUserCircle, FaUserEdit } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { MdOndemandVideo, MdStorage, MdOutlinePoll, MdLogout } from 'react-icons/md';
import { BsBriefcaseFill, BsNewspaper, BsCalendarWeek } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../App.css'
import React, { useEffect, useState } from "react";
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
import { AuthContext } from '../../AuthManagement/AuthContext';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Sidebar = ({ isSidebar, setIsSidebar }) => {

  let userData = JSON.parse(
    localStorage.getItem("userData")
  );

  // handle navigate 
  const handleNavigate = () => {
    setIsSidebar(false);
  }


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
      //setIsLoggedIn(true);
      // localStorage.clear();

    }
  }, []);

  const logUserOut = (event) => {
    event.preventDefault();
    console.log("LLLLLLLLLLLLL")
    setGoogleAuth(false);
    localStorage.clear("cuchd-accessToken");
    localStorage.removeItem("cuchdCsrf")
    localStorage.removeItem("userData")
    localStorage.clear();
    //navigate("/");
    window.location.href = ("/");
    // toast.success("Logged Out Successfully", {autoClose: 1000})
    Cookies.remove();


  };


  const dashboardLink = (event) => {
    navigate("/dashboard");
  };
  const myCourseLink = (event) => {
    navigate("/mycourse");

  };

  const loginUserClear = () => {
    setGoogleAuth(false);
    localStorage.removeItem("cuchdCsrf");

  }


  function hidemenu() {
    setIcon(!icon);
    seTtoggle("dropdown_menu");
  }

  function ham() {
    seTtoggle("dropdown_menu open");
    setIcon(!icon);
  }

  
  // handle close sidebar
  const handleCloseSidebar = () => {
    setIsSidebar(false);
  }
  
  return (
    <div className={`sidebar-overlay ${isSidebar && "sidebar-show"}`} onClick={handleCloseSidebar}>
      <div className={`sidebar ${isSidebar && "sidebar-open"}`}>
        <div className="sidebar-content">
          <div className="sidebar-item d-flex align-items-center py-4">
            <FaUserCircle className="sidebar-icon me-3" />
            <p className='mb-0 user-title'><i>You are logged in as</i> <br /> <strong>{userData?.firstName}</strong> </p>
          </div>
          <Link to="/dashboard" className="sidebar-item d-flex align-items-center py-3" data-value="dashboard" onClick={handleNavigate}>
            <RiDashboardFill className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title' >Dashboard</p>
          </Link>
          <Link to="/mycourses" className="sidebar-item d-flex align-items-center py-3" data-value="mycourses" onClick={handleNavigate}>
            <MdOndemandVideo className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title'>My Courses</p>
          </Link>
          <Link to="/catalog" className="sidebar-item d-flex align-items-center py-3" data-value="catalog" onClick={handleNavigate}>
            <MdStorage className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title' >Catalog</p>
          </Link>
          <Link to="/resources" className="sidebar-item d-flex align-items-center py-3" data-value="resources" onClick={handleNavigate}>
            <BsBriefcaseFill className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title' >Resources</p>
          </Link>
          <Link to="/view-announcement" className="sidebar-item d-flex align-items-center py-3" data-value="announcement" onClick={handleNavigate}>
            <BsNewspaper className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title' >Announcements</p>
          </Link>
          <Link to="/latest-news" className="sidebar-item d-flex align-items-center py-3" data-value="latest-news" onClick={handleNavigate}>
            <BsNewspaper className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title' >Latest News</p>
          </Link>
          <Link to="/polls" className="sidebar-item d-flex align-items-center py-3" data-value="polls" onClick={handleNavigate}>
            <MdOutlinePoll className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title'>Polls</p>
          </Link>
          <Link to="/calendar" className="sidebar-item d-flex align-items-center py-3" data-value="calendar" onClick={handleNavigate}>
            <BsCalendarWeek className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title'>Calendar</p>
          </Link>
          <Link to="/profile" className="sidebar-item d-flex align-items-center py-3" data-value="profile" onClick={handleNavigate}>
            <FaUserEdit className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title'>Profile</p>
          </Link>
          <div onClick={logUserOut} className="sidebar-item d-flex align-items-center py-3">
            <MdLogout  className="sidebar-icon me-3" />
            <p className='mb-0 sidebar-item-title'>Logout</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar