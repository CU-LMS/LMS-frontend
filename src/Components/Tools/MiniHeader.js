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
      <div className="main">
        {/* <BaseHeader/> */}

        <div className="form-container">


          <div className="section-heading mb-5">
            <h3 className="mt-0">Create New Course</h3>
            <hr />
          </div>


          <form id="course-creation-form">
            <div className="row">
              {/* course name */}
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" name="courseName" id="courseName" placeholder="Enter Course Name" className="form-control" required />
                </div>
              </div>
              {/* author name */}
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" name="authorName" id="authorName" placeholder="Enter Author Name" className="form-control" required />
                </div>
              </div>
            </div>

            <div className="row">
              {/* subject area */}
              <div className="col-md-6">
                <div className="form-group">
                  <select id="subject" name="subject" className="form-control" required>
                    <option disabled selected value>Select Subject</option>
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
              {/* discipline */}
              <div className="col-md-6">
                <div className="form-group">
                  <select id="discipline" name="discipline" className="form-control" required>
                    <option disabled selected value>Select Discipline</option>
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
            </div>

            <div className="row">
              {/* course code */}
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" name="courseCode" id="courseCode" placeholder="Enter Course Code" className="form-control" required />
                </div>
              </div>
              {/* semester */}
              <div className="col-md-6">
                <div className="form-group">
                  <select id="semester" name="semester" className="form-control" required>
                    <option disabled selected value>Select Semester</option>
                    <option value="1">Semester I</option>
                    <option value="2">Semester II</option>
                    <option value="3">Semester III</option>
                    <option value="4">Semester IV</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {/* availability */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Availability</label>
                  <hr />
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="availability-true" value="true" name="availability" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="availability-true"> True</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline ">
                    <input type="radio" id="availability-true" value="false" name="availability" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="availability-true"> False</label>
                  </div>
                </div>
              </div>
              {/* duration */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Duration</label>
                  <hr />
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="duration-continuous" value="continuous" name="duration" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="duration-continuous"> Continuous</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline ">
                    <input type="radio" id="duration-selectDates" value="selectDates" name="duration" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="duration-selectDates"> Select Dates</label>
                  </div>
                </div>
              </div>
            </div>

            {formData.duration === "selectDates" && <div className="row mb-4" style={{ backgroundColor: '#f1f1f1', padding: '20px 0' }}>
              <div className="col-md-6">
                <label className="duration-1">Start Date</label>
                <input className="custom-control-input" onChange={(e) => setFormData({ ...formData, dStartTime: e.target.value })} type="date" />
              </div>
              <div className="col-md-6">
                <label className="duration-2">End Date</label>
                <input className="custom-control-input" onChange={(e) => setFormData({ ...formData, dEndTime: e.target.value })} type="date" />
              </div>
            </div>}



            <div className="row">
              {/* default content view */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Default Content View</label>
                  <hr />
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="default-content-view-icon" value="icon-only" name="default-content-view" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="default-content-view-icon"> Icon Only</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="default-content-view-text" value="text-only" name="default-content-view" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="default-content-view-text"> Text Only</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="default-content-view-iconNtext" value="text-and-icon" name="default-content-view" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="default-content-view-iconNtext"> Icon and Text</label>
                  </div>
                </div>
              </div>
              {/* course view option */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Course View Option</label>
                  <hr />
                  <div className="custom-control custom-radio custom-control-inline mb-2" >
                    <input type="radio" id="course-view-default" value="default" name="course-view" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="course-view-default"> Default Course View</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="course-view-restricted" value="restricted" name="course-view" className="custom-control-input me-2" />
                    <label className="custom-control-label" for="course-view-restricted"> Restricted Course View</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                      
                </div>
              </div>
            </div>

            <div className="row">
              {/* upload banner image  */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-3">Banner Image</label>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="file" id="banner-image" name="banner-image" className="custom-control-input" />
                  </div>
                </div>
              </div>
              {/* upload docs  */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-3">Upload Docs</label>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="file" id="upload-docs" name="upload-docs" className="custom-control-input" accept='.doc, .pdf, .pptx, .txt, .ppt, .xlsx'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              {/* upload video */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-3">Upload Videos</label>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input type="file" id="upload-videos" name="upload-videos" className="custom-control-input" />
                  </div>
                </div>
              </div>
            </div>



            <div className="row">
              <div className="col-md-12">
                <button type="submit" id="submit" className="btn btn-primary btn-block w-100">Submit Course</button>
              </div>
            </div>

          </form>


        </div >
      </div >
    </>
  );
};

export default MiniHeader;
