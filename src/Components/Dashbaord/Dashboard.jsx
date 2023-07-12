import { useEffect, useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineReload } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";

import "./dashboard.css";
import axios from "axios";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";
import { readNonErollCourseData } from "../../redux/slices/courses/coursesActions";
import { useDispatch, useSelector } from "react-redux";
import CourseRated from "../Student/courseRating/CourseRated";
import { FiSearch } from 'react-icons/fi'; import DashboardCard from "./DashboardCard";
import ReactPagination from "react-responsive-pagination";
import Spinner from "../Spinner/Spinner";


const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseState.nonEnrollCourseList);
  const rating = useSelector((state) => state.ratingState.ratingByStudent);
  const loadingState = useSelector(state => state.courseState.lodingApi);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [hideFooter, setHideFooter] = useState("dashboardFooter");
  const [searchText, setSearchText] = useState('');
  const totalPages = useSelector(state => state?.dashboardState?.numberOfPages);


  let pageSize = 10;



  useEffect(() => {
    dispatch(readNonErollCourseData(currentPage, pageSize, ''));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClickButtonRoll = (courseId) => {
    navigate("/view-content", { state: { courseId } });
  };

  // handle search text 
  const handleSearchText = (e) => {
    setCurrentPage(1);
    e.preventDefault();
    dispatch(readNonErollCourseData(currentPage, pageSize, searchText));
    //dispatch(getDataBySearch("enrolledStudents", searchText, pageSize, currentPage));
  }


  // handle page change 

  const handlePageChange = (num) => {
    setCurrentPage(num);
    dispatch(readNonErollCourseData(num, pageSize, searchText));
  }
  var lastScrollTop = window.scrollY;
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      setHideFooter("dashboardFooter");
    } else {
      setHideFooter("dashboardFooter dashboardFooter_hide");
    }
    lastScrollTop = scrollTop;
  });

  return (
    <div className="dashboard">

      <div className="middle_row2">
        <div className="dashboardGridCard_2 " id="dashboardGridCard_2_1">
          <div>
            <RiTeamLine className="dashBoardCardIcons imageArea1" />
          </div>
          <div className="dssh_cardheading" style={{ color: "white" }}>
            Trending Courses
          </div>
          <p style={{ color: "white" }}>
            Explore the top courses on the web and stay ahead of the curve with
            our trending selection.
          </p>
          <div className="dash_cardInfo" style={{ color: "white" }}></div>
        </div>
        <div className="dashboardGridCard_2" id="dashboardGridCard_2_2">
          <div>
            <FaChalkboardTeacher className="dashBoardCardIcons imageArea1" />
          </div>
          <div className="dssh_cardheading" style={{ color: "white" }}>
            Request a Live Class
          </div>
          <p style={{ color: "white" }}>
            {" "}
            Dynamic and engaging learning experience through real-time
            interaction with instructors and peers.
          </p>
          <div className="dash_cardInfo" style={{ color: "white" }}></div>
        </div>
      </div>
      <form className="enrolled-search py-1 d-flex justify-content-end align-items-center mb-2" onSubmit={handleSearchText}>
        <input type="text" className='form-control w-25 me-2' onChange={(e) => setSearchText(e.target.value)} />
        <button className='btn-search m-0 d-flex' > <FiSearch className='enrolled-search-icon' /></button>
      </form>
      <div style={{ margin: "10px 30px", fontSize: "20px" }}>Our Courses</div>
      <div className="dash_course">

        {courses?.map((ele, id) => {
          return (
            <>
              <div className="dash_courseCard" key={id.courseId}>
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

                  <button
                    className="enrollButtonNow"
                    onClick={() => handleClickButtonRoll(ele.courseId)}
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

      <div className="py-3">
        <ReactPagination
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
        />

      </div>
    </div>
  );
};

export default Dashboard;
