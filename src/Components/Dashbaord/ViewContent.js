import React from "react";
import { useState, useEffect } from "react";
import headerImage from "../../asset/swayam_logo.png";
import headerImage2 from "../../asset/NPTEL_logo_128.png";
import booksgif from "../../asset/books2.gif";
import cert from "../../asset/cert.gif";
import certificate2 from "../../asset/certificate2.gif";
import "./ViewContent.css";
import SocialMediaIcons from "./SocialMediaIcons";
import learnImage from "../../asset/learn.jpg";
import Book2 from "../../asset/book3.jpg";
import { readCourseData } from "../../redux/slices/courses/coursesActions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { enrollCourse } from "../../redux/slices/courses/coursesActions";
import { Navigate } from "react-router-dom";
import WatchCourseWhenEnrolled from "./WatchCourseWhenEnrolled";




const ViewContent = () => {
  const courses = useSelector((state) => state.courseState.courses);
  // const dummyVar = courses.find(x =>x.courseId==1);
  const [currentCourse, setCurrentCourse] = useState();
  const dispatch = useDispatch();
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  const { state } = useLocation();
  console.log(state.courseId);

  useEffect(() => {
    if (state.courseId) {
      courses?.map((course) => {
        if (course.courseId === state.courseId) {
          setCurrentCourse(course);
        }
      });
    }
  }, [state.courseId]);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentcurrentCoursement?.scrollTop;
    setIsFixed(scrollTop > 0); // Set a condition based on scroll position
  };

  const enrollTheUser = () => {

    dispatch(enrollCourse(currentCourse.courseId));
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    dispatch(readCourseData());
  }, []);

  return (
    <>
    {console.log(currentCourse)}
      <marquee className="linecolor" direction="left">
        For more Information, say Hello CU! to any social media platform mention
        below, we will get back to you...
      </marquee>
      {currentCourse && (
        <div>
          <div className="main-header-view" key={currentCourse.courseId}>
            <p className="mini-header-view-heading">Welcome</p>
            <p className="heading-view">Course Name : {currentCourse.courseName} </p>
            <p className="teacher-name">Author Name : {currentCourse.autherName}</p>
            <p className="teacher-background"> Semester : {currentCourse.semester}</p>
            <div className="buttonAndEnrolled">
              <button className="join-button" onClick={enrollTheUser}>Enroll Now</button>{" "}
              <p>Course Code : </p>
              <p className="count-enroll"> {currentCourse.courseCode}</p>
            </div>
          </div>
          <div className="body-view">
            <div className="left-body-view">
              <div className="video-view">
                <iframe
                  className="video-thumb"
                  src="https://www.youtube.com/embed/Vr9qDP9LGO0?rel=0"
                  frameborder="0"
                  allow="acccurrentCourserometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                ></iframe>
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
                    <td>{currentCourse.descriptions}</td>
                  </tr>
                  <tr>
                    <td>Created By :</td>
                    <td>{currentCourse.firstEnteredBy}</td>
                  </tr>
                  <tr>
                    <td>Start Date :</td>

                    <td>{currentCourse.dStartDate}</td>
                  </tr>
                  <tr>
                    <td>End Date :</td>

                    <td>{currentCourse.dEndDate}</td>
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
          <p>Wheatom, F.W. ""Aquacultural Engineering"". John Wiley, 1997. </p>
          <p>Bose, AN., Ghosh, S.N. Yang C.T. and Mitra </p>
        </div>
        <div className="right-book">
          <img className="books-image" src={booksgif} />
        </div>
      </div>

      <div className="second-book-table">
        <div className="left-side">
          <div className="left-side-image">
            <img className="books-image" src={learnImage} />
          </div>
        </div>
        <div className="right-side">
          <p className="heading-view-books2">Learn whenever and yes, even</p>
          <span className="however">HOWEVER</span>
        </div>
      </div>

      <div className="books-reference">
        <div className="left-book">
          <p className="heading-view-books">Get your dream come true.</p>
          <p>Develope more skills and knowledge by our best Teacher's </p>
        </div>
        <div className="right-book">
          <img className="books-image" src={Book2} />
        </div>
      </div>

      <div className="footer-social">
        <p className="heading-view-books3">
          For more Information, say Hello CU!, we will get back to you.
        </p>
        <div className="iconsSocial">
          <a
            href="https://www.facebook.com/chandigarhuniversitygharuan/"
            target="_blanl"
            class="fa fa-facebook"
          ></a>
          <a
            href="https://twitter.com/Chandigarh_uni?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blanl"
            class="fa fa-twitter"
          ></a>
          <a
            href="https://cucet.cuchd.in/?type=gsn-cucet&gad=1&gclid=CjwKCAjw-IWkBhBTEiwA2exyO8vjl4ggGZZwFMLyaRfDicPQ909Wh8XuGfohw2Bw8KB_D9hoJsUxYhoCdw4QAvD_BwE"
            target="_blanl"
            class="fa fa-google"
          ></a>
          <a
            href="https://www.linkedin.com/school/chandigarh-university/?originalSubdomain=in"
            target="_blanl"
            class="fa fa-linkedin"
          ></a>
          <a href="#" class="fa fa-youtube"></a>
          <a href="#" class="fa fa-instagram"></a>
        </div>
      </div>
    </>
  );
};

export default ViewContent;
