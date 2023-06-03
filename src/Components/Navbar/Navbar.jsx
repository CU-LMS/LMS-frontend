import React, { useEffect, useState } from "react";
import { useContext } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { AuthContext } from "../../AuthManagement/AuthContext";

export default function Navbar() {

  const { authenticated, logout } = useContext(AuthContext);
  const [toggle, seTtoggle] = React.useState("dropdown_menu");
  const [icon, setIcon] = React.useState(true);
  const [hideNav, setHideNav] = React.useState("navheader");
  function toggleFunc() {
    setIcon(!icon);
    seTtoggle("dropdown_menu");
  }

 

  function hidemenu() {
    setIcon(!icon);
    seTtoggle("dropdown_menu");
  }

  function ham() {
    seTtoggle("dropdown_menu open");
    setIcon(!icon);
  }

  var lastScrollTop = window.scrollY;
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setHideNav("navheader navHide");
    } else {
      setHideNav("navheader");
    }
    lastScrollTop = scrollTop;
  });

  return (
    <>
      <header className={hideNav}>
        <div className="navbar">
          {/* <div className="max-width"> */}
          <div className="logo">
            <a href="#">
              {" "}
              <img
                className="logoImg"
                src="https://www.cuchd.in/includes/assets/images/header-footer/cu-logo-white.webp"
                alt="logo"
              />
            </a>{" "}
          </div>
          <ul className="link">
            <li className="navBtn">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navBtn">
              <a href="https://www.cuchd.in/about/" target="_blank">
                About
              </a>
            </li>
            <li className="navBtn">
              <a href="https://www.cuchd.in/academics/" target="_blank">
                Academics
              </a>
            </li>
            <li className="navBtn">
              <a
                href="https://www.linkedin.com/school/chandigarh-university/"
                target="_blank"
              >
                Contact
              </a>
            </li>
          </ul>
         

      
          <NavLink to="/login">
            <button className="action_btn">Login</button>
          </NavLink>


          <div className="toggle_btn">
            {icon ? (
              <GiHamburgerMenu onClick={ham} />
            ) : (
              <ImCross onClick={toggleFunc} />
            )}
          </div>
          {/* </div> */}
        </div>
        <div className={toggle}>
          <li onClick={hidemenu}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={hidemenu}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={hidemenu}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li onClick={hidemenu}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li onClick={hidemenu}>
            <NavLink to="/tool">Admin</NavLink>
          </li>
          <li onClick={hidemenu}>
            {" "}
            {/* <NavLink to="/login">
              <button className="action_btn">Login</button>
            </NavLink> */}
            {authenticated && <button onClick={logout}>Sign Out</button>}
          </li>
        </div>
      </header>
    </>
  );
}
