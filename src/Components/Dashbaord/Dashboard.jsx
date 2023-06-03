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
import "./dashboard.css";
import axios from "axios";
import ImageSlider from "./ImageSlider";


const Dashboard = () => {
  const [isLoading, setLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [hideFooter, setHideFooter] = useState("dashboardFooter");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClickButtonRoll = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

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

  useEffect(() => {
    let profile = JSON.parse(localStorage.getItem("profile"));
    let accessToken = JSON.parse(localStorage.getItem("accessToken"));

    axios
      .post("http://172.17.18.255:8000/user_profile/", {
        username: profile.email,
        email: profile.email,
        first_name: profile.givenName,
        last_name: profile.familyName,
        profile_pic: profile.imageUrl,
        access_token: accessToken,
        google_id: profile.googleId,
      })
      .then(function (response) {
        // console.log("$$$$$$$$", response);
      })
      .catch(function (error) {
        console.log("########", error);
      });
  }, []);

  return (
    <div className="dashboard">
      <div>
        <ImageSlider />
      </div>

      <div className="middle_row">
        <div className="dashboardGridCard">
          <div>
            <AiOutlineReload className="dashBoardCardIcons" />
          </div>
          <div className="dssh_cardheading">Nothing to resume yet</div>
          <div></div>
        </div>
        <div className="dashboardGridCard">
          <div>
            <BsCalculatorFill className="dashBoardCardIcons" />
          </div>
          <div className="dssh_cardheading">My Courses</div>
          <div className="dash_cardInfo">See courses you are enrolled in</div>
        </div>
        <div className="dashboardGridCard">
          <div>
            <ImBooks className="dashBoardCardIcons" />
          </div>
          <div className="dssh_cardheading">Catalog</div>
          <div className="dash_cardInfo">
            See a complete list of available courses
          </div>
        </div>
        <div className="dashboardGridCard">
          <div>
            <BsBriefcase className="dashBoardCardIcons" />
          </div>
          <div className="dssh_cardheading">Resources</div>
          <div className="dash_cardInfo">Browse or download resource</div>
        </div>
        <div className="dashboardGridCard">
          <div>
            <BsCalendar2Check className="dashBoardCardIcons" />
          </div>
          <div className="dssh_cardheading">Calender</div>
          <div className="dash_cardInfo">see your scheduled uvent</div>
        </div>
      </div>
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
      <div style={{ margin: "10px 30px", fontSize: "2rem" }}>Our Courses</div>
      <div className="dash_course">
        {/* Dashboard cards  main  */}

        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_10-Ways-2.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>

        {/* dashboard card repeat */}
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_8-Ways.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Absorb-Infuse-26.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_eCommerce-2.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Absorb-Leaderboards.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Reporting-2.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Case-Studies-2.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Global-eTraining.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Talent-Development.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_10-Ways-2.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Branding.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_8-Ways.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Reporting-2.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div className="overflow1" style={{ borderBottom: "7px solid grey" }}>
            <img
              className="imageArea"
              src="https://d1vy0qa05cdjr5.cloudfront.net/521066e7-5d91-4b95-a6df-8088206f6d1c/Course%20Thumbnails/Course-Thumbnail_Absorb-Leaderboards.png"
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
            <h6 style={{ fontWeight: 600 }}>Start Learning</h6>
            <p className="dash_cardInfo">Online Course</p>
            {/* <button class="btn btn-primary" href="#">
              Enroll Now
            </button> */}
            <button className="enrollButtonNow" onClick={handleClickButtonRoll} disabled={isLoading}>
              {isLoading ? <div className="loader" /> : "Enroll Now"}
            </button>
          </div>
        </div>

        {/* repeat end */}
      </div>
      {/* <footer className={hideFooter}>
        <BsGlobe className="dashFooterIcon" />{" "}
        <p style={{ color: "white", margin: "0 5px" }}>English</p>
        <p>Sign Out</p>
      </footer> */}
    </div>
  );

    }

export default Dashboard;
