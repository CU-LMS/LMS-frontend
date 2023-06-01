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

const Dashboard = () => {
  const [hideFooter, setHideFooter] = useState("dashboardFooter");

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

    // email: "amanv1011@gmail.com";//
    // familyName: "Verma";//
    // givenName: "Aman";//
    // googleId: "109224128335912704138";//
    // imageUrl: "https://lh3.googleusercontent.com/a/AGNmyxYlaHszXDQ4_ecX5Fb8CcBGV0uUnDh7HgYuPGsOttA=s96-c";//
    // name: "Aman Verma";
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
      <div className="dashboard_crousel">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.cuchd.in/includes/assets/images/hero-slide-1.webp"
                className="d-block  crouselImg"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.cuchd.in/includes/assets/images/qs-subject-banner-updated.webp"
                className="d-block  crouselImg"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.cuchd.in/includes/assets/images/highest-patents-banner.webp"
                className="d-block  crouselImg"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.cuchd.in/includes/assets/images/ranking-banner-2.webp"
                className="d-block  crouselImg"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
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
        <div className="dashboardGridCard_2" id="dashboardGridCard_2_1">
          <div>
            <RiTeamLine className="dashBoardCardIcons" />
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
            <FaChalkboardTeacher className="dashBoardCardIcons" />
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
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>

        {/* dashboard card repeat */}
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>
        <div className="dash_courseCard">
          <div style={{ borderBottom: "7px solid grey" }}>
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
            <button class="btn btn-primary" href="#">
              Enroll Now
            </button>
          </div>
        </div>

        {/* repeat end */}
      </div>
      <footer className={hideFooter}>
        <BsGlobe className="dashFooterIcon" />{" "}
        <p style={{ color: "white", margin: "0 5px" }}>English</p>
        <p>Sign Out</p>
      </footer>
    </div>
  );

  //   }
};
export default Dashboard;
