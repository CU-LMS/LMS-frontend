import React, { useEffect, useState } from "react";
import FormFieldTwo from "./FormFieldTwo";
import FormFieldThree from "./FormFieldThree";
import FormFieldFour from "./FormFieldFour";
import FormFieldFive from "./FormFieldFive";
import FormFieldSix from "./FormFieldSix";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { useSpring, animated } from "react-spring";
import { Element, scroller } from "react-scroll";
import FormFooter from "./FormFooter";
import Multiselect from "multiselect-react-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { courseCreate } from "../../redux/slices/authentication/courseCreateSlice";
import { readSubjectsData } from "../../redux/slices/subjects/subjectSliceAction";
import "./MiniHeader.css";
import { readDiscData } from "../../redux/slices/subjects/disciplineSliceAction";
import { createCourse } from "../../redux/slices/courses/coursesActions"
import FormFieldPictureUpload from "./FormFieldFivePictureUpload";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineBars } from 'react-icons/ai';
import Sidebar from "./Sidebar";
import BaseHeader from "./BaseHeader";

const MiniHeader = () => {
  const [options] = useState([
    "Hobbies",
    "Languages",
    "Mathematics",
    "Medicine & Health",
    "Physical Education",
    "Vocational",
  ]);

  const [name, setName] = useState("");
  const [subjectArea, setSubjectArea] = useState([]);
  const [selectedSubjectArea, setSelectedSubjectArea] = useState();
  const [showFooter, setShowFooter] = useState(false);
  const data = useSelector((state) => state?.subjectsState);
  const subjectData = useSelector((state) => state?.subjectsState?.subjectData);
  const discData = useSelector((state) => state?.disciplineState?.discData);
  
  const [formData, setFormData] = useState({
    courseName: "",
    authorName: "",
    subject: "",
    discipline: "",
    courseCode: "",
    semester: "",
    availability: "",
    duration: "",
    courseView: "",
    contentView: "",
    dStartTime: "",
    dEndTime: "",
    bannerImage: null
  });
  console.log(discData);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(readSubjectsData());
    dispatch(readDiscData());
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

   // handle file upload 
   const handleFileUpload = (e) => {
    let banner = e.target.files[0];
    setFormData({ ...formData, bannerImage: banner })
  }
  // Scroll to the bottom when footer is clicked
  const scrollToBottom = () => {
    scroller.scrollTo("footer", {
      duration: 500,
      smooth: true,
    });
  };

  const animationProps = useSpring({
    bottom: showFooter ? "0px" : "-100px",
    config: {
      tension: 300,
      friction: 30,
    },
  });

  // Attach scroll event listener on component mount
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const star = (
    <img src="https://learn.content.blackboardcdn.com/3900.67.0-rel.9+1b5c39c/images/ci/icons/required.gif" />
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
  });

  const [durationType, setDurationType] = useState();

  const handleAddCourseData = () => {    
    dispatch(createCourse(formData))
  };

  const handleDuration = (e) => {
    if (e.target.value === "2") {
      setDurationType("selectDate");
    } else {
      setDurationType("continuous");
    }
  };

  return (
    <>

      {/* <div className="background-picture"></div> */}
      <div className="body-nav">
        <BaseHeader/>

        <div className="body-scroll">
          <div className="base-header2">
            <div className="base-header-1">
              <p className="base-heading2">Administrator Panel </p>
              <p className="base-heading2-1">Courses</p>
              <p className="base-heading2-2">Create Courses</p>
            </div>
            <div className="base-header-2">
              <div className="tooltip">
                <p className="base-heading3">
                  <BsFillPatchQuestionFill size={20} />{" "}
                </p>
                <span class="tooltiptext">Help is ON: Click to hide page.</span>
              </div>
            </div>
          </div>

          <div className="create-courses">
            <p className="courses"> Create Courses</p>
          </div>
          <div className="box1">
            <span>
              {" "}
              <p className="warning">{star} Indicates a required field.</p>{" "}
            </span>
            <div className="general">
              <span>
                {" "}
                <p className="base-heading2">General Information</p>
              </span>
            </div>
            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">{star} Course Name :</p>{" "}
              </div>
              <div className="form-field2">
                <input
                  type="text"
                  placeholder="Enter Course Name"
                  className="input-text1"
                  name="courseName"
                  onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                />
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">{star} Author :</p>{" "}
              </div>
              <div className="form-field2">
                <input
                  type="text"
                  placeholder="Enter Author Name"
                  className="input-text1"
                  name="authorName"
                  onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                />
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">Subject Area:</p>{" "}
              </div>
              <div className="form-field1">
                <select
                  className="input-text1"
                  name="staticSubjectArea"
                  id="subjects"
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option>Select Subject</option>
                  {subjectData?.length > 0 && subjectData
                    ? subjectData?.map((ele) => {
                      return (
                        <>
                          <option value={ele?.subjectId}>
                            {ele?.subjectName}
                          </option>
                        </>
                      );
                    })
                    : null}
                </select>
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">Discipline:</p>{" "}
              </div>
              <div className="form-field1">
                <select
                  className="input-text1"
                  name="discipline"
                  id="discipline"
                  onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                >
                  <option>Select discipline</option>
                  {discData?.length > 0 && discData
                    ? discData?.map((ele) => {
                      return (
                        <>
                          <option value={ele?.disciplineId}>
                            {ele?.disciplineName}
                          </option>
                        </>
                      );
                    })
                    : null}
                </select>
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course"> Course Code :</p>{" "}
              </div>
              <div className="form-field2">
                <textarea
                  className="input-desc"
                  placeholder="Start Typing Here..."
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  onChange={(e) => setFormData({ ...formData, courseCode: e.target.value })}
                ></textarea>
              </div>
            </div>

            <div className="real-form">
              <div className="form-field1">
                <p className="name-course">Semester:</p>{" "}
              </div>
              <div className="form-field1">
                <select
                  className="input-text3"
                  name="subjects"
                  id="subjects"
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                >
                  <option value="1">Semester I</option>
                  <option value="2">Semester II</option>
                  <option value="3">Semester III</option>
                  <option value="4">Semester IV</option>
                </select>
              </div>
            </div>
            <div className="tab2">
              <hr />
              <form className="available">
                <strong>
                  <p className="headingtwo">Availability</p>
                </strong>
                {/* <hr
            className="line"
            style={{
              color: "black",
              height: 1,
            }}
          /> */}

                <div className="available2">
                  <p className="avai">Available</p>
                  <input
                    type="radio"
                    id="available-yes"
                    name="available-yes"
                    value="true"
                    checked={formData.availability === "true"}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  />
                  <label htmlFor="available-yes">Yes</label>
                  <br />
                  <input
                    type="radio"
                    id="available-no"
                    name="available"
                    value="false"
                    checked={formData.availability === "false"}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  />
                  <label htmlFor="available-no" >No</label>
                  <br />
                </div>

                <hr />

                <div className="available2">
                  <p className="avai">Duration</p>
                  <input
                    type="radio"
                    id="duration-1"
                    name="continuous"
                    checked={formData.duration === "continuous"}
                    value="continuous"
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  />
                  <label htmlFor="duration-1">Continuous</label>
                  <br />
                  <input
                    type="radio"
                    id="duration-2"
                    name="Select-dates"
                    checked={formData.duration === "selectDate"}
                    value="selectDate"
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  />
                  <label htmlFor="duration-2" >Select Dates</label>
                  <br />
                  {/* <input
                    type="radio"
                    id="available"
                    name="Select Dates"
                  
                  /> */}
                  {formData.duration === "selectDate" ? <>
                    <label className="duration-1">Start Date</label>
                    <input onChange={(e) => setFormData({ ...formData, dStartTime: e.target.value })} type="date"></input>
                    <label className="duration-2">End Date</label>
                    <input onChange={(e) => setFormData({ ...formData, dEndTime: e.target.value })} type="date"></input>
                  </> : null}
                  {/*   <label for="no">Days from the Date of Enrollment</label>{" "}
                  {"   "}
                  <span>
                    <input
                      className="input-text3"
                      type="text"
                      id="days"
                      name="enrollment"
                    />
                  </span> */}
                </div>
              </form>
            </div>

            <div className="tab2">
              <hr />
              <div className="course-view-option">
                <strong>
                  <p className="headingtwo">Course View option</p>
                </strong>

                <div className="available2">
                  <div className="threeLine">
                    <p className="three">Choose a course view</p>
                    <p className="three">Option</p>
                    <u className="que">what's the difference?</u>
                    <br />
                  </div>
                  <input
                    type="radio"
                    id="available"
                    name="available"

                    value="1"
                    onChange={(e) => setFormData({ ...formData, courseView: e.target.value })}
                  />
                  <label for="yes"> Default Course View</label>
                  <br />
                  <p className="que1">
                    This course uses the Original Course View. Instructors can't
                    change the course view.
                  </p>
                  <br />
                  <input
                    type="radio"
                    id="available"
                    name="available"
                    value="2"
                    onChange={(e) => setFormData({ ...formData, courseView: e.target.value })}
                  />
                  <label for="no">Restricted Course View</label>
                  <br />
                  <p className="que1">
                    This course uses the Ultra Course View. Instructors can't
                    change the course view.
                  </p>
                  <br />
                </div>
              </div>
            </div>

            <div className="tab2">
              <hr />
              <div className="guest">
                <strong>
                  <p className="headingtwo">Categories</p>
                </strong>

                <div className="no-cato">
                  <p> No categories are found. </p>
                </div>
              </div>
            </div>

            <div className="tab2">
              <hr />
              <div className="banner">
                <strong>
                  <p className="headingtwo">Banner</p>
                </strong>
                <p className="bannerpara">
                  In Original Course View courses, the banner displays at the
                  top of the course's entry point page. In Ultra Course View
                  courses, it displays at the top of the Course Content Page.
                </p>
                <div className="banner-image">
                  <strong>Current Banner Image</strong>
                </div>

                <hr />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="file" style={{ marginRight: '20px' }} onChange={handleFileUpload} />
                </div>
              </div>
            </div>

            <div className="tab2">
              <hr />
              <div className="available2">
                <div className="available">
                  <strong>
                    <p className="content-view-only"> Default Content View</p>
                  </strong>
                  <input
                    type="radio"
                    id="available"
                    name="available"
                    value="1"
                    onChange={(e) => setFormData({ ...formData, contentView: e.target.value })}
                  />
                  <label for="yes">Icon Only</label>
                  <br />
                  <input
                    type="radio"
                    id="available"
                    name="available"
                    value="2"
                    onChange={(e) => setFormData({ ...formData, contentView: e.target.value })}
                  />
                  <label for="yes">Text Only</label>
                  <br />
                  <input
                    type="radio"
                    id="available"
                    name="available"
                    value="3"
                    onChange={(e) => setFormData({ ...formData, contentView: e.target.value })}
                  />
                  <label for="no">Icon And text</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="tab2">
            <div className="footerTool">
              <div className="leftFooter">Click Submit to proceed</div>
              <div className="rightFooter">
                <button className="cancel">Cancel</button>
                <button
                  onClick={handleAddCourseData}
                  className="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniHeader;
