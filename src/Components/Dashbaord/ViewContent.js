import React from "react";
import { useState, useEffect } from "react";
import headerImage from "../../asset/swayam_logo.png";
import headerImage2 from "../../asset/NPTEL_logo_128.png";
import booksgif from "../../asset/books2.gif";
import cert from "../../asset/cert.gif";
import certificate2 from "../../asset/certificate2.gif";
import "./ViewContent.css";
import SocialMediaIcons from "./SocialMediaIcons";

const ViewContent = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsFixed(scrollTop > 0); // Set a condition based on scroll position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed-header ${isFixed ? "fixed" : ""}`}>
        <div className="content-view">
          <div className="left-view-header">
            <img className="headerImage1" src={headerImage} />{" "}
            <img className="headerImage2" src={headerImage2} />
          </div>
          <div className="right-view-header">
            <li className="list-view">
              <p> About Swayam </p>
            </li>
            <li className="list-view">
              <p> All Courses</p>
            </li>
            <li className="list-view">
              <p> SIGN-IN / REGISTER</p>
            </li>
          </div>
        </div>
      </header>
      <div className="linecolor"></div>
      <div className="main-header-view">
        <p className="mini-header-view-heading">Courses</p>
        <p className="heading-view">Advanced Aquaculture Technology</p>
        <p className="teacher-name">By Prof. Gourav Dhar Bhowmick</p>
        <p className="teacher-background"> IIT Kharagpur</p>
        <div className="buttonAndEnrolled">
          <button className="join-button">Join</button>{" "}
          <p>Learners enrolled:</p>
          <p className="count-enroll"> 300</p>
        </div>
      </div>
      <div className="body-view">
        <div className="left-body-view">
          <div className="video-view">
            <iframe
              className="video-thumb"
              src="https://www.youtube.com/embed/Vr9qDP9LGO0?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div className="right-body-view">
          <div className="summary-view"> Summary</div>
          <table
            className="header6"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tbody>
              <tr>
                <td nowrap="nowrap">Course Status :</td>

                <td>Upcoming</td>
              </tr>
              <tr>
                <td>Course Type :</td>

                <td>Elective</td>
              </tr>
              <tr>
                <td>Duration :</td>

                <td>12 weeks</td>
              </tr>
              <tr>
                <td>Category :</td>
                <td>
                  <li>Agricultural and Food Engineering</li>
                </td>
              </tr>
              <tr>
                <td>Credit Points :</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Level :</td>
                <td>Undergraduate/Postgraduate</td>
              </tr>
              <tr>
                <td>Start Date :</td>

                <td>24 Jul 2023</td>
              </tr>
              <tr>
                <td>End Date :</td>

                <td>13 Oct 2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="books-reference">
        <div className="left-book">
          <p className="heading-view-books">Books and Reference</p>
          <p>Wheatom, F.W. ""Aquacultural Engineering"". John Wiley, 1997. </p>
          <p>Bose, AN., Ghosh, S.N. Yang C.T. and Mitra </p>
        </div>
        <div className="right-book">
          <img className="books-image" src={booksgif} />
        </div>
      </div>

      <div className="books-reference2">
        <div className="right-book2">
          <img className="books-image2" src={cert} />
        </div>
        <div className="left-book">
          <p className="heading-view-books">Course certificate</p>
          <p>Wheatom, F.W. ""Aquacultural Engineering"". </p>
        </div>
      </div>
    </>
  );
};

export default ViewContent;
