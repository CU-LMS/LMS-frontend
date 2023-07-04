import { Card } from "react-bootstrap";
import { Calendar } from "antd";

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
          <div className="grid-parent-dashboard">
            <div>
              <div class="admin-dash-card">
                <h2 class="card-title">Courses</h2>
                <span class="card-number">10</span>
              </div>

              <div class="admin-dash-card">
                <h2 class="card-title">Drafts</h2>
                <span class="card-number">2</span>
              </div>
            </div>
            <div>
              <div class="admin-dash-card">
                <h2 class="card-title">Enrollment</h2>
                <span class="card-number">428</span>
              </div>

              <div class="admin-dash-card">
                <h2 class="card-title">Active Assignments</h2>
                <span class="card-number">2</span>
              </div>
            </div>
            <div>
              <div class="admin-dash-card">
                <Calendar style={wrapperStyle} fullscreen={false} />
                {/* <h2 class="card-title">Calender</h2>
                <span class="card-number"></span> */}
              </div>

              <div class="admin-dash-card">
                <h2 class="card-title">Feedback</h2>
                <span class="card-number"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
