import React from "react";
import "./nav.css";
import { MdOutlineHealthAndSafety } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <img
            src="https://www.cuchd.in/includes/assets/images/header-footer/cu-logo-white.webp"
            alt=""
            className="logo"
          />
          <ul className="menu">
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="#">Technology</a>
              <ul className="subMenu_1">
                <li>
                  <a href="">MCQ</a>
                </li>
                <li>
                  <a href="/bulkUpload">Bulk Upload</a>
                </li>
                <li>
                  <a href="/create-question">Create Question</a>
                </li>
                <li>
                  <a href="/view-question">View</a>
                </li>
                <li>
                  <a href="/review-question">Review</a>
                </li>
                <li>
                  <a href="/bulkUpload">Bulk Upload</a>
                </li>
                <li>
                  <a href="/create-question">Create Question</a>
                </li>
              </ul>

              <ul className="subMenu_1_2">
                <li>
                  <a href="/view-question">View</a>
                </li>
                <li>
                  <a href="/view-question">View</a>
                </li>
                <li>
                  <a href="/review-question">Review</a>
                </li>
                <li>
                  <a href="/bulkUpload">Bulk Upload</a>
                </li>
                <li>
                  <a href="/create-question">Create Question</a>
                </li>
                <li>
                  <a href="/view-question">View</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Our Clients</a>
              <ul className="subMenu_1">
                <li>
                  <a href="#">National</a>
                </li>
                <li>
                  <a href="#">Goverment</a>
                </li>
                <li>
                  <a href="#">International</a>
                </li>
              </ul>
            </li>
            <li className="product">
              <a href="#">Products</a>
              {/* <div className="subMenu_1_a">
                <div className="navTile"></div>
              </div> */}

              {/* tile in products */}

              <div className="subMenu_1_a">
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
                <div className="navtile">
                  <MdOutlineHealthAndSafety />
                  <span className="title">Healthcare</span>
                </div>
              </div>
            </li>
            <li>
              <a href="#">Roster Management</a>
              <ul className="subMenu_1">
                <li>
                  <a href="#">Configure Roster</a>
                </li>
                <li>
                  <a href="#">Roster Search</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tech Support</a>
              <ul className="subMenu_1">
                <li>
                  <a href="#">Reset Login Access</a>
                </li>
                <li>
                  <a href="#">Reset Full test</a>
                </li>
                <li>
                  <a href="#">Get Key</a>
                </li>
                <li>
                  <a href="#">Bulk Registration</a>
                </li>
                <li>
                  <a href="#">Assign Test</a>
                </li>
                <li>
                  <a href="#">Result Upload</a>
                </li>
                <li>
                  <a href="#">Approve User</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
