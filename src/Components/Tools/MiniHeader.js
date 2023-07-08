
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readSubjectsData } from "../../redux/slices/subjects/subjectSliceAction";
import "./MiniHeader.css";
import { readDiscData } from "../../redux/slices/subjects/disciplineSliceAction";
import { createCourse } from "../../redux/slices/courses/coursesActions";
import Modal from "react-modal";
import Cookies from "js-cookie";
import LoadingPage from "../../hoc/LoadingPage";

const MiniHeader = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [subjectArea, setSubjectArea] = useState([]);
  const [selectedSubjectArea, setSelectedSubjectArea] = useState();
  const [showFooter, setShowFooter] = useState(false);
  const data = useSelector((state) => state?.subjectsState);
  const subjectData = useSelector((state) => state?.subjectsState?.subjectData);
  const discData = useSelector((state) => state?.disciplineState?.discData);
  const loadingApi = useSelector((state) => state?.courseState?.lodingApi);

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
    bannerImage: null,
    courseDoc: null,
    courseVideo: null,
    isDraft:"",
  });

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
    setFormData({ ...formData, bannerImage: banner });
  };

  // handle upload docs

  const handleDocFileUpload = (e) => {
    setFormData({ ...formData, courseDoc: e.target.files[0] });
  };

  // handle upload videos

  const handleVideoFileUpload = (e) => {
    setFormData({ ...formData, courseVideo: e.target.files[0] });
  };

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

  const [durationType, setDurationType] = useState();

  const handleAddCourseData = () => {
    dispatch(createCourse(formData));
    setModalIsOpen(false);
    Cookies.remove();
  };
  const handleCourseDraft = (courseId) => {
    setFormData({ ...formData, isDraft: true });
    console.log("Draft----------------", courseId);
  };
  const handleSaveCourse = () => {
    setFormData({ ...formData, isDraft: false });
    console.log("Draft");
  };
  const handleDuration = (e) => {
    if (e.target.value === "2") {
      setDurationType("selectDate");
    } else {
      setDurationType("continuous");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  return (
    <>
      <div className="main">
        <form className="form-container" onSubmit={openModal}>
          <div className="section-heading mb-5">
            <h3 className="mt-0">Create New Course</h3>
            <hr  />
          </div>

          <div id="course-creation-form">
            <div className="row">
              {/* course name */}
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="courseName"
                    id="courseName"
                    placeholder="Enter Course Name"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, courseName: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* author name */}
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="authorName"
                    id="authorName"
                    placeholder="Enter Author Name"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, authorName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {/* subject area */}
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    id="subject"
                    name="subject"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  >
                    <option disabled selected value="">
                      Select Subject
                    </option>
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
                  <select
                    id="discipline"
                    name="discipline"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, discipline: e.target.value })
                    }
                  >
                    <option disabled selected value="">
                      Select Discipline
                    </option>
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
                  <input
                    type="text"
                    name="courseCode"
                    id="courseCode"
                    placeholder="Description :"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, courseCode: e.target.value })
                    }
                  />
                </div>
              </div>
              {/* semester */}
              <div className="col-md-6">
                <div className="form-group">
                  <select
                    id="semester"
                    name="semester"
                    className="form-control"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, semester: e.target.value })
                    }
                  >
                    <option disabled selected value="">
                      Select Semester
                    </option>
                    <option value="1">Semester I</option>
                    <option value="2">Semester II</option>
                    <option value="3">Semester III</option>
                    <option value="4">Semester IV</option>
                    <option value="5">Semester V</option>
                    <option value="6">Semester VI</option>
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
                    <input
                      type="radio"
                      id="availability-true"
                      value="true"
                      name="availability"
                      required
                      checked={formData.availability === "true"}
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          availability: e.target.value,
                        })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="availability-true"
                    >
                      {" "}
                      Yes
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline ">
                    <input
                      type="radio"
                      id="availability-false"
                      value="false"
                      name="availability"
                      checked={formData.availability === "false"}
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          availability: e.target.value,
                        })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="availability-false"
                    >
                      {" "}
                      No
                    </label>
                  </div>
                </div>
              </div>
              {/* duration */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Duration</label>
                  <hr />
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="radio"
                      id="duration-continuous"
                      value="1"
                      name="duration"
                      required
                      checked={formData.duration === "1"}
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({ ...formData, duration: e.target.value })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="duration-continuous"
                    >
                      {" "}
                      Continuous
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline ">
                    <input
                      type="radio"
                      id="duration-selectDates"
                      value="2"
                      name="duration"
                      checked={formData.duration === "2"}
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({ ...formData, duration: e.target.value })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="duration-selectDates"
                    >
                      {" "}
                      Select Dates
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {formData?.duration === "2" ? (
              <>
                <label className="duration-1">Start Date</label>
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dStartDate: e.target.value,
                    })
                  }
                  type="date"
                  required={formData?.duration === "2"}
                  className="mb-4"
                ></input>
                <label className="duration-2">End Date</label>
                <input
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dEndDate: e.target.value,
                    })
                  }
                  type="date"
                  required={formData?.duration === "2"}
                  className="mb-4"
                ></input>
              </>
            ) : null}

            <div className="row">
              {/* default content view */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Default Content View</label>
                  <hr />
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="radio"
                      id="default-content-view-icon"
                      value="1"
                      name="default-content-view"
                      className="custom-control-input me-2"
                      required
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contentView: e.target.value,
                        })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="default-content-view-icon"
                    >
                      {" "}
                      Icon Only
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="radio"
                      id="default-content-view-text"
                      value="2"
                      name="default-content-view"
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contentView: e.target.value,
                        })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="default-content-view-text"
                    >
                      {" "}
                      Text Only
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="radio"
                      id="default-content-view-iconNtext"
                      value="3"
                      name="default-content-view"
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contentView: e.target.value,
                        })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="default-content-view-iconNtext"
                    >
                      {" "}
                      Icon and Text
                    </label>
                  </div>
                </div>
              </div>
              {/* course view option */}
              <div className="col-md-6">
                <div className="form-group">
                  <label>Course View Option</label>
                  <hr />
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="radio"
                      id="ourse-view-default"
                      value="1"
                      name="course-view"
                      required
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({ ...formData, courseView: e.target.value })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="course-view-default"
                    >
                      {" "}
                      Default Course View
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="radio"
                      id="course-view-restricted"
                      value="2"
                      name="course-view"
                      className="custom-control-input me-2"
                      onChange={(e) =>
                        setFormData({ ...formData, courseView: e.target.value })
                      }
                    />
                    <label
                      className="custom-control-label"
                      for="course-view-restricted"
                    >
                      {" "}
                      Restricted Course View
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* upload banner image  */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-3">Banner Image</label>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="file"
                      id="banner-image"
                      name="banner-image"
                      className="custom-control-input"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileUpload}
                      required
                    />
                  </div>
                </div>
              </div>
              {/* upload docs  */}
              <div className="col-md-6">
                <div className="form-group">
                  <label className="mb-3">Upload Docs</label>
                  <div className="custom-control custom-radio custom-control-inline mb-2">
                    <input
                      type="file"
                      id="upload-docs"
                      name="upload-docs"
                      className="custom-control-input"
                      accept=".doc, .pdf, .pptx, .txt, .ppt, .xlsx"
                      onChange={handleDocFileUpload}
                      required
                    />
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
                    <input
                      type="file"
                      id="upload-videos"
                      name="upload-videos"
                      className="custom-control-input"
                      accept=".mp4, .3gp, .mkv, .webm, .mov, .flv"
                      onChange={handleVideoFileUpload}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <button
                  type="submit"
                  id="submit"
                  onClick={handleCourseDraft}
                  className="btn btn-primary btn-block w-100"
                >
                  Save As Draft
                </button>
              </div>

              <div className="col-md-6">
                <button
                  type="submit"
                  id="submit"
                  onClick={handleSaveCourse}
                  className="btn btn-primary btn-block w-100"
                >
                  Submit Course
                </button>
              </div>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              shouldCloseOnOverlayClick={false}
              style={{
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  maxHeight: "90vh",
                  overflow: "auto",
                  backgroundColor: "black",
                  borderRadius: "13px",
                  border: "none",
                  boxShadow: "0px 17px 12px -15px #111",
                },
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              {/* <h2 className="modal=heading"></h2> */}
              <p className="warning-shine">Do you want to add this course!</p>
              <div className="modal-butoons">
                <button className="cancel" onClick={closeModal}>
                  Cancel
                </button>
                <button className="sure-button" onClick={handleAddCourseData}>
                  Submit
                </button>
              </div>
            </Modal>

            <Modal
              isOpen={loadingApi === "loading" ? true : false}
              // onRequestClose={closeModal}
              shouldCloseOnOverlayClick={false}
              style={{
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  maxHeight: "90vh",
                  overflow: "auto",
                  backgroundColor: "transparent",
                  borderRadius: "13px",
                  border: "none",
                },
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              {/* <h2 className="modal=heading"></h2> */}
              <LoadingPage />
            </Modal>
          </div>
        </form>
      </div>
    </>
  );
};

export default MiniHeader;
