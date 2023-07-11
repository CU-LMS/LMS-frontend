import React, { useEffect, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./feedbackform.css";
import { GetConfigureData } from "../../redux/slices/courses/coursesActions";
import {createFeedback} from "../../redux/slices/ratingCourse/RatingCourseAction";

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

  const feedbackType = configureData.find(x => x.moduleId == 3)?.configurations;
  const feedbackCategory = configureData.find(x => x.moduleId == 4)?.configurations;
 
  const [formData , setFormData] = useState({
    id:0,
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
    console.log("feedback data",formData);
    dispatch(createFeedback(formData));
   
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
          <Form autoComplete="off" className="">
            <div className="text-primary text-center mb-4">
              {/* <bd.icons.Email style={{ fontSize: 50 }} /> */}
            </div>

            <div className="col-6-area">
              <div className="form-group">
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
                        <option value={ele?.configurationId}>
                          {ele?.value}
                        </option>
                      </>
                    );
                  })
                  }

                </select>
              </div>
            </div>


            <div className="col-6-area">
              <div className="form-group">
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
                    Select Types
                  </option>

                  {feedbackCategory?.map((ele) => {
                    return (
                      <>
                        <option value={ele?.configurationId}>
                          {ele?.value}
                        </option>
                      </>
                    );
                  })
                  }
                </select>
              </div>
            </div>
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
                onChange={(e) =>
                  setFormData({ ...formData, descriptions: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, mobile_Number: e.target.value })
                }
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
            <button type="button" onClick={handlefeedbackData} className=" form-btn btn btn-danger">
              SUBMIT
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FeedbackForm;
