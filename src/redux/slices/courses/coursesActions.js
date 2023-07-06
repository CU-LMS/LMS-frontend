import {
  handleLoding,
  handleCourses,
  handleFAQs,
  handleMyCourseData,
  handleAddAnnouncement,
  handleGetRoleList,
  handleAcouncCourseList,
  handleShowAnnouncement,
  handleNonEnrollCourse,
  handleAddUserByAdmin,
  handleAddUserLoading,
  handleParticularCourseData
} from "./coursesSlice";
import { toast } from "react-toastify";
import http from "../../../hoc/axiosClient";
import { useState } from "react";
import swal from "sweetalert";

export const createCourse = (courseData) => async (dispatch) => {
  try {
    dispatch(handleLoding("loading"));

    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;
    const newFormData = new FormData();
    newFormData.append("courseName", courseData.courseName);
    newFormData.append("courseCode", courseData.courseCode);
    newFormData.append("availble", courseData.availability);
    newFormData.append("durationConfigurationId", courseData.duration);
    newFormData.append("dStartDate", courseData.dStartDate);
    newFormData.append("dEndDate", courseData.dEndDate);
    newFormData.append("dStartTime", courseData.dStartTime);
    newFormData.append("dEndTime", courseData.dEndTime);
    newFormData.append("guestsPermitted", true);
    newFormData.append("bannerImageName", courseData?.bannerImage?.name);
    newFormData.append(
      "contentViewConfigurationId",
      parseInt(courseData.contentView)
    );
    newFormData.append(
      "courseViewConfigurationId",
      parseInt(courseData.courseView)
    );
    newFormData.append("disciplineId", courseData.discipline);
    newFormData.append("subjectId", courseData.subject);
    newFormData.append("semester", courseData.semester);
    newFormData.append(
      "file",
      courseData.bannerImage,
      courseData.bannerImage.name
    );
    newFormData.append("file", courseData.courseDoc, courseData.courseDoc.name);
    newFormData.append(
      "file",
      courseData.courseVideo,
      courseData.courseVideo.name
    );    
    newFormData.append("isDraft", courseData?.isDraft);
    
    let config = {
      method: "post",
      url: "course/AddCourseFilesDoc",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: newFormData,
    };
    let result = await http(config);
    console.log("check duplicate", result.data);
    if (result.data.data != null) {
      swal({
        title: "Course Created!",
        text: "Course Created Successfully.",
        icon: "success",
        button: "Close",
      });
    } else {
      swal({
        title: "Warning",
        text: result.data.message,
        icon: "warning",
        button: "Close",
      });
    }
    dispatch(handleLoding("idle"));
  } catch (err) {
    console.log(err);
    dispatch(handleLoding("idle"));
  }
};

export const readCourseData = () => async (dispatch) => {
  try {
    let config = {
      method: "post",
      url: "Course/GetCourseList",
      data: {
        pageNo: 0,
        pageSize: 0,
      },
    };
    const response = await http(config);
    dispatch(handleCourses(response?.data?.data));
  } catch (error) {
    console.log(error);
  }
};

export const readParticularCourseData = (courseId) => async (dispatch) => {
  try{
    let config = {
      method: "get",
      url: `Course/GetByCourseId?courseId=${courseId}`,
    };
    const response = await http(config);
    console.log(response)
    dispatch(handleParticularCourseData(response?.data?.data));
  }catch(err){
    console.log(err);
  }
}
export const enrollCourse = (courseId) => async (dispatch) => {
  try {
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let config = {
      method: "post",
      url: "EnrollCourse/AddEnrollCourse",
      data: {
        learnerUserId: credentials.userId,
        courseId: courseId,
      },
    };

    const response = await http(config);
    if (response?.data?.statusCode === 200) {
      toast.success("Sucessfully Enrolled");
      window.location.href = `/watch-course?courseId=${courseId}`;
    } else {
      toast.error("Error While Enrolling");
    }
  } catch (error) {
    toast.error("Error While Enrolling");
  }
};

export const readFAQData = () => async (dispatch) => {
  try {
    let config = {
      method: "post",
      url: "FAQ/GetFAQWithAnswerList",
      data: {
        pageNo: 0,
        pageSize: 0,
      },
    };
    const response = await http(config);
    dispatch(handleFAQs(response?.data?.data));
  } catch (error) {
    console.log(error);
  }
};

export const readMyCourseData = () => async (dispatch) => {
  try {
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let config = {
      method: "post",
      url: "Course/GetCourseListWithEnrollUser",
      data: {
        userId: credentials.userId,
      },
    };
    const response = await http(config);
    dispatch(handleMyCourseData(response?.data?.data));
  } catch (error) {
    console.log(error);
  }
};

// action calling for addAnnouncement

