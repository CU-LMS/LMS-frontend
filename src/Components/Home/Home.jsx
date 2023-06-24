import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
// import {Carousel} from "react-responsive-carousel";
import Typewriter from "typewriter-effect";
import slide1 from "../../asset/slide-1.jpg";
import slide2 from "../../asset/slide-2.png";
import slide3 from "../../asset/slide-3.jpg";
import slide4 from "../../asset/slide-4.jpg";
import ReactPlayer from "react-player";
import { BsFillChatLeftTextFill, BsQuestionDiamondFill } from "react-icons/bs";
import { FaPhoneAlt, FaGraduationCap, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import VideoShow from "../../asset/annual-convocation-2023.mp4"
import introVideo from "../../asset/introVideo.mp4";
import "../../home.css";


const Home = () => {
  const [slideImage, setSlideImage] = useState(slide1);

  return (
    <>
      <div id="showcase">
        <div className="container">
          <div className="row showcase-container">
            <div className="col-md-6 py-4">
              <h1 className="showcase-heading mb-4">
                CU-DigiClass
              </h1>

              <h3 className="mb-4 typewrite-text">
                <Typewriter
                  options={{
                    strings: ["Nothing Is Impossible", "Follow Your Dreams"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>

              <p className="showcase-para text-white mb-2">
                These resources will take you from getting started with the CU-DigiClass
                and setting up your subjects, through to communicating with
                students and providing assessment tasks and feedback.
              </p>
              <p className="showcase-para text-white mb-4">
                Canvas help is available any time with dedicated University of
                India 24/7 helpdesk support channels, including online chat and
                phone.
              </p>
            </div>
            <div className="col-md-6 py-4">
              <div className="image-wrapper">
                <Carousel
                  showIndicators={false}
                  showStatus={false}
                  showThumbs={false}
                  autoPlay
                  infiniteLoop
                >
                  <img src={slide1} alt="slide-1" className="showcase-image" />
                  <img src={slide3} alt="slide-1" className="showcase-image" />
                  <img src={slide4} alt="slide-1" className="showcase-image" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="contact" className="py-4">
          <div className="container contact">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading mb-5">
                  <h3>To Whom I Can Contact ?</h3>
                  <hr />
                </div>

                <p className="mb-3">
                  Canvas help is available any time with dedicated University of
                  India 24/7 helpdesk support channels, including online chat
                  and phone.
                </p>

                <p className="mb-3">
                  Learning Environments can assist you with further enquiries
                  regarding the CU-DigiClass and other supported learning technologies.
                  Simply submit a ServiceNow ticket and we will help you as soon
                  as possible
                </p>
              </div>
              <div className="col-md-6 px-3">
                <div className="contact-item mb-4">
                  <Link className="contact-list-item d-flex align-items-center mt-4">
                    <BsFillChatLeftTextFill className="icon mt-1 me-3" />
                    <p className="mb-0">Online chat with Helpdesk</p>
                  </Link>

                  <hr className="contact-hr-line" />
                </div>
                <div className="contact-item mb-4">
                  <Link className="contact-list-item d-flex align-items-center mt-4">
                    <FaPhoneAlt className="icon mt-1 me-3" />
                    <p className="mb-0">Call Helpdesk</p>
                  </Link>

                  <hr className="contact-hr-line" />
                </div>
                <div className="contact-item mb-4">
                  <Link className="contact-list-item d-flex align-items-center mt-4">
                    <FaUserFriends className="icon mt-1 me-3" />
                    <p className="mb-0">Meet your CU-DigiClass Faculty Coordinator</p>
                  </Link>

                  <hr className="contact-hr-line" />
                </div>
                <div className="contact-item mb-4">
                  <Link className="contact-list-item d-flex align-items-center mt-4">
                    <FaGraduationCap className="icon mt-1 me-3" />
                    <p className="mb-0">
                      Request support from Learning Environments
                    </p>
                  </Link>

                  <hr className="contact-hr-line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="guide" className="py-4">
          <div className="container">
            <div className="section-heading-center mb-5 text-center">
              <h3>Guide And Support Resources</h3>
              <hr />
            </div>

            <p className="mb-4 guide-para">
              These resources will take you from getting started with the CU-DigiClass
              and setting up your subjects, through to communicating with
              students and providing assessment tasks and feedback.
            </p>

            <div className="guide-search-wrapper mb-5">
              <input
                type="text"
                className="guide-input"
                placeholder="Search all CU-DigiClass and learning technologies support"
              />
              <div className="search-icon">
                <GoSearch className="icon" />
              </div>
            </div>

            <div className="cards row">
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <i class="fa-solid fa-gear card-icon"></i>
                    <h5 class="card-title">CU-DigiClass Guide</h5>
                    <p class="card-text">
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <i class="fa-solid fa-file card-icon"></i>
                    <h5 class="card-title">Lecture Content</h5>
                    <p class="card-text">
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <i class="fa-brands fa-slideshare card-icon"></i>
                    <h5 class="card-title">Live Classes</h5>
                    <p class="card-text">
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <i class="fa-solid fa-book card-icon"></i>
                    <h5 class="card-title">All Staff Guide</h5>
                    <p class="card-text">
                      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="training" className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="section-heading mb-5">
                  <h3>Training And Workshop</h3>
                  <hr />
                </div>

                <p className="mb-3">
                  Learning Environments are providing an extensive set of
                  workshops and resources to support staff teaching with the
                  CU-DigiClass.
                </p>

                <p className="mb-4">
                  These are available to both teaching and professional staff
                  and are designed to be practical and linked to your teaching
                  needs.
                </p>

                {/* <button className="training-btn">Find Out More</button> */}
              </div>
              {/* <div className="col-md-6">
                <div id="carouselExample" class="carousel slide">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="training-card">
                        <p>
                          Explore and learn at your own pace with online
                          learning modules
                        </p>
                        <i class="fa-regular fa-circle-play training-icon"></i>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="training-card">
                        <p>Watch a recording from our CU-DigiClass or TEL workshops</p>
                        <i class="fa-regular fa-circle-play training-icon"></i>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="training-card">
                        <p>Register for a scheduled session</p>
                        <i class="fa-regular fa-circle-play training-icon"></i>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div> */}
              <div className="col-md-6">
              <ReactPlayer
                  className="show-video"
                  url={introVideo}
                  controls={true}
                  sx={{ width: "100%" }}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div id="request" className="py-4">
          <div className="container">
            <div className="section-heading-center mb-5 text-center">
              <h3>Request New Technology</h3>
              <hr />
            </div>

            <p className="mb-4 guide-para">
              You may request a new learning technology to be integrated with
              the CU-DigiClass, or that a new tool be considered for central deployment.
            </p>

            <p className="mb-4 guide-para">
              This is a two step process, and is outlined on the Privacy Impact
              Assessments for learning technologies page.
            </p>

            <div className="text-center">
              <button className="request-btn">Find Out More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
