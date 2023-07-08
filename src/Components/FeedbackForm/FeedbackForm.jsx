import React, { useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";

import "./feedbackform.css";

const FeedbackForm = () => {
  return (
    <>
      <div className="main-header p-3 my-3 mx-auto">
        <div className="feedback-header">
          <h3 className=" form-h mt-3">Feedback Form</h3>
          <p className="form-p">
            Chandigarh University is committed to providing the best possible
            educational experience. As part of this commitment, we welcome
            feedback to assist us to continuously improve the quality of
            teaching, administrative and support services. Your feedback may
            take the form of a complaint, compliment or suggestion.
          </p>
        </div>
        <div className=" top-header p-3 my-3 mx-auto">
          <Form autoComplete="off" className="">
            <div className="text-primary text-center mb-4">
              {/* <bd.icons.Email style={{ fontSize: 50 }} /> */}
            </div>
            <FloatingLabel
              label="What type of feedback would you like to send?"
              for="validationServer01"
              className="dense has-icon mb-3"
            >
              <Form.Select name="type" placeholder="Program">
                <option>Selected Type</option>

                <option>Comment</option>
                <option>Suggestion</option>
                <option>Question</option>
                <option>Concern</option>
                <option>Others</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              label="Select the category of your feedback"
              for="validationDefault01"
              className="dense has-icon mb-3"
            >
              <Form.Select name="type" placeholder="Program">
                <option>Selected Category</option>

                <option>About The University</option>
                <option>Admission</option>
                <option>Academics</option>
                <option>Student Services</option>
                <option>Others</option>
              </Form.Select>
            </FloatingLabel>
            <FloatingLabel
              label="Enter your feedback:"
              for="validationDefault04"
              className="form-textA  mb-3"
            >
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Message"
                id="validationDefault04"
                style={{ height: 100 }}
                required
              />
            </FloatingLabel>
            <h5>
              Please fill your details to respond you to let you know that we
              have received it.
            </h5>

            <FloatingLabel label="Full Name" className="dense mb-3">
              <Form.Control
                name="fullName"
                type="text"
                placeholder="FullName"
                autoComplete="off"
                id="validationDefault02"
                required
              />
            </FloatingLabel>

            <FloatingLabel
              label="Email address"
              for="validationDefault01"
              className="dense has-icon mb-3"
            >
              <Form.Control
                name="email"
                type="email"
                placeholder="yourName@gmail.com"
                id="validationDefault01"
                required
              />
            </FloatingLabel>

            <FloatingLabel label="Mobile No" className="dense mb-3">
              <Form.Control
                name="mobileNumber"
                type="text"
                placeholder="M.No"
                autoComplete="off"
                id="validationDefault02"
                required
              />
            </FloatingLabel>

            {/* <button
            color="primary"
            size="lg"
            type="button"
            className=" form-btn d-block m-auto w-100"
            style={{ height: 40 }}
          >
            Send Feedback
          </button> */}

            <button type="button" className=" btn btn-dark">
              RESET
            </button>
            <button type="button" className=" form-btn btn btn-danger">
              SUBMIT
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