export const GetConfigureData = () => async (dispatch) => {
  dispatch(handleLoding("loading"));
  try {
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;

    let config = {
      method: "post",
      url: "Configuration/GetModuleConfigurationList",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    };

    let result = await http(config);

    if (result.data.data != null) {
      dispatch(handleAddAnnouncement(result.data.data));
    } else {
      swal({
        title: "Warning",
        text: result.data.message,
        icon: "warning",
        button: "Close",
      });
    }
    dispatch(handleLoding("idle"));
  } catch (err) {
    dispatch(handleLoding("idle"));
  }
};

// action calling for add Announcement button

export const AddAnnouncementButton = (courseData) => async (dispatch) => {
  dispatch(handleLoding("loading"));

  try {
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;
    let data = {
      announcementId: courseData?.configraData,
      announcements: courseData?.announcementText,
      visibleRole: (courseData?.roleList).toString(),
      accessId: courseData?.accessId,
    };
    let config = {
      method: "post",
      url: "Announcement/AddAnnouncement",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data,
    };

    let result = await http(config);

    if (result.data.data != null) {
      swal({
        title: "Announcement Created!",
        text: "Announcement Created Successfully.",
        icon: "success",
        button: "Close",
      });
    } else {
      swal({
        title: "Warning",
        text: result.data.message,
        icon: "warning",
        button: "Close",
      });
    }
    dispatch(handleLoding("idle"));
  } catch (err) {
    swal({
      title: "Warning",
      text: err.message,
      icon: "warning",
      button: "Close",
    });
    dispatch(handleLoding("idle"));
  }
};

// api for getRole List

export const getRoleListData = () => async (dispatch) => {
  dispatch(handleLoding("loading"));
  try {
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;

    let config = {
      method: "post",
      url: "Configuration/GetRolesList",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {},
    };

    let result = await http(config);

    if (result.data.data != null) {
      let listArray = [];
      result.data.data.forEach((ele) => {
        let dummyD = { cat: ele.roleId, key: ele.roleName };
        listArray.push(dummyD);
      });

      dispatch(handleGetRoleList(listArray));
    } else {
    }
    dispatch(handleLoding("idle"));
  } catch (err) {
    console.log(err);
    dispatch(handleLoding("idle"));
  }
};

export const readCourseDataAnounc = () => async (dispatch) => {
  try {
    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;

    let config = {
      method: "post",
      url: "Course/GetCourseList",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        pageNo: 0,
        pageSize: 0,
      },
    };
    const response = await http(config);
    dispatch(handleAcouncCourseList(response?.data?.data));
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// action calling for show announcement here
export const showAnnouncement = () => async (dispatch) => {
  try {
    let userData = JSON.parse(localStorage.getItem("userData"));
    console.log("HHHHHHHHH", userData);
    let localStorageData = JSON.parse(localStorage.getItem("cuchdCsrf"));
    let accessToken = localStorageData.accessToken;

    let config = {
      method: "post",
      url: "Announcement/GetAnnouncementListWithFilter",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        userId: userData?.userId,
        roleId: userData?.roleId.toString(),
      },
    };

    const response = await http(config);
    console.log("Announcement___Response", response);
    dispatch(handleShowAnnouncement(response?.data?.data));
    console.log("ZZZZZZZZZZZZ", response);
  } catch (error) {
    console.log(error);
  }
};

export const readNonErollCourseData = () => async (dispatch) => {
  try {
    let credentials = JSON.parse(localStorage?.getItem("cuchdCsrf"));
    let config = {
      method: "post",
      url: "Course/GetCourseListWithoutEnrollUser",
      data: {
        userId: credentials.userId,
      },
    };
    const response = await http(config);
    dispatch(handleNonEnrollCourse(response?.data?.data));
  } catch (error) {
    console.log(error);
  }
};

// action for Add user by admin :

export const addUserByAdmin = (userData) => async (dispatch) => {
  try {
    dispatch(handleAddUserLoading("loading"));
    let config = {
      method: "post",
      url: "Login/CreateUser",
      data: {
        firstName: userData.userFirstName,
        lastName: userData.UserLastName,
        userId: userData.UserEmail,
        phoneCode: userData.phoneCode,
        phoneNumber: userData.phoneNumber,
        gender: userData.gender,
        empId: userData.employeeId,
      },
    };
    let result = await http(config);
    console.log("check duplicate", result);
    dispatch(handleAddUserByAdmin(result?.data?.data));
    if (result.data.data != null) {
      swal({
        title: "User Added Successfully",
        text: "User Added Successfully.",
        icon: "success",
        button: "Close",
      });
    } else {
      swal({
        title: "Warning",
        text: result.data.message,
        icon: "warning",
        button: "Close",
      });
    }
    dispatch(handleAddUserLoading("idle"));
  } catch (err) {
    
    swal({
      title: "Warning",
      text: err.message,
      icon: "warning",
      button: "Close",
    });
    dispatch(handleAddUserLoading("idle"));
  }
};
