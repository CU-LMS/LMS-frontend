import React from "react";
import { Card } from "react-bootstrap";
import "./AdminCourses.css";
// import introVideo from "../../asset/introVideo.mp4";

import placeholder12 from "../../../asset/placeholder12.png";

const AdminCourses = () => {
  return (
    <>
      <div id="admin-dashboard">
        <h1>courses</h1>
        <div className="admin-dashboard">
          <div className="grid-parent">
            <div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={placeholder12}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Create Courses</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src={placeholder12}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Create Test</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src={placeholder12}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Create Assignment</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={placeholder12}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Schedule Class</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              {/* <Card classNameName="card">
                <h2>Create Courses</h2>
              </Card> */}
              <div className="card">
                <img
                  className="card-img-top"
                  src={placeholder12}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Upload Training</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src={placeholder12}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Upload Resources</h5>

                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCourses;
