import { Card } from "react-bootstrap";
import { Calendar } from "antd";
import { IoMdSchool } from "react-icons/io";
import {
  MdDrafts,
  MdOutlineAssignmentTurnedIn,
  MdOutlineFeedback,
} from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";

import "./AdminDashBoard.css";

const AdminDashBoard = () => {
  const wrapperStyle = {
    width: 300,
    border: "1px solid #d9d9d9",
  };
  return (
    <>
      <div id="admin-dashboard">
        <h1>Welcome</h1>
        <div className="admin-dashboard">
          <div className="grid-parent">
            <div>
              <Card className="card">
                <h2>Courses</h2>
                <h3>10</h3>
                {/* <IoMdSchool size={80} className="icon" /> */}
              </Card>
              <Card className="card">
                <h2>Assignments Active</h2>
                <h3>0</h3>
                {/* <MdOutlineAssignmentTurnedIn size={80} className="icon" /> */}
              </Card>
            </div>
            <div>
              <Card className="card">
                <h2>Drafts</h2>
                <h3>3</h3>
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
                <h2>Total Enrollment</h2>
                <h3>1289</h3>
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
