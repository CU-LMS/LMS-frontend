import React from "react";
import { useState, useEffect } from "react";
import { readCourseData } from "../../../redux/slices/courses/coursesActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import videoShow from "../../../asset/annual-convocation-2023.mp4";
import loadingBook from "../../../asset/loadingBook.jpg";
import loadingBook1 from "../../../asset/Building.png";
import rankone from "../../../asset/rankone.jpg";
import CourseRatingReview from "../courseRating/CourseRatingReview";



import "./EnrolledCourseContent.css";

const EnrolledCourseContent = () => {
  const courses = useSelector((state) => state.courseState.courses);
  const [currentCourse, setCurrentCourse] = useState();
  const dispatch = useDispatch();
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  const { state } = useLocation();
 

  useEffect(() => {
    if (state?.courseId) {
      const foundCourse = courses.find(course => course?.courseId === state?.courseId);
      if (foundCourse) {
        setCurrentCourse(foundCourse);
      }
    }
  }, [state?.courseId, courses]);

  const enrollTheUser = () => {    
    navigate(`/watch-course?courseId=${currentCourse?.courseId}`);
  };

  useEffect(() => {
    dispatch(readCourseData());
  }, []);

  return (
    <>
      
      <marquee className="linecolor" direction="left">
      For more Information, chat with us in CU-Sevak. We will get back to you...
      </marquee>
      {currentCourse && (
        <div>

          <div className="main-header-view" key={currentCourse.courseId}>
          <div className="main-header-view1">

            <p className="mini-header-view-heading">Welcome</p>
            <p className="heading-view">
              Course Name : {currentCourse.courseName}{" "}
            </p>
            <p className="teacher-name">
              Course coordinator : {currentCourse.authorName}
            </p>
            <p className="teacher-background">
              {" "}
              Semester : {currentCourse.semester}
            </p>
            <div className="buttonAndEnrolled">
              
              <button className="join-button" onClick={enrollTheUser}>
                Start Course
              </button>{" "}
              <p>Course Code : </p>
              <p className="count-enroll"> {currentCourse.courseCode}</p>
            </div>
            </div>
            <div className="main-header-view2">
          <CourseRatingReview courseId={currentCourse?.courseId}/>
          </div>
          </div>
          <div className="body-view">
            <div className="left-body-view">
              <div className="video-view">

                <ReactPlayer
                  className="show-video"
                  url={videoShow}
                  controls={true}
                  sx={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="right-body-view">
              <div className="summary-view"> Course Detail</div>
              <table
                className="header6"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
              >
                <tbody>
                  <tr>
                    <td nowrap="nowrap">Course Name :</td>

                    <td>{currentCourse.courseName}</td>
                  </tr>
                  <tr>
                    <td>Course Code :</td>

                    <td>{currentCourse.courseCode}</td>
                  </tr>
                  <tr>
                    <td>Enrolled :</td>

                    <td>{currentCourse.enrolledCount}</td>
                  </tr>
                  <tr>
                    <td>Semester :</td>
                    <td>
                      <li>{currentCourse.semester}</li>
                    </td>
                  </tr>
                  <tr>
                    <td>Descriptions :</td>
                    <td>{currentCourse.courseCode}</td>
                  </tr>
                  <tr>
                    <td>Created By :</td>
                    <td>{currentCourse.firstEnteredBy}</td>
                  </tr>
                  <tr>
                    <td>Start Date :</td>

                    <td>{new Date(currentCourse?.dStartDate).toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</td>
                  </tr>
                  <tr>
                    <td>End Date :</td>

                    <td>{new Date(currentCourse?.dEndDate).toLocaleDateString('en-US',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <div className="books-reference">
        <div className="left-book">
          <p className="heading-view-books">Mentor and Reference</p>
          <p>
            A mentor reference should be very familiar with your personal vision
            and career goals
          </p>
          <p>
            and should be willing to provide you with a letter of{" "}
            <p>recommendation upon request.</p>
          </p>

        </div>
        <div className="right-book">
          <img className="books-image" src={loadingBook1} />
        </div>
      </div>

      <div className="second-book-table">
        <div className="left-side">
          <div className="left-side-image">
            <img className="books-image" src={loadingBook} />
          </div>
        </div>
        <div className="right-side">
          <p className="heading-view-books2">Learn whenever and yes, even</p>
          <span className="however">HOWEVER</span>
         
        </div>

      </div>

      <div className="books-reference">
        <div className="left-book">
          <p className="heading-view-books">Make your dream come true.</p>
          <p>Develop more skills and knowledge by our best Teacher's </p>
        </div>
        <div className="right-book">
          <img className="books-image" src={rankone} />
        </div>
      </div>

      <div className="footer-social">
        <p className="heading-view-books3">
        For more Information, chat with us in CU-Sevak. We will get back to you...
        </p>
      </div>

     
    </>
  );
};

export default EnrolledCourseContent;
