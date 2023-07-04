import { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  BsCalculatorFill,
  BsBriefcase,
  BsCalendar2Check,
} from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import "./MyCourse.css"
import axios from "axios";
import CourseRated from "../Student/courseRating/CourseRated";

import { useNavigate } from "react-router-dom";
import { readMyCourseData } from "../../redux/slices/courses/coursesActions";
import { useDispatch, useSelector } from "react-redux";


const MyCourse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseState.myCourseList);
  

  const [isLoading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [hideFooter, setHideFooter] = useState("dashboardFooter");

  useEffect(() => {
    dispatch(readMyCourseData());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClickButtonRoll = (courseId=0) => {
    navigate("/enrolled-course-content", {state: { courseId } });
  }; 
  return (
    <div className="dashboard">
      <div style={{ margin: "10px 30px", fontSize: "20px" }}>My Courses</div>
      <div className="dash_course">

        {courses?.map((ele, id) => {
          return (
            <>
              <div className="dash_courseCard" key={id?.courseId}>
                <div
                  className="overflow1"
                  style={{ borderBottom: "7px solid grey" }}
                >
                  <img
                    className="imageArea"
                    src={ele.bannerImageName}
              
                    alt="..."
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h6 style={{ fontWeight: 600 }}>{ele.courseName}</h6>
                  <p className="dash_cardInfo">{ele.courseCode}</p>
                  <CourseRated courseId={ele?.courseId} />
                  <button
                    className="enrollButtonNow"
                    onClick={() => handleClickButtonRoll(ele?.courseId)}
                    disabled={isLoading}
                  >
                    {isLoading ? <div className="loader" /> : "View More"}
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyCourse;