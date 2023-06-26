import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Multiselect from "multiselect-react-dropdown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  AddAnnouncementButton,
  readCourseDataAnounc,
  readCourseData,
  addAnnouncement,
  getRoleListData,
} from "../../../../redux/slices/courses/coursesActions";
import "./AddUser.css";
import { readSubjectsData } from "../../../../redux/slices/subjects/subjectSliceAction";

const AddUser = () => {
  const dispatch = useDispatch();
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
    (state) => state?.courseState?.anouncCourseList
  );
  const announceCourseWise = useSelector(
    (state) => state?.courseState?.courses
  );

  const listData = useSelector((state) => state?.courseState?.getRoleList);

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
    if (dropdownType == "6") {
      //announcData.accessId = anouncCourseId;
      setAccessId(anouncCourseId);
    }

    if (dropDownSubjectType == "5") {
      //announcData.accessId = anounceSubjectId;
      setAccessId(anounceSubjectId);
    }

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

  useEffect(() => {
    dispatch(addAnnouncement());
    dispatch(getRoleListData());
    dispatch(readCourseDataAnounc());
    dispatch(readCourseData());
    dispatch(readSubjectsData());
  }, []);

  return (
    <>
      {console.log(roleList)}
      <div className="modalParent">
        <button className="openModal" onClick={openModal}>
          Add User
        </button>
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
            width: "50%",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <div className="add-user-heading">Add User</div>
        <div className="name-flex">
          <div className="col-md-6 ">
            <div className="form-group marginToRight">
              <input
                type="text"
                name="userFirstName"
                id="userFirstName"
                placeholder="First Name"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="userLastName"
                id="UserLastName"
                placeholder="Last Name"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="col-6-area">
          <div className="form-group">
            <input
              type="email"
              name="userEmail"
              id="UserEmail"
              placeholder="User Email"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="name-flex">
          <div className="col-md-6 ">
            <div className="form-group marginToRight">
              <input
                type="text"
                name="phoneCode"
                id="phoneCode"
                placeholder="Phone Code"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="name-flex"></div>

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

        <div className="modal-butoons">
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
          <button onClick={handleAddAnnouncementData} className="sure-button">
            Create{" "}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddUser;
