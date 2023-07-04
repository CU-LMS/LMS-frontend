import React from "react";
import "./Footer.css";
import Stack from "@mui/material/Stack";
import { MdOutlineFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom/dist";
const Footer = () => {
  return (
    <div className="global-footer">
      <div>
        <Stack spacing={2}>
          <div className="contact-us">Contact Us</div>
          <div className="college-name">Chandigarh University</div>
          <div className="">
            <p className="paragraph">CHANDIGARH UNIVERSITY, NH-05,</p>
            <p className="paragraph">
              Ludhiana - Chandigarh State Highway, Gharuan
            </p>
            <p className="paragraph"> Punjab 140413</p>
          </div>
          <div>
            <Stack direction="row">
              <a
                className="contact"
                href="https://www.cuchd.in/"
                target="_blank"
              >
                Visit us at cuchd.in
              </a>
            </Stack>
          </div>
        </Stack>
      </div>
      <div>
        <h1 className="">Follow us</h1>
        <Link
          target="_blank"
          to="https://www.facebook.com/chandigarhuniversitygharuan/"
        >
          <MdOutlineFacebook className="icons" />
        </Link>
        <Link
          target="_blank"
          to="https://in.linkedin.com/company/chandigarh-university123"
        >
          <AiFillLinkedin className="icons" />
        </Link>
        <Link
          target="_blank"
          to="https://www.instagram.com/chandigarhuniversity/?hl=en"
        >
          <AiFillInstagram className="icons" />
        </Link>

        <Link target="_blank" to="https://twitter.com/Chandigarh_uni">
          <AiOutlineTwitter className="icons" />
        </Link>
        <Stack>
          <h1>Call us</h1>
          <a className="contact" href="tel:1800121288800" target="_blank">
            1800121288800
          </a>
        </Stack>
      </div>
      <div>
        <h2>Locate us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13713.497204032115!2d76.58556922074216!3d30.764072546287455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffb140bd63e07%3A0x68591e334d17a988!2sChandigarh%20University!5e0!3m2!1sen!2sin!4v1687799130570!5m2!1sen!2sin"
          width="420"
          height="320"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
