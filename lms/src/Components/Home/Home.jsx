import React, { useState } from "react";
import "./home.css";
import { BsFillChatLeftTextFill, BsQuestionDiamondFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { AiOutlineRight } from "react-icons/ai";
import { FaPhoneAlt, FaGraduationCap, FaUserFriends } from "react-icons/fa";

import { Routes, Route, Link } from "react-router-dom";
import HomeFooter from "./HomeFooter";

export default function Home() {
  const [secondNavActive, setSecondNavActive] = useState("homeSecondNav_btn");
  const [active, setActive] = useState(1);

  function activate1(e) {
    setActive(1);
  }
  function activate2(e) {
    setActive(2);
  }
  function activate3(e) {
    setActive(3);
  }

  return (
    // <h1 style={{ color: "white" }}>Home</h1>
    <>
      <div className="homeContainer">
        <div className="homeWrapper">
          <h1 className="lms">Learning Management System</h1>
          <p className="smallPara">
            Information and support for the University's centrally-supported
          </p>
          {/* <p className="smallPara">Learning Management System (LMS)</p> */}
        </div>
      </div>

      {/* Seconf Navigation */}
      <div className="homeSecondNav">
        <button
          onClick={activate1}
          value={1}
          className={
            active == 1 ? "homeSecondNav_btn afterwidth" : "homeSecondNav_btn"
          }
        >
          {" "}
          LMS Support for Staff{" "}
        </button>
        <button
          onClick={activate2}
          value={2}
          className={
            active == 2 ? "homeSecondNav_btn afterwidth" : "homeSecondNav_btn"
          }
        >
          LMS Support for Student
        </button>
        <button
          onClick={activate3}
          value={3}
          className={
            active == 3 ? "homeSecondNav_btn afterwidth" : "homeSecondNav_btn"
          }
        >
          Other learning technologies
        </button>
      </div>

      {active == 1 ? (
        <>
          {/* for the staff Support  */}

          <div className="homeContact">
            <div className="homeContact_child">
              <h1 className="lms">Who can I contact?</h1>
              <p>
                Canvas help is available any time with dedicated University of
                India 24/7 helpdesk support channels, including online chat and
                phone.
              </p>
              <p>
                Learning Environments can assist you with further enquiries
                regarding the LMS and other supported learning technologies.
                Simply submit a ServiceNow ticket and we will help you as soon
                as possible
              </p>
            </div>
            <div className="homeContact_child col">
              <div className="iconsContent">
                <BsFillChatLeftTextFill className="icon" /> Online chat with
                Helpdesk{" "}
              </div>
              <div className="iconsContent">
                <FaPhoneAlt className="icon" /> Call Helpdesk
              </div>
              <div className="iconsContent">
                <FaUserFriends className="icon" /> Find your LMS Faculty
                Representative
              </div>
              <div className="iconsContent">
                <FaGraduationCap className="icon" /> Request support from
                Learning Environments{" "}
              </div>
            </div>
          </div>

          <div className="guideSupport">
            {/* <div> */}
            <h1 className="lms">Guides and support resources</h1>
            <p className="guideSupport_p">
              These resources will take you from getting started with the LMS
              and setting up your subjects, through to communicating with
              students and providing assessment tasks and feedback.
            </p>

            <div className="search">
              <input
                type="search"
                id="gsearch"
                name="gsearch"
                className="searchInput"
                placeholder="Search all LMS and learning technologies support"
              />
              <button type="submit" className="searchBtn">
                <GoSearch />
              </button>
            </div>
            <div className="media">
              <div
                className="media_box"
                style={{ borderBottom: "7px solid #99A2AA" }}
              >
                {" "}
                <div>
                  LMS Guide{" "}
                  <span className="mediaSpan">
                    <AiOutlineRight />
                  </span>
                </div>{" "}
              </div>
              <div
                className="media_box"
                style={{ borderBottom: "7px solid #3FA7C2" }}
              >
                {" "}
                <div>
                  Lecture Content
                  <span className="mediaSpan">
                    <AiOutlineRight />
                  </span>
                </div>{" "}
              </div>
              <div
                className="media_box"
                style={{ borderBottom: "7px solid #ECAE65" }}
              >
                {" "}
                <div>
                  Live Classes
                  <span className="mediaSpan">
                    <AiOutlineRight />
                  </span>
                </div>{" "}
              </div>
              <div
                className="media_box"
                style={{ borderBottom: "7px solid #59B17F" }}
              >
                {" "}
                <div>
                  All staff guides
                  <span className="mediaSpan">
                    {" "}
                    <AiOutlineRight />
                  </span>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <div></div> */}
          </div>
          <div className="homeContact">
            <div className="homeContact_child">
              <h1 className="lms">Training and workshops</h1>
              <p>
                Learning Environments are providing an extensive set of
                workshops and resources to support staff teaching with the LMS.
                These are available to both teaching and professional staff and
                are designed to be practical and linked to your teaching needs.
              </p>

              <button className="findMore">
                Find out more
                <span style={{ marginLeft: "5px" }}>
                  <AiOutlineRight />
                </span>
              </button>
            </div>
            <div className="homeContact_child col flex">
              <div className="card flex">
                <div>Register for a scheduled session</div>{" "}
                <button className="roundArrow">
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </button>
              </div>
              <div className="card flex">
                <div>Watch a recording from our LMS or TEL workshops </div>
                <button className="roundArrow">
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </button>
              </div>
              <div className="card flex">
                <div>
                  Explore and learn at your own pace with online learning
                  modules{" "}
                </div>
                <button className="roundArrow">
                  <span className="arrow">
                    <AiOutlineRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="guideSupport" style={{ padding: "100px 0 100px 0" }}>
            {/* <div> */}
            <h1 className="lms">Request a new learning technology</h1>
            <p className="guideSupport_p">
              You may request a new learning technology to be integrated with
              the LMS, or that a new tool be considered for central deployment.
              This is a two step process, and is outlined on the Privacy Impact
              Assessments for learning technologies page.
            </p>

            <button id="findMore">Find out more</button>
          </div>
        </>
      ) : active == 2 ? (
        <>
          {/* for the Student Support */}

          <div className="homeContact">
            <div className="homeContact_child">
              <h1 className="lms">Where can I get LMS help?</h1>
              <p>
                Help is available any time with the Chandigarh University 24/7
                helpdesk support channels, including online chat and phone.
              </p>
              <p>
                For all other student queries please contact Stop 1. Stop 1 can
                help you with admissions, enrolment, course planning,
                administration, support services, and skills and development.
              </p>
            </div>
            <div className="homeContact_child col">
              <div className="iconsContent">
                <BsFillChatLeftTextFill className="icon" /> Online chat with
                Helpdesk{" "}
              </div>
              <div className="iconsContent">
                <FaPhoneAlt className="icon" /> Call Helpdesk
              </div>
              {/* <div className="iconsContent">
                <FaUserFriends className="icon" /> Find your LMS Faculty
                Representative
              </div> */}
              <div className="iconsContent">
                <FaGraduationCap className="icon" /> Contact Stop 1{" "}
              </div>
            </div>
          </div>

          <div className="guideSupport" style={{ padding: "100px 0 100px 0" }}>
            {/* <div> */}
            <h1 className="lms">I have a question about...</h1>
            <p className="guideSupport_p">
              Most questions about using LMS are answered in the LMS Community
              guides. For unique Chandigarh University issues, we will answered
              some common questions below.
            </p>

            <div className="">
              <div className="iconsContent">
                <BsQuestionDiamondFill className="icon" /> Online chat with
                Canvas{" "}
              </div>
              <div className="iconsContent">
                <BsQuestionDiamondFill className="icon" /> Call Canvas
              </div>
              <div className="iconsContent">
                <BsQuestionDiamondFill className="icon" /> Find your LMS Faculty
                Representative
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* for the other technologies */}
          <div className="guideSupport" style={{ padding: "100px 0 100px 0" }}>
            {/* <div> */}
            <h1 className="lms">Request a new learning technology</h1>
            <p className="guideSupport_p">
              You may request a new learning technology to be integrated with
              the LMS, or that a new tool be considered for central deployment.
              This is a two step process, and is outlined on the Privacy Impact
              Assessments for learning technologies page.
            </p>

            <div className="">
              <div className="iconsContent">
                <BsQuestionDiamondFill className="icon" /> Online chat with
                Canvas{" "}
              </div>
              <div className="iconsContent">
                <BsQuestionDiamondFill className="icon" /> Call Canvas
              </div>
              <div className="iconsContent">
                <BsQuestionDiamondFill className="icon" /> Find your LMS Faculty
                Representative
              </div>
            </div>
          </div>
        </>
      )}

      <HomeFooter />
    </>
  );
}
