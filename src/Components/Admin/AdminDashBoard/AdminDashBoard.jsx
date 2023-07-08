import { Card } from "react-bootstrap";
import { Calendar } from "antd";
import { readDashboardData } from "../../../redux/slices/Common/dashboardActions";
import { useDispatch, useSelector } from "react-redux";
import "./AdminDashBoard.css";
import React, { useEffect, useState } from "react";
const AdminDashBoard = () => {
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

  return (
    <>
      <div id="admin-dashboard">
        <h1>Welcome</h1>

        <div className="admin-dashboard">
          <div className="grid-parent-dashboard">
            <div>
              <Card className="card">
                <h2>Publish Courses</h2>
                <h3>{dashboardData?.totalActiveCourse}</h3>
                {/* <IoMdSchool size={80} className="icon" /> */}
              </Card>
              <Card className="card">
                <h2>Enrolled Courses</h2>
                <h3>{dashboardData?.totalEnrolledCourse}</h3>
                {/* <MdOutlineAssignmentTurnedIn size={80} className="icon" /> */}
              </Card>
            </div>
            <div>
              <Card className="card">
                <h2>Draft Courses</h2>
                <h3>{dashboardData?.totalDraftCourse}</h3>
                {/* <MdDrafts size={80} className="icon" /> */}
              </Card>
              <Card className="card">
                <div style={wrapperStyle}>
                  <Calendar fullscreen={false} />
                </div>
                {/* <h2>Schedule</h2> */}
                {/* <div className="calender-container">
                  <Calendar className="calender" fullscreen={false} />
                </div> */}
              </Card>
            </div>
            <div>
              <Card className="card">
                <h2>Enrolled Students</h2>
                <h3>{dashboardData?.totalEnrolledStudent}</h3>
                {/* <BsFillPeopleFill size={80} className="icon" /> */}
              </Card>
              <Card>
                <h2>Feedback</h2>
                {/* <MdOutlineFeedback size={80} className="icon" /> */}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
