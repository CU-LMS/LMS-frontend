import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Multiselect from "multiselect-react-dropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  AddAnnouncementButton,
  GetConfigureData,
  readCourseDataAnounc,
  readCourseData,
  getRoleListData,
} from "../../../redux/slices/courses/coursesActions";

import "./CreateAnnouncement.css";
import { readSubjectsData } from "../../../redux/slices/subjects/subjectSliceAction";
import LoadingPage from "../../../hoc/LoadingPage";

const CreateAnnouncement = () => {
  const dispatch = useDispatch();
  const [openRights, setOpenRights] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [announcementText, setAnnouncementtext] = useState();
  const [roleList, setRoleList] = useState([]);
  const [configraData, setConfigraData] = useState("");
  const [dropdownType, setDropdownType] = useState("");
  const [dropDownSubjectType, setDropDownSubjectType] = useState("");
  const [anouncCourseId, setAnouncCourseId] = useState("");
  const [anounceSubjectId, setAnounceSubjectId] = useState("");
  const [accessId, setAccessId] = useState("");

  const subjectData = useSelector((state) => state?.subjectsState?.subjectData);
  console.log("AYEGAAA", subjectData);

  const announcementData = useSelector(
    (state) => state?.courseState?.announcementList
  );
  const anouncCourseList = useSelector(
    (state) => state?.courseState?.courses
  );
  const announceCourseWise = useSelector(
    (state) => state?.courseState?.courses
  );

  const listData = useSelector((state) => state?.courseState?.getRoleList);
  const addUserLoading = useSelector(
    (state) => state?.courseState?.addUserLoading
  );

  const onSelect = (selectList, selectedItem) => {
    console.log(selectList);
    let tsl = [];
    if (selectList?.length > 0) {
      selectList?.forEach((ele) => {
        tsl.push(ele.cat);
      });
    }
    setRoleList(tsl);
  };

  const onConfigrationChange = (e) => {
    setDropdownType(e.target.value);
    setDropDownSubjectType(e.target.value);
    setConfigraData(e.target.value);
  };

  const onBindAccessIdChange = (e) => {
    setAccessId(e.target.value);
    console.log("Access Id----", e.target.value);
  };

  const handleInputChange = (event) => {
    setAnnouncementtext(event.target.value);
  };

  const handleAddAnnouncementData = () => {
    let announcData = {
      configraData,
      roleList,
      announcementText,
      accessId,
    };
    console.log(announcData, "DDDDDDDDAAAAAAAAA");

    dispatch(AddAnnouncementButton(announcData));
    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
  };

  const openDoAndDonts = () => {
    setOpenRights(true);
  };

  const modalClose = () => {
    setOpenRights(false);
  };

  useEffect(() => {
    dispatch(GetConfigureData());
    dispatch(getRoleListData());
   
  }, []);

  return (
    <>
      {console.log(roleList)}
      <div className="modalParent">
        <button className="openModal" onClick={openModal}>
          Create Announcement
        </button>
      </div>
      <Modal
        isOpen={openRights}
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
            width:"60%"
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {/* <h2 className="modal=heading"></h2> */}
        <p className="warning-shine">Do's</p>
        <p className="passage123">Its component-based architecture and efficient rendering make it a powerful tool for developers. However, creating user interfaces in React.js requires careful consideration of best practices to ensure optimal performance, maintainability, and usability. In this article, we will explore the do's and don'ts of creating user interfaces in React.js.</p>
        <p className="warning-shine">Don'ts</p>
        <p className="passage123">Its component-based architecture and efficient rendering make it a powerful tool for developers. However, creating user interfaces in React.js requires careful consideration of best practices to ensure optimal performance, maintainability, and usability. In this article, we will explore the do's and don'ts of creating user interfaces in React.js.</p>
        <div className="modal-butoons">
          <button className="sure-button" onClick={modalClose}>
            Sure
          </button>
        </div>
      </Modal>

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
            width: "50%",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {" "}
        <div className="add-user-heading">Add Announcement</div>
        <div className="col-6-area">
          <div className="form-group">
            <select
              id="accessType"
              name="accessType"
              className="form-control"
              onChange={onConfigrationChange}
              required
            >
              <option disabled selected value="">
                Access Type
              </option>

              {announcementData[1]?.configurations?.map((ele) => {

            
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
        {dropdownType == "6" ? (
          <>
            <div className="col-6-area">
              <div className="form-group">
                <select
                  id="accessType"
                  name="accessType"
                  className="form-control"
                  onChange={onBindAccessIdChange}
                  required
                >
                  <option disabled selected value="">
                    Course List
                  </option>

                  {anouncCourseList?.length > 0
                    ? anouncCourseList?.map((ele) => {
                        return (
                          <>
                            <option value={ele?.courseId}>
                              {ele?.courseName}
                            </option>
                          </>
                        );
                      })
                    : null}
                </select>
              </div>
            </div>
          </>
        ) : null}
        {dropDownSubjectType == "5" ? (
          <>
            <div className="col-6-area">
              <div className="form-group">
                <select
                  id="accessType"
                  name="accessType"
                  className="form-control"
                  onChange={onBindAccessIdChange}
                  required
                >
                  <option disabled selected value="">
                    Subject Area
                  </option>

                  {subjectData?.length > 0
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
          </>
        ) : null}
        {listData?.length > 0 ? (
          <>
            <Multiselect
              style={{
                content: {
                  backgroundColor: "#ECF0F4",
                  borderRadius: "5px",
                  maxHeight: "50px",
                },
              }}
              displayValue="key"
              className="multi-select"
              isObject={true}
              onRemove={(event) => {}}
              onSelect={onSelect}
              options={listData}
              selectionType="counter"
              selectedValues={[]}
              placeholder="Apply For..."
            />
          </>
        ) : null}
        <div className="mb-3">
          <label for="validationTextarea" className="form-label"></label>
          <textarea
            type="text"
            value={announcementText}
            onChange={handleInputChange}
            className="form-control"
            id="validationTextarea"
            placeholder="Max Limit 200 Characters "
          >
            {announcementText}
          </textarea>
          <div className="invalid-feedback"></div>
        </div>
        <div className="modal-butoons">
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
          <button onClick={handleAddAnnouncementData} className="sure-button">
            Create{" "}
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={addUserLoading === "loading" ? true : false}
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
    </>
  );
};

export default CreateAnnouncement;
