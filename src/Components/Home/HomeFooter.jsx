import React from "react";
import { GrReactjs } from "react-icons/gr";
import {
  BsQuestionCircle,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { AiOutlineRight, AiFillFacebook } from "react-icons/ai";

export default function HomeFooter() {
  return (
    <>
      <div className="homeFooterWrapper">
        <div className="homeFooter_head">
          <div className="homeFoot_tile">
            <div className="headicon">
              <GrReactjs />
            </div>
            <div>Login to LMS</div>
          </div>
          <div className="homeFoot_tile">
            <div className="headicon">
              <BsQuestionCircle />
            </div>
            <div>Staff LMS support</div>
          </div>
          <div className="homeFoot_tile">
            <div className="headicon">
              <FaGraduationCap />
            </div>
            <div>Student LMS support</div>
          </div>
          <div className="homeFoot_tile">
            <div className="headicon">
              <SiBookstack />
            </div>
            <div>Learning Enviroment</div>
          </div>
        </div>
      </div>

      <div className="footer_middle">
        <div className="middle_section">
          <div className="middle_section_heading">
            <div>
              <h1
                style={{
                  fontFamily: "none",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                We acknowledge and pay respect to the Traditional Owners of the
                lands upon which our campuses are situated
              </h1>

              <a className="middle_ancher" href="#">
                Read about our commitment to reconciliation{" "}
              </a>
            </div>
          </div>

          {/* <div className=""> */}
          <div className="middle_section_button">
            <a href="#" className="middle_ancher">
              About us
            </a>
            <a href="#" className="middle_ancher">
              Carrers at CU
            </a>
            <a href="#" className="middle_ancher">
              Safety and respect
            </a>
            <a href="#" className="middle_ancher">
              News Room
            </a>
            <a href="#" className="middle_ancher">
              Contact
            </a>
          </div>
        </div>
        <div className="middle_section">
          <img
            src="https://www.cuchd.in/includes/assets/images/header-footer/cu-logo-white.webp"
            alt="logo"
          />
          <div className="iconContainer">
            <a className="social_icons">
              <AiFillFacebook />
            </a>
            <a className="social_icons">
              <BsTwitter />
            </a>
            <a className="social_icons">
              <BsLinkedin />
            </a>
            <a className="social_icons">
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
