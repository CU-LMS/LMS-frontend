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
import { readSubjectsData } from "../../../../redux/slices/subjects/subjectSliceAction";
import { addUserByAdmin } from "../../../../redux/slices/courses/coursesActions";
import LoadingPage from "../../../../hoc/LoadingPage";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./AddUser.css";

const AddUser = () => {
  const [addUserData, setAddUserData] = useState({
    userFirstName: "",
    UserLastName: "",
    UserEmail: "",
    phoneCode: "",
    phoneNumber: "",
    gender: "",
    employeeId: "",
  });

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

  const listData = useSelector((state) => state?.courseState?.getRoleList);
  const userList = useSelector((state) => state?.courseState?.userAddedByAdmin);
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

  const handleAddUserData = () => {
    dispatch(addUserByAdmin(addUserData));
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
    dispatch(getRoleListData());
  }, []);

  return (
    <>
      <div className="modalParent">
        <div className="invisible-button"></div>
        <div className="button-useradd">
          <button className="openModal" onClick={openModal}>
            Add User
          </button>
        </div>

        <div className="do-and-dons">
          <button onClick={openDoAndDonts} className="doanddont-button">
            <ThumbUpAltIcon /> Do's and Don'ts <ThumbDownIcon />
          </button>
        </div>
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
        <div className="add-user-heading">Add User</div>
        {listData?.length > 0 ? (
          <>
            <select
              id="subject"
              name="subject"
              className="form-control"
              required
              onChange={(e) =>
                setAddUserData({ ...addUserData, roleId: e.target.value })
              }
            >
              <option disabled selected value="">
                Select Role
              </option>
              {listData?.length > 0 && listData
                ? listData?.map((ele) => {
                    return (
                      <>
                        <option value={ele?.cat}>{ele?.key}</option>
                      </>
                    );
                  })
                : null}
            </select>
          </>
        ) : null}
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
                onChange={(e) => {
                  setAddUserData({
                    ...addUserData,
                    userFirstName: e.target.value,
                  });
                }}
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
                onChange={(e) => {
                  setAddUserData({
                    ...addUserData,
                    UserLastName: e.target.value,
                  });
                }}
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
              onChange={(e) => {
                setAddUserData({ ...addUserData, UserEmail: e.target.value });
              }}
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
                onChange={(e) => {
                  setAddUserData({ ...addUserData, phoneCode: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                className="form-control"
                required
                onChange={(e) => {
                  setAddUserData({
                    ...addUserData,
                    phoneNumber: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="name-flex">
          <div className="col-md-6">
            <div className="form-group marginToRight">
              <select
                id="gender"
                name="gender"
                className="form-control"
                required
                onChange={(e) => {
                  setAddUserData({ ...addUserData, gender: e.target.value });
                }}
              >
                <option disabled selected value="">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="col-md-6 ">
            <div className="form-group ">
              <input
                type="text"
                name="employeeId"
                id="employeeId"
                placeholder="Employee Id"
                className="form-control"
                required
                onChange={(e) => {
                  setAddUserData({
                    ...addUserData,
                    employeeId: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>

        <div className="modal-butoons">
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
          <button onClick={handleAddUserData} className="sure-button">
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

      <Modal></Modal>
    </>
  );
};

export default AddUser;
