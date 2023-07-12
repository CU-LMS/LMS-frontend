import { Card } from "react-bootstrap";
import { Calendar } from "antd";
import { readDashboardData } from "../../../redux/slices/Common/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import "./AdminDashBoard.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminDashBoard = () => {
  const navigate = useNavigate();
  const wrapperStyle = {
    width: 300,
    border: "1px solid #d9d9d9",
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readDashboardData());
  }, []);

  const dashboardData = useSelector(
    (state) => state?.dashboardState?.getDashboardData
  );
  const publishNavigate = () => {
    navigate("/publish-courses");
  };

  return (
    <>
      <div id="admin-dashboard">
        <h1>Welcome</h1>

        <div className="admin-dashboard">
          <div className="grid-parent-dashboard">
            <div className="text-center">

              <Link to="/publish-courses" className="card-wrapper mb-3">
                <Card className="card">
                  <h2>Publish Courses</h2>
                  <h3>{dashboardData?.totalActiveCourse}</h3>
                  {/* <IoMdSchool size={80} className="icon" /> */}
                </Card>
              </Link>

              <Link to="/enrolled-courses" className="card-wrapper">
                <Card className="card">
                  <h2>Enrolled Courses</h2>
                  <h3>{dashboardData?.totalEnrolledCourse}</h3>
                  {/* <MdOutlineAssignmentTurnedIn size={80} className="icon" /> */}
                </Card>
              </Link>
            </div>


            <div className="text-center">
              <Link to="/draft-courses" className="card-wrapper mb-3">
                <Card className="card">
                  <h2>Draft Courses</h2>
                  <h3>{dashboardData?.totalDraftCourse}</h3>
                  {/* <MdDrafts size={80} className="icon" /> */}
                </Card>
              </Link>
              <Link className="card-wrapper">
                <Card className="card">
                  <div style={wrapperStyle}>
                    <Calendar fullscreen={false} />
                  </div>
                  {/* <h2>Schedule</h2> */}
                  {/* <div className="calender-container">
                  <Calendar className="calender" fullscreen={false} />
                </div> */}
                </Card>
              </Link>
            </div>
            <div className="text-center">
              <Link to="/enrolled-students" className="card-wrapper mb-3">
                <Card className="card">
                  <h2>Enrolled Students</h2>
                  <h3>{dashboardData?.totalEnrolledStudent}</h3>
                  {/* <BsFillPeopleFill size={80} className="icon" /> */}
                </Card>
              </Link>
              <Link to="/feedback-form" className="card-wrapper">
                <Card>
                  <h2>Feedback</h2>
                  {/* <MdOutlineFeedback size={80} className="icon" /> */}
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
