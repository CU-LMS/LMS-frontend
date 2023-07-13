import React, { useEffect, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./feedbackform.css";
import { GetConfigureData } from "../../redux/slices/courses/coursesActions";
import { createFeedback } from "../../redux/slices/ratingCourse/RatingCourseAction";

const FeedbackForm = () => {
  const dispatch = useDispatch();

  const [openRights, setOpenRights] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [announcementText, setAnnouncementtext] = useState();
  const [roleList, setRoleList] = useState([]);
  const [configraData, setConfigraData] = useState("");
  const [dropdownType, setDropdownType] = useState("");

  const configureData = useSelector(
    (state) => state?.courseState?.announcementList
  );

  const feedbackType = configureData.find(
    (x) => x.moduleId == 3
  )?.configurations;
  const feedbackCategory = configureData.find(
    (x) => x.moduleId == 4
  )?.configurations;

  const [formData, setFormData] = useState({
    id: 0,
    feedbackType: "",
    feedbackCategory: "",
    descriptions: "",
    userName: "",
    email: "",
    mobile_Number: "",
  });

  useEffect(() => {
    dispatch(GetConfigureData());
  }, []);

  const handlefeedbackData = () => {
    console.log("feedback data", formData);
    dispatch(createFeedback(formData));
  };

  const submitAfterValidation = (e) => {
    e.preventDefault();
    handlefeedbackData();
  };

  const reset = () => {
    setFormData({
      id: 0,
      feedbackType: "",
      feedbackCategory: "",
      descriptions: "",
      userName: "",
      email: "",
      mobile_Number: "",
    });
  };

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
          <Form
            autoComplete="off"
            className="was-validated"
            onSubmit={submitAfterValidation}
          >
            <div className="text-primary text-center mb-4"></div>

            <div className="form-floating mb-3 mt-3">
              <select
                id="accessType"
                name="accessType"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, feedbackType: e.target.value })
                }
                required
              >
                <option disabled selected value="">
                  Select Types
                </option>
                {feedbackType?.map((ele) => {
                  return (
                    <>
                      <option value={ele?.configurationId}>{ele?.value}</option>
                    </>
                  );
                })}
              </select>
              <label for="type">
                What type of feedback would you like to send?
              </label>
            </div>

            <div className="form-floating mb-3 mt-3">
              <select
                id="accessType"
                name="accessType"
                className="form-control"
                onChange={(e) =>
                  setFormData({ ...formData, feedbackCategory: e.target.value })
                }
                required
              >
                <option disabled selected value="">
                  Select Category
                </option>

                {feedbackCategory?.map((ele) => {
                  return (
                    <>
                      <option value={ele?.configurationId}>{ele?.value}</option>
                    </>
                  );
                })}
              </select>
              <label for="category">Select the category of your feedback</label>
            </div>

            <div className="form-floating mb-3 mt-3">
              <input
                className="form-control"
                type="textarea"
                id="message"
                name="message"
                maxLength={100}
                placeholder="Message"
                onChange={(e) =>
                  setFormData({ ...formData, descriptions: e.target.value })
                }
                style={{ height: 100 }}
                required
              />
              <label for="fullname">Enter your feedback:</label>
            </div>

            <h5>
              Please provide your details so that we can respond to you and
              inform you that we have received them.
            </h5>

            <div className="form-floating mb-3 mt-3">
              <input
                className="form-control"
                name="fullName"
                id="fullName"
                maxLength={30}
                type="text"
                placeholder="FullName"
                autoComplete="off"
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
                required
              />
              <label for="fullname">Full Name</label>
            </div>

            <div class="form-floating mb-3 mt-3">
              <input
                className="form-control"
                name="email"
                id="email"
                type="email"
                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                maxLength={45}
                placeholder="yourName@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <label for="email">Email address</label>
            </div>

            <div class="form-floating mt-3 mb-3">
              <input
                type="tel"
                name="mobileNumber"
                id="mobileNumber"
                pattern="[0-9]{10}"
                placeholder="M.No"
                className="form-control"
                autoComplete="off"
                maxLength={12}
                onChange={(e) =>
                  setFormData({ ...formData, mobile_Number: e.target.value })
                }
                required
              />
              <label for="mobilenumber">Mobile No</label>
            </div>

            <button type="reset" onClick={reset} className=" btn btn-dark">
              RESET
            </button>
            <button type="submit" className=" form-btn btn btn-danger">
              SUBMIT{""}
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
