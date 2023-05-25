import React from "react";
import "./nav2.css";
import { Link } from "react-router-dom";

export default function Navbar2() {
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
              <Link to="/"> Home</Link>
            </li>
            <li>
              <a href="#">Question Bank</a>
              <ul className="subMenu_1">
                <li>
                  <a href="#">MCQ</a>
                  <ul className="subMenu_2">
                    <li>
                      <Link to="/bulkUpload">Bulk Upload</Link>
                    </li>
                    <li>
                      <Link to="/create-question">Create Question</Link>
                    </li>
                    <li>
                      <Link to="/view-question">View</Link>
                    </li>
                    {/* <li>
                      <Link to="/review-question">Review</Link>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <a href="#">Phychometric</a>
                  <ul className="subMenu_2">
                    <li>
                      <Link to="/bulkUpload">Bulk Upload</Link>
                    </li>
                    <li>
                      <Link to="/create-question">Create Question</Link>
                    </li>
                    <li>
                      <Link to="/view-question">View</Link>
                    </li>
                    <li>
                      <Link to="/review-question">Review</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <a href="#">Programming</a>
                  <ul className="subMenu_2">
                    <li>
                      <a href="#">Create Q.</a>
                    </li>
                    <li>
                      <a href="#">View/Edit Q.</a>
                    </li>
                    <li>
                      <a href="#">Compiler</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </li>
            <li>
              <a href="#">Test Management</a>
              <ul className="subMenu_1">
                <li>
                  <a href="#">Create Test</a>
                  <ul className="subMenu_2">
                    <li>
                      <Link to="/testmanagemet-customize">Customize</Link>
                    </li>
                    <li>
                      <Link to="/testmanagemet-asignTest">Assign Test</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Test Management</a>
                  <ul className="subMenu_2">
                    <li>
                      <a href="#">Edit</a>
                    </li>
                    <li>
                      <a href="#">Manage Domain</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Evoluton</a>
              <ul className="subMenu_1">
                <li>
                  <a href="#">Overall Report</a>
                  <ul className="subMenu_2">
                    <li>
                      <a href="#">Student Wise</a>
                    </li>
                    <li>
                      <a href="#">Question Wise</a>
                    </li>
                  </ul>
                </li>
                <li className="subMenu_1">
                  <a href="#">Subject Evolution</a>
                </li>
                <li>
                  <a href="#">Evaluation Allotment</a>
                  <ul className="subMenu_2">
                    <li>
                      <a href="#">Assessor </a>
                    </li>
                    <li>
                      <a href="#">Candidate</a>
                    </li>
                  </ul>
                </li>
              </ul>
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
